import { Divider, VStack } from '@chakra-ui/react';
import NoteCard from './NoteCard';

const NoteCardContainer = ({ notes, selectNote, selectedNote }) => {
	return (
		<>
			<VStack spacing={null}>
				<Divider />
				{notes.data.map((note) => {
					return (
						<>
							<NoteCard
								selectedNote={selectedNote}
								selectNote={selectNote}
								key={notes.data.id}
								note={note}
							/>
						</>
					);
				})}
			</VStack>
		</>
	);
};

export default NoteCardContainer;
