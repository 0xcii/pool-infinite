import {
    Image,
    chakra,
    Flex,
    HStack,
} from "@chakra-ui/react";
import React from "react";
import logoPng from '../images/logo.png';
import bgBalance from '../images/BgBalance.png';
import alert from '../images/alertButton.png';
import create from '../images/Create.png';

import Wallet from 'components/Wallet';

export default function AppHeader({ toggleWalletModal }){

    return(<chakra.header
        transition="box-shadow 0.2s"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden">
        <chakra.div mt={8} h="4.5rem" mx="auto" maxW="1200px">
        <Flex w="1034px" h="66px" px="10" align="center" justify="space-between">
            <HStack>
                <Image h="14" w="full" src={logoPng} alt='Logo' />
            </HStack>
            <HStack h="66px" px="10" align="center">
                
                {/* <HStack>
                    <Image h="14" w="full" src={bgBalance} alt='bgBalance' />
                </HStack>
                <HStack>
                    <Image h="14" w="full" src={alert} alt='alert' />
                </HStack>
                <HStack>
                    <Image h="14" w="full" src={create} alt='create' />
                </HStack> */}
                <HStack>
                        <Wallet toggleWalletModal={toggleWalletModal} />
                </HStack>
            </HStack>
            </Flex>
            </chakra.div>
        </chakra.header>);
}