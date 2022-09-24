import React from "react";
import {
    Box,
    Text,
    Button,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    Link,
    VStack,
    chakra,
    useDisclosure,
    Image, Stack 
} from "@chakra-ui/react";

import topWinner from '../../images/topwin.png';
import win1 from '../../images/winner1.png';
import win2 from '../../images/winner2.png';
import win3 from '../../images/winner3.png';
import win4 from '../../images/winner4.png';
import win5 from '../../images/winner5.png';
import win6 from '../../images/winner6.png';

const WinnerCard =  (props:any) => {
    const { userInfo } = props;
    return (
    <Flex direction={{ base: "column", md: "row" }} mx="auto">
        <Image w='100%' mr="8px" src={userInfo.img} alt='Start To Win' />
        <Box>
            <Box color="white" w="full">
                {userInfo.name}
            </Box>
            <Box color="rgba(94, 234, 212, 1)" w="full">
                    {userInfo.balance}
            </Box>
        </Box>
    </Flex>
    
    )
};

const users = [
    {
        "name":"@dicar",
        "balance": "19.5ETH",
        "img": win1,
    },
    {
        "name": "@astroo2",
        "balance": "15ETH",
        "img": win2,
    },
    {
        "name": "@micle",
        "balance": "10ETH",
        "img": win3,
    },
    {
        "name": "@11erorD",
        "balance": "5.65ETH",
        "img": win4,
    },
    {
        "name": "@11erorD",
        "balance": "5.65 ETH",
        "img": win5,
    },
    {
        "name": "@11erorD",
        "balance": "5.65 ETH",
        "img": win6,
    }
]
    

const Footer =  (props:any) => {
    const { userInfo } = props;
    return (
        <Box w="full" maxW="1439px">
            <Flex 
                direction={{ base: "column", md: "row" }}
                _light={{ bg: "brand.700" }}
                mt="30px"
                mx="auto"
                w="95%" maxW="1439px"
                >
            <chakra.h2
                fontSize={{ base: "3xl", sm: "4xl" }}
                fontWeight="extrabold"
                lineHeight="shorter"
                color="white"
                mb={5}
                >
                <Image 
                src={topWinner} alt='Save To Win' />
            </chakra.h2>
        </Flex>
            <Flex>
                
                {users.map((userInfo) =>
                    <WinnerCard userInfo={userInfo} />
                )}
            </Flex>
        </Box>
        
    )
};


export default Footer;
