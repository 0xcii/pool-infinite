import {
    Box,
    Image,
    Flex,
    Icon,
    Link,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
import React from "react";
import ico from '../images/ico.png';
import pools from '../images/pools.png';
import my from '../images/my.png';
import setting from '../images/setting.png';
import winners from '../images/winners.png';
import sidebarPng from '../images/sidebar.png';
import profilePng from '../images/profileBG.png'; 
import myProfile from '../images/MyProfile.png';
import profileUser from '../images/profileUser.png';
import logout from '../images/logout.png';
import Avatar from '../images/Avatar.png';
import WithdrawUSDC from '../images/widrawUSDC.png';
import CurrentPool from '../images/currentPool.png';
import PoolLogo from '../images/poolLogo.png';
import USDCLogo from '../images/usdcLogo.png';
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
    const {   Content  } = props;
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
            borderRightStyle: "solid",
            borderRightColor: "rgb(236,0,140)",
            borderRightWidth: "3px",
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
        left="4"
        zIndex="sticky"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg= "#171a3f"
        border
        color="inherit"
        borderRightWidth="1px"
        fontSize="14px"
        w="72px"
        {...props}
      >
        <Flex px="5" py="5" align="center">
          <Link href={`/`}>
              <Image  src={ico} alt='ico' />
          </Link>
        </Flex>
        <Flex
          direction="column"
          as="nav"
        >
          <NavItem direction="column" >
          <Link style={{ display: "block" }} href={`/allpools`}>
              <Image ml={1.5} src={pools} alt='pools' />
                AllPools  
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
                MyPool
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
      h='600px'
      as="nav"
      overflowX="hidden"
      overflowY="auto"
      pos="fixed"
      top="10"
      right="10">
        <Box w="98%" h='600px' 
        backgroundSize="contain" 
        backgroundRepeat="no-repeat"
        bgImage={profilePng}>
          <Box w="100%" pt="25px" h='300px' 
            alignContent="center"
            backgroundSize="contain" 
            backgroundRepeat="no-repeat"
            bgImage={profileUser}>
          <Image h='30px' m="0 auto" src={myProfile} alt='myProfile' />
          <Image h='80px' m="20px auto 10px auto" src={Avatar} alt='Avatar' />
          <Box fontSize="20px" fontWeight="600" textAlign="center">Level-1</Box>
          <Box fontSize="16px" fontWeight="700"
          textAlign="left" ml="15px" mt="40px">Your Reward</Box>

          <Flex _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }} 
          borderRadius = "10px"
          backgroundSize="contain" 
          backgroundRepeat="no-repeat"
          w='80%'
          h='40px' m="20px auto 60px auto" bgImage={WithdrawUSDC}>
              <Image ml="10px" mt="10px" h="50%" src={USDCLogo} alt='USDCLogo' />
              <Text ml="10px" mt="10px" fontSize="12px" fontWeight="bold">100 USDC</Text>
              <Text ml="10px" mt="10px" fontSize="12px">Withdraw {'>'}</Text>
          </Flex>


          <Box fontSize="16px" fontWeight="700"
          textAlign="left" ml="15px">Current Pool</Box>
          <Flex
          borderRadius = "10px"
          h="80px" w='90%' m="20px auto 10px auto" bgImage={CurrentPool}>
            <Image w="50px" h="50px" ml="10px" mt="15px" src={PoolLogo} alt='PoolLogo' />
            
            <Box color="rgba(147, 197, 253, 1)" mt="15px" ml="15px">
              <Text color="white" fontSize="8px" fontWeight="bold">Non-Risk Pool 1</Text>
              <Text fontSize="12px">May get: 100 USDC</Text>
              <Text fontSize="12px">18h:17m:29s</Text>
            </Box>
            
          </Flex>

        </Box>
      
          {/* <Image src={sidebarPng} alt='sidebar' /> */}
        </Box>
          
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
  