import { Divider, VStack } from '@chakra-ui/react';
import NoteCard from './NoteCard';

const FavoriteNotesContainer = ({ notes, selectNote, selectedNote }) => {
	return (
		<>
			<VStack spacing={null}>
				<Divider />
				{notes &&
					notes.map((note = {}) => {
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
			</VStack>
		</>
	);
};

export default FavoriteNotesContainer;
