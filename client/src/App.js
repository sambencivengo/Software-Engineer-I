import { Box, Center, Flex, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './App.css';
import NoteCardContainer from './components/NoteCardContainer';
import SelectedNoteContainer from './components/SelectedNoteContainer';

const url = 'http://localhost:5000/api/v1/notes';

function App() {
	const fetchNotes = async (url = '') => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			setNotes(data);
			if (localStorage['selectedNote']) {
				const savedNote = localStorage.getItem('selectedNote');
				const found = data.data.find((note) => {
					return note.id === parseInt(savedNote);
				});

				setSelectedNote(found);
			} else {
				setSelectedNote(data.data[5]);
			}
			return data;
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};
	const [notes, setNotes] = useState(null);
	const [error, setError] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);

	useEffect(() => {
		fetchNotes(url);
	}, []);

	const selectNote = (note) => {
		setSelectedNote(note);
		localStorage.setItem('selectedNote', note.id);
	};

	const postFav = async (fav) => {
		console.log(fav);
		try {
			const res = await fetch('http://localhost:5000/api/v1/favorites', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id: fav }),
			});
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	const favorite = async (note) => {
		const res = await postFav(note.id);
	};

	return (
		<Grid minH="100vh">
			<Flex color="white">
				<Box w="50vh" bg="theme.primary" boxShadow="10px 10px">
					<Center>
						{notes && (
							<NoteCardContainer
								selectNote={selectNote}
								notes={notes}
								selectedNote={selectedNote}
							/>
						)}
						{error && (
							<h1>
								Oops!! There was a problem grabbing your notes
							</h1>
						)}
					</Center>
				</Box>

				<Box flex="1" bg="theme.background">
					<Center w="100%" h="100%">
						{selectedNote && (
							<SelectedNoteContainer
								note={selectedNote}
								handleFavorite={favorite}
							/>
						)}
					</Center>
				</Box>
			</Flex>
		</Grid>
	);
}

export default App;
