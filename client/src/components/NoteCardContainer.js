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

export default NoteCardContainer;
