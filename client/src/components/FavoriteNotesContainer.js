import { Divider, useStyleConfig, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import NoteCard from './NoteCard';

const FavoriteNotesContainer = ({ favorites, selectNote, selectedNote }) => {
	return (
		<>
			<VStack spacing={null}>
				<Divider />
				{favorites &&
					favorites.map((note) => {
						console.log(note);
						return (
							<>
								<NoteCard
									selectedNote={selectedNote}
									selectNote={selectNote}
									key={note.id}
									note={note}
								/>
							</>
						);
					})}

				{/* <Text>{notes.numberOfHits}</Text> */}
			</VStack>
		</>
	);
};

export default FavoriteNotesContainer;
