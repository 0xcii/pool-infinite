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
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Image, Stack 
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
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
    <chakra.div mt={6} h="4.5rem" mx="auto" maxW="1200px">
        <Flex w="full" h="full" px="6" align="center" justify="space-between">
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
            maxW="824px"
            align="center"
            color="gray.400"
        >
        <HStack
            spacing={5}
            mr={5}
            color="white"
            display={{
                base: "none",
                md: "inline-flex",
            }}
        >
            <Link isExternal href="#"> 
                <Text fontSize='lg' fontWeight="bold" > Join us </Text>
            </Link>
            <Link isExternal href="#"> 
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
            px={10}
            py={150}
            mx="auto"
        >
        <Box
            
            w={{ base: "full", md: 2 / 12, xl: 7 / 12 }}
            mx="auto"
            pr={{ md: 20 }}
        >
            <chakra.h2
                fontSize={{ base: "3xl", sm: "4xl" }}
                fontWeight="extrabold"
                lineHeight="shorter"
                color="white"
                _dark={{ color: "gray.100" }}
                mb={6}
                >
                <Image 
                src={savePng} alt='Save To Win' />
            </chakra.h2>
            <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.100"
                _dark={{ color: "gray.300" }}
            >
                Pool Infinite is a saving to win protocol, enabling users to win without any loss as well as the biggest decentralized NFT Lottery Platform dedicated to Web 3.
            </chakra.p>
            <Stack
                direction={{ base: "column", sm: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={2}
            >
            <Box mt="10" w='400px'  color='white'>
                <Link  href="/app">
                    <Image w='100%' h="80px" src={startPng} alt='Start To Win' />
                </Link>
            </Box>
            </Stack>
            </Box>
            <Box mt="-10" textAlign="center">
                <Image
                    w='400'
                    h="350px"
                    src={rightPng}
                />
            </Box>
        </Flex>
        );

    return ( 
    <Box pos="relative" bg="#0B0D21">
        {Header}

        {Content}


    </Box>)
}