import React from "react";
import {
  chakra,
  Box,
  Flex,
  Text,
  SimpleGrid,
  Link,
  Badge,
  Image
} from "@chakra-ui/react";
import deposit from '../images/deposit.png';
import cardBG from '../images/card_bg.gif';
import cardBG2 from '../images/card_bg2.gif';
import Footer from "../components/Footer";


export default function Pools(){

  return (
    <Box ml={{ base: 0, md: 40 }} mr={{ base: 0, md: 80 }}>
    <Box as="main" p="4">
    <Box>
      <Text 
            fontSize="2xl"
            fontWeight={["bold", "extrabold"]}
          
            > All Pools</Text>
    <Flex
      boxSize="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
      >
        <Box>
          <Box>
            <SimpleGrid
              columns={[1, , 2]}
              // gap="24px"
              // rounded="md"
              textAlign="center"
            >
              <Box
                bg="gray.50"
                // _dark={{ bg: "gray.900" }}
                pt={1}
                h="180px"
                w="49 0px"
                shadow="lg"
                rounded="md"
                bgImage= {cardBG}
                opacity= {0.95}
              >
                <Flex  direction="column" >
                  <Box px={10} >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Non-RISK Pool A
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="3xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      17500 USDC
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="2xl"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get {''}
                      
                      <chakra.p ml={20}  fontSize="xl" fontWeight={["bold", "extrabold"]} color="#00BAAD">1750 USDC</chakra.p>
                    </chakra.p>
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    // roundedBottom="md"
                    
                  >
                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="semibold"
                      rounded="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                      href="/allpools/a"
                    >
                      <Image display="inline"  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="gray.50"
                // _dark={{ bg: "gray.900" }}
                pt={5}
                h="180px"
                w="49 0px"
                shadow="lg"
                rounded="md"
                bgImage= {cardBG}
                opacity= {0.95}
              >
                <Flex  direction="column">
                  <Box px={10} >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Non-RISK Pool B
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="3xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      25000 USDC
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="2xl"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get {''}
                      
                      <chakra.p ml={20}  fontSize="xl" fontWeight={["bold", "extrabold"]} color="#00BAAD">500 $PINT</chakra.p>
                    </chakra.p>
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="semibold"
                      rounded="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                      href="/allpools/b"
                    >
                      <Image  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="gray.50"
                // _dark={{ bg: "gray.900" }}
                pt={5}
                h="180px"
                w="49 0px"
                shadow="lg"
                rounded="md"
                bgImage= {cardBG2}
                opacity= {0.95}
              >
                <Flex  direction="column">
                  <Box px={10} >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      MID-RISK Pool C
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="3xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      20000 USDC
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="2xl"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get {''}
                      
                      <chakra.p ml={20}  fontSize="xl" fontWeight={["bold", "extrabold"]} color="#00BAAD">200 USDC</chakra.p>
                    </chakra.p>
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="semibold"
                      rounded="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                      href="/allpools/c"
                    >
                      <Image  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="gray.50"
                // _dark={{ bg: "gray.900" }}
                pt={5}
                h="180px"
                w="49 0px"
                shadow="lg"
                rounded="md"
                bgImage= {cardBG2}
                opacity= {0.95}
              >
                <Flex  direction="column">
                  <Box px={10} >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      HIGH-RISK Pool D
                    </Badge>  
                    <Text
                      mb={2}
                      fontSize="3xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      20000 USDC
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="2xl"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      1 Winner will get {''}
                      
                      <chakra.p ml={20}  fontSize="xl" fontWeight={["bold", "extrabold"]} color="#00BAAD">20000 USDC</chakra.p>
                    </chakra.p>
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                    
                  >
                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="semibold"
                      rounded="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                      href="/allpools/d"
                    >
                      <Image   src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Flex>
    
    <Footer />
    </Box>
    </Box>
    </Box>
  );
};



