import {
    Image,
    chakra,
    Flex,
    HStack,
} from "@chakra-ui/react";
import React from "react";
import logoPng from '../images/logo.png';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import RenderWalletModal from 'components/Modal/RenderWallet';
import connect from '../images/connect.png';
import profile from '../images/profile.png';
import Header from 'components/Header';
import Modal, { useModal } from 'components/Modal';


export default function AppHeader(props:any){
    const { active: walletConnected } = useWeb3React<Web3Provider>();
    const { modalIsOpen: walletModalIsOpen, toggleModal: toggleWalletModal } = useModal();


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
                        <Header toggleWalletModal={toggleWalletModal} />
                        <Modal
                            component={RenderWalletModal}
                            isOpen={walletModalIsOpen}
                            toggleModal={toggleWalletModal}
                            title="Select a Wallet"
                        />
                    </HStack>
                {/* <HStack ml={5}>
                    <Image h="16" mt="3" src={connect} alt='Connect' />
                </HStack> */}
                {!walletConnected && (
                <HStack ml={5}>
                    <Image h="14" src={profile} alt='Profile' />
                </HStack>)}
            </Flex>
            
            </Flex>
            </chakra.div>
        </chakra.header>);
}