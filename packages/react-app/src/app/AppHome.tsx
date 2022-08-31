import {
    Box,
    Image,
    Flex,
    Icon,
    Link,
    useColorModeValue,
  } from "@chakra-ui/react";
import React from "react";
import ico from '../images/ico.png';
import pools from '../images/pools.png';
import my from '../images/my.png';
import setting from '../images/setting.png';
import winners from '../images/winners.png';
import sidebarPng from '../images/sidebar.png';
import logout from '../images/logout.png';
import AppHeader from './AppHeader';
import Modal, { useModal } from 'components/Modal';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import RenderJoinModal from 'components/Modal/RenderJoin';
import RenderWalletModal from 'components/Modal/RenderWallet';
import RenderWithdrawModal from 'components/Modal/RenderWithdraw';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

  export default function AppHome(props:any){
    const { Content  } = props;
    const toast = useToast()

    const color = useColorModeValue("gray.600", "gray.300");
  

    const NavItem = (props:any) => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="inherit"
          _dark={{ color: "gray.400" }}
          _hover={{
            bg: "gray.100",
            _dark: { bg: "gray.900" },
            color: "gray.900",
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: color,
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      );
    };
  
    const SidebarContent = (props:any) => (
      <Box
        borderRadius="xl"
        as="nav"
        pos="fixed"
        top="10"
        left="10"
        zIndex="sticky"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg= "#232966"
        border
        color="inherit"
        borderRightWidth="1px"
        w="24"
        {...props}
      >
        <Flex px="6" py="5" align="center">
          <Link href={`/`}>
              <Image  src={ico} alt='ico' />
          </Link>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
        >
          <NavItem direction="column" >
          <Link style={{ display: "block" }} href={`/allpools`}>
              <Image ml={1.5} src={pools} alt='pools' />
              All Pools
            </Link>
          </NavItem>
        <NavItem direction="column" onClick={() =>
                  toast({
                    title: 'Tip',
                    description: "Coming soon.",
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position: "top"
                  })
                }>
          {/* <Link style={{ display: "block" }} href={`/winners`}> */}
            <Image  mb={2} src={winners} alt='winners' />
                Winners
          {/* </Link> */}
            </NavItem>
        <NavItem direction="column"  margin="1rem 0" onClick={() =>
                  toast({
                    title: 'Tip',
                    description: "Coming soon.",
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position: "top"
                  })
                }>
            {/* <Link style={{ display: "block" }} href={`/mypool`}> */}
            <Image mb={2} src={my} alt='my' />
                My Pool
            {/* </Link> */}
            </NavItem>
        <NavItem mb={10} direction="column" onClick={() =>
                  toast({
                    title: 'Tip',
                    description: "Coming soon.",
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position: "top"
                  })
                }>
            {/* <Link style={{ display: "block" }} href={`/settings`}> */}
            <Image mb={2} src={setting} alt='setting' />
                Settings
            {/* </Link> */}
        </NavItem>

        <NavItem mt={55} direction="column" >
            <Link href={`/`}>
              <Image src={logout} alt='logout' />
            </Link>
        </NavItem>
        </Flex>
      </Box>
    );

    const SidebarRight = (props:any) => (
      <Box 
      w='260px'
      as="nav"
      overflowX="hidden"
      overflowY="auto"
      pos="fixed"
      top="10"
      right="10">
          <Image src={sidebarPng} alt='sidebar' />
      </Box>
    
    
    );


    const { active: walletConnected } = useWeb3React<Web3Provider>();
    const { modalIsOpen: walletModalIsOpen, toggleModal: toggleWalletModal } = useModal();
    const { modalIsOpen: joinModalIsOpen, toggleModal: toggleJoinModal } = useModal();
    const { modalIsOpen: withdrawModalIsOpen, toggleModal: toggleWithdrawModal } = useModal();
    useEffect(() => {
      toggleWalletModal()
    }, [walletConnected]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
      <Box as="section" bg="#0B0D21" >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <AppHeader toggleWalletModal={toggleWalletModal} />
        <Content 
          toggleJoinModal={toggleJoinModal}
          toggleWithdrawModal={toggleWithdrawModal}
          toggleWalletModal={toggleWalletModal}
          walletModalIsOpen={walletModalIsOpen} />
        <Modal
                component={RenderJoinModal}
                isOpen={joinModalIsOpen}
                toggleModal={toggleJoinModal}
            />
        {!walletConnected && <Modal
              component={RenderWalletModal}
              isOpen={walletModalIsOpen}
              toggleModal={toggleWalletModal}
              title="Select a Wallet"
            />}
          <Modal
              component={RenderWithdrawModal}
              isOpen={withdrawModalIsOpen}
              toggleModal={toggleWithdrawModal}
              title="Weekly Lottery Pool: Withdraw Tickets"
          />
        <SidebarRight />
      </Box>
    );
  };
  