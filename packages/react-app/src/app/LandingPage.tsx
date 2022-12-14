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
import { useViewportScroll } from "framer-motion";
import {
    AiFillHome,
    AiOutlineMenu,
} from "react-icons/ai";
import { Link as ReachLink } from 'react-router-dom';
import logoPng from '../images/logo.png';
import appPng from '../images/app.png';
import savePng from '../images/savetowin.png';
import startPng from '../images/start.png';
import rightPng from '../images/right.png';
import topWinner from '../images/topwin.png';
import win1 from '../images/winner1.png';
import win2 from '../images/winner2.png';
import win3 from '../images/winner3.png';
import win4 from '../images/winner4.png';
import win5 from '../images/winner5.png';
import win6 from '../images/winner6.png';

export default function PandingPage(){
    const mobileNav = useDisclosure();

    const ref = React.useRef<HTMLDivElement | null>(null);
    const [y, setY] = React.useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;

    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    const MobileNavContent = (
    <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        w="100%"
        
        spacing={3}
        rounded="sm"
        shadow="sm"
    >
        <CloseButton
            aria-label="Close menu"
            justifySelf="self-start"
            onClick={mobileNav.onClose}
        />
        <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
            <Link as={ReachLink} to="/">Start</Link> 
        </Button>
    </VStack>
    );

    const Header = (
        <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
    >
    <chakra.div mt={10} h="4.5rem" mx="auto" w="1200px" maxW="1439px">
        <Flex  h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
                <Link as={ReachLink} to="/">
                <HStack>
                    <Image  src={logoPng} alt='Logo' />
                </HStack>
            </Link>
        </Flex>

        <Flex
            justify="flex-end"
            w="full"
            align="center"
            color="gray.400"
        >
        <HStack
            spacing={5}
            color="white"
            display={{
                base: "none",
                md: "inline-flex",
            }}
        >
            <Link isExternal href="#"> 
                <Text fontSize='lg' fontWeight="bold" > Join us </Text>
            </Link>
            <Link isExternal href="https://docs.google.com/document/d/1zknduJUFM9V7OJcLvFQtx9uxVEflK8PAwE_K2Mu8Bdc/edit#"> 
                <Text fontSize='lg' fontWeight="bold" > White Paper </Text>
            </Link>
            <Link isExternal href="/app">
                <Image  mt={6} src={appPng} alt='App' />
            </Link>
        </HStack>
        <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color="gray.800"
            _dark={{ color: "inherit" }}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
        />
        </Flex>
    </Flex>
        {MobileNavContent}
    </chakra.div>
    </chakra.header>);

    const Content = (
        <Flex
            direction={{ base: "column", md: "row" }}
            _light={{ bg: "brand.700" }}
            mt="60px"
            mx="auto"
            w="1150px" maxW="1439px"
        >
        <Box
            mx="auto"
            w="600px"
        >
            <chakra.h2
                fontSize={{ base: "3xl", sm: "4xl" }}
                fontWeight="extrabold"
                lineHeight="shorter"
                color="white"
                mb={10}
                >
                <Image src={savePng} alt='Save To Win' />
            </chakra.h2>
            <chakra.p
                mb={10}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.100"
            >
                Pool Infinite is a saving to win protocol, enabling users to win without any loss as well as the biggest decentralized NFT Lottery Platform dedicated to Web 3.
            </chakra.p>
            <Stack
                direction={{ base: "column", sm: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={2}
            >
            <Box color='white' ml="-10px">
                <Link  href="/app">
                    <Image w='100%' h="80px" src={startPng} alt='Start To Win' />
                </Link>
            </Box>
            </Stack>
            </Box>
            <Box textAlign="center">
                <Image
                    w='400'
                    h="350px"
                    src={rightPng}
                />
            </Box>
        </Flex>
        );

    const WinnerCard =  (props:any) => {
        const { userInfo } = props;
        return (
            <Box w="221px" display="block" mr="150px">
                <Flex  direction={{ base: "column", md: "row" }} mx="auto">
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
            </Box>
        )
    };
    const users = [
        {
            "name":"@dicar",
            "balance": "19.5ETH",
            "img": win1,
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
        },
        {
            "name": "@11erorD",
            "balance": "5.65ETH",
            "img": win4,
        },
        {
            "name": "@11erorD",
            "balance": "5.65ETH",
            "img": win4,
        },
        {
            "name": "@11erorD",
            "balance": "5.65 ETH",
            "img": win6,
        },
        {
            "name": "@11erorD",
            "balance": "5.65 ETH",
            "img": win5,
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
            "balance": "5.65 ETH",
            "img": win6,
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
        }
    ]
        
    const Footer = (
        <Box w="full" maxW="1439px">
            <Flex 
                direction={{ base: "column", md: "row" }}
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
                src={topWinner} alt='Top To Win' />
            </chakra.h2>
        </Flex>
            <Flex 
            css={{
                "&::-webkit-scrollbar": {
                    width: "1px",
                    height: "4px",
                },
                "&::-webkit-scrollbar-track": {
                    width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "rgb(109,213,237)",
                    borderRadius: "24px",
                    width: "6px",
                },
                }}
            w = "90%"
            ml ="30px"
            p = "3px"
            overflowX="scroll"
            overflowY="hidden">
                {users.map((userInfo) =>
                    <WinnerCard userInfo={userInfo} />
                )}
            </Flex>
        </Box>
        
    )

    return ( 
    <Box pos="relative" bg="#0B0D21" h="120%" maxW="full">
        {Header}

        {Content}

        {Footer}
    </Box>)
}