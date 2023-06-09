import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';

const ComponentDivider = (props) => {
	return (
		<Box
			borderTop='2px solid #000000'
			py='30px'
		>
			{props.children}
		</Box>
	);
};

const ComponentsLibrary = () => {
	return (
		<Box
			bg='#f9f8fd'
			width='100%'
			padding='50px 24px'
		>
			<Box
				as='h1'
				color='#000000'
				fontFamily='Roboto Bold!important'
				fontSize='48px'
				lineHeight='36px'
				pb='24px'
				borderBottom='5px solid #000000'
			>
				Components Library
			</Box>
			<Box
				maxW='1440px'
				m='100px auto 0'
				sx={{
					'> div:last-of-type': {
						borderBottom: '2px solid #000000',
					},
				}}
			>
				<ComponentDivider>
					<Text mb='8px'>Search Input</Text>
					<SearchInput />
				</ComponentDivider>

				<ComponentDivider>
					<Text mb='8px'>Navbar</Text>
					<Navbar />
				</ComponentDivider>

				<ComponentDivider>
					<Text mb='8px'>Button</Text>
					<Button
						text='Default Text'
						bgColor='#333333'
						onClick={() => console.log('click')}
					/>
				</ComponentDivider>
			</Box>
		</Box>
	);
};

export default ComponentsLibrary;
