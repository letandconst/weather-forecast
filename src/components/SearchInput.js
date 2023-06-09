import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = () => {
	return (
		<InputGroup
			w='100%'
			maxW={{
				base: '100%',
				lg: '478px',
			}}
		>
			<InputLeftElement
				pointerEvents='none'
				children={<SearchIcon />}
			/>
			<Input
				type='text'
				placeholder='City'
				borderRadius='45px'
				border='2px solid #333333'
			/>
		</InputGroup>
	);
};

export default SearchInput;
