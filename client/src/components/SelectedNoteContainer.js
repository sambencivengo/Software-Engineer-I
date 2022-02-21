import {
	Box,
	Button,
	Divider,
	HStack,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import Links from './Links';

const SelectedNoteContainer = ({ note, handleFavorite }) => {
	return (
		<>
			<Box
				w="120vh"
				minH="80vh"
				borderWidth="5px"
				borderRadius="lg"
				overflow="hidden"
				bg="theme.paper"
			>
				<Box style={{ padding: '40px' }}>
					<Text fontSize="4xl" color="black" marginBottom="20px">
						{note.title}
					</Text>
					<Text marginLeft="20px" color="black" fontSize={'2xl'}>
						{note.list
							? note.content.map((item) => {
									return (
										<UnorderedList>
											<ListItem>{item}</ListItem>
										</UnorderedList>
									);
							  })
							: note.content}
					</Text>
					<Button
						onClick={() => {
							handleFavorite(note);
						}}
					>
						❤️
					</Button>

					<Divider />
					{note.title.includes('Sam Bencivengo') && <Links />}
				</Box>
			</Box>
		</>
	);
};

export default SelectedNoteContainer;
