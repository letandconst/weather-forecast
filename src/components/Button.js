import React from 'react';
import { Box } from '@chakra-ui/react';

const Button = ({ text, bgColor, onClick }) => {
	return (
		<Box
			as='button'
			variant='outline'
			padding='12px 30px'
			fontSize='14px'
			lineHeight='16px'
			bg={bgColor}
			color='#ffffff'
			onClick={onClick}
		>
			{text}
		</Box>
	);
};

export default Button;
