import React from 'react';
import { Box } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Button from '../components/Button';

const ComponentDivider = (props) => {
	<Box
		borderTop='2px solid #000000'
		py='30px'
	>
		{props.children}
	</Box>;
};

const ComponentsLibrary = () => {
	return (
		<Box
			bg='#f9f8fd'
			width='100%'
		>
			<Box
				as='h1'
				color='#000000'
				fontFamily='Roboto Bold'
				fontSize='48px'
				lineHeight='36px'
				borderBottom='2px solid #000000'
			>
				Components Library
			</Box>
			<Box
				maxW='1440px'
				mt='100px'
			>
				<ComponentDivider>
					<Navbar />
				</ComponentDivider>

				<ComponentDivider>
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
