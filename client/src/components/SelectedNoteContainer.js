import {
	Box,
	Divider,
	IconButton,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

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
						{note.title}{' '}
						<IconButton
							onClick={() => {
								handleFavorite(note);
							}}
							colorScheme="whiteAlpha"
							variant="ghost"
							icon={
								<StarIcon
									color={
										note.favorite
											? 'theme.selected'
											: 'grey'
									}
									boxSize={6}
								/>
							}
						/>
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

					<Divider />
					{note.title.includes('Sam Bencivengo') && <Links />}
				</Box>
			</Box>
		</>
	);
};

export default SelectedNoteContainer;
