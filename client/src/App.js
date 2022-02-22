import {
	Box,
	Center,
	Flex,
	Grid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './App.css';
import FavoriteNotesContainer from './components/FavoriteNotesContainer';

import NoteCardContainer from './components/NoteCardContainer';
import SelectedNoteContainer from './components/SelectedNoteContainer';

function App() {
	const [notes, setNotes] = useState(null);
	const [favNotes, setFavNotes] = useState(null);
	const [error, setError] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
	const url = 'http://localhost:5000/api/v1/notes';

	const fetchNotes = async (url = '') => {
		try {
			const res = await fetch(url);
			const data = await res.json();

			const favorites = await data.data.filter(
				(note) => note.favorite === true
			);

			setNotes(data);

			setFavNotes(favorites);

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

	useEffect(() => {
		fetchNotes(url);
	}, []);

	const selectNote = (note) => {
		setSelectedNote(note);
		localStorage.setItem('selectedNote', note.id);
	};

	const postFav = async (note) => {
		try {
			const res = await fetch('http://localhost:5000/api/v1/favorites', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ note }),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const favorite = async (note) => {
		const res = await postFav(note);

		fetchNotes(url);

		console.log(res);
	};

	return (
		<Grid minH="100vh">
			<Flex color="white">
				<Box
					w="52vh"
					bg="theme.primary"
					boxShadow="10px 10px"
					maxHeight="100vh"
					overflowY="scroll"
				>
					<VStack>
						<Text
							as="em"
							color="black"
							fontWeight="600"
							fontSize="3xl"
							style={{
								marginBottom: '15px',
								marginTop: '15px',
							}}
						>
							Sam's Notes
						</Text>

						<Tabs
							variant="soft-rounded"
							align="center"
							colorScheme="facebook"
						>
							<TabList>
								<Tab>Notes</Tab>
								<Tab
									onClick={async () => await fetchNotes(url)}
								>
									Favorites
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									{notes && (
										<NoteCardContainer
											notes={notes}
											selectNote={selectNote}
											selectedNote={selectedNote}
										/>
									)}
									{error && (
										<h1>
											Oops!! There was a problem grabbing
											your notes
										</h1>
									)}
								</TabPanel>
								<TabPanel>
									{notes && (
										<FavoriteNotesContainer
											notes={favNotes}
											selectNote={selectNote}
											selectedNote={selectedNote}
										/>
									)}
								</TabPanel>
								<TabPanel>
									<p>three!</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</VStack>
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
