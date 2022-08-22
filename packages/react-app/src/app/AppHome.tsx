import {
    Box,
    Image,
    chakra,
    Flex,
    Icon,
    Link,
    HStack,
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

  export default function AppHome(props:any){
    const { Content  } = props;

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
          <NavItem direction="column">
          <Link style={{ display: "block" }} href={`/allpools`}>
              <Image ml={1.5} src={pools} alt='pools' />
              All Pools
            </Link>
          </NavItem>
        <NavItem direction="column">
          <Link style={{ display: "block" }} href={`/winners`}>
            <Image  ml={3} src={winners} alt='winners' />
                Winners
          </Link>
            </NavItem>
        <NavItem direction="column"  margin="1rem 0">
            <Link style={{ display: "block" }} href={`/mypool`}>
            <Image ml={3} src={my} alt='my' />
                My Pool
            </Link>
            </NavItem>
        <NavItem mb={10} direction="column" >
            <Link style={{ display: "block" }} href={`/settings`}>
            <Image ml={3} src={setting} alt='setting' />
                Settings
            </Link>
        </NavItem>

        <NavItem mt={50} direction="column" >
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

    return (
      <Box as="section"  >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <AppHeader />
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
        <SidebarRight />
      </Box>
    );
  };
  