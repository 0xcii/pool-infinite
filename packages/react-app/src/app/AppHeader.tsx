import {
    Image,
    chakra,
    Flex,
    HStack,
} from "@chakra-ui/react";
import React from "react";
import logoPng from '../images/logo.png';
import Wallet from 'components/Wallet';

export default function AppHeader({ toggleWalletModal }){

    return(<chakra.header
        transition="box-shadow 0.2s"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden">
        <chakra.div mt={8} h="4.5rem" mx="auto" maxW="1200px">
            <Flex w="full" h="16" px="10" align="center" justify="space-between">
                <Flex align="center">
                <HStack>
                    <Image h="14" w="full" src={logoPng} alt='Logo' />
                </HStack>
                <HStack ml={5}>
                        <Wallet toggleWalletModal={toggleWalletModal} />
                    </HStack>
            </Flex>
            
            </Flex>
            </chakra.div>
        </chakra.header>);
}