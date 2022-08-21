import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import logoPng from './logo.png';


 
const Logo = () => (
    <Box boxSize='sm'>
        <Image  src={logoPng} alt='Logo' />
        {/* <Image  src='https://bit.ly/dan-abramov' alt='Dan Abramov' /> */}
    </Box>
);

export default Logo;
