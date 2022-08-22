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

export default function Pools(){

  return (
    <Box ml={{ base: 0, md: 60 }} mr={{ base: 0, md: 80 }}>
    <Box as="main" p="4">
    <Box>
      <Text mb={2} ml={-14}
            fontSize="2xl"
            fontWeight={["bold", "extrabold"]}
            _dark={{ color: "gray.50" }}
            lineHeight="tight"> All Pools</Text>
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
              gap="24px"
              rounded="md"
              textAlign="left"
            >
              <Box
                bg="gray.50"
                _dark={{ bg: "gray.900" }}
                pt={5}
                h={280}
                shadow="lg"
                rounded="md"
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
                    px={11}
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
                      href="/allpools/a"
                    >
                      <Image  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="gray.50"
                _dark={{ bg: "gray.900" }}
                pt={5}
                h={280}
                shadow="lg"
                rounded="md"
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
                    px={11}
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
                _dark={{ bg: "gray.900" }}
                pt={5}
                h={280}
                shadow="lg"
                rounded="md"
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
                    px={11}
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
                _dark={{ bg: "gray.900" }}
                pt={5}
                h={280}
                shadow="lg"
                rounded="md"
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
                      200000 USDC
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="2xl"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      1 Winner will get {''}
                      
                      <chakra.p ml={20}  fontSize="xl" fontWeight={["bold", "extrabold"]} color="#00BAAD">200000 USDC</chakra.p>
                    </chakra.p>
                  </Box>
                  <Flex
                    px={11}
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
                      <Image  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Flex>
    </Box>
    </Box>
    </Box>
  );
};

