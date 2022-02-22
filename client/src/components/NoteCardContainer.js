import {
	Box,
	Center,
	Divider,
	Flex,
	StackDivider,
	VStack,
} from '@chakra-ui/react';
import NoteCard from './NoteCard';
import { Text } from '@chakra-ui/react';

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
