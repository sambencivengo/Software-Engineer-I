import {
	Box,
	Button,
	Center,
	Drawer,
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

const url = 'http://localhost:5000/api/v1/notes';
const favoritesURL = 'http://localhost:5000/api/v1/favorites';

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
	const [favoriteNotes, setFavoriteNotes] = useState(null);
	const [error, setError] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);

	const fetchFavorites = async (url) => {
		try {
			const res = await fetch(favoritesURL);
			const data = await res.json();
			console.log(data);
			setFavoriteNotes(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchNotes(url);

		fetchFavorites(favoritesURL);
	}, []);

	const selectNote = (note) => {
		setSelectedNote(note);
		localStorage.setItem('selectedNote', note.id);
	};

	const postFav = async (note) => {
		note.favorite = true;

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
		console.log(res);
	};

	return (
		<Grid minH="100vh">
			<Flex color="white" overflowX="scroll">
				<Box w="50vh" bg="theme.primary" boxShadow="10px 10px">
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
									onClick={async () =>
										await fetchFavorites(favoritesURL)
									}
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
									<FavoriteNotesContainer
										favorites={favoriteNotes}
										selectNote={selectNote}
										selectedNote={selectedNote}
									/>

									{error && (
										<h1>
											Oops!! There was a problem grabbing
											your notes
										</h1>
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
