import React from 'react';
import { Box, Flex, Text, Img } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<Box
			bg='#008080'
			px={4}
			py={3}
		>
			<Flex
				alignItems='center'
				justifyContent='space-between'
			>
				<Flex
					alignItems='center'
					gap='16px'
				>
					<Img
						src='/assets/icons/cloud.png'
						alt='Weather Forecast'
						w='64px'
					/>
					<Text
						fontFamily='Roboto Bold'
						fontSize='22px'
						lineHeight='24px'
						color='white'
					>
						Weather Forecast
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
