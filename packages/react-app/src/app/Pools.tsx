import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useToken,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  Badge,
} from "@chakra-ui/react";

export default function Pools(){
  const topBg = useColorModeValue("white", "#0B0D21");
  const bottomBg = useColorModeValue("white", "gray.800");
  
  return (
    <Box bg="#0B0D21">
      <Text mb={2} ml={-14}
            fontSize="2xl"
            fontWeight={["bold", "extrabold"]}
            _dark={{ color: "gray.50" }}
            lineHeight="tight"> All Pools</Text>
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{ bg: "gray.600" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
        bg="#0B0D21"
      >
        <Box  bg="#0B0D21">
          <Box>
            <SimpleGrid
              columns={[1, , 2]}
              gap="24px"
              rounded="md"
              textAlign="left"
            >
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
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
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      17500 USDC
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        {" "}
                        total{" "}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get 1750 USDC.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
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
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                    >
                      Deposite to this Pool
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
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
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                        17500 USDC
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        {" "}
                        total{" "}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get 1750 USDC.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
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
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                    >
                      Deposite to this Pool
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
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
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      17500 USDC
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        {" "}
                        total{" "}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get 1750 USDC.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
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
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                    >
                      Deposite to this Pool
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
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
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      17500 USDC
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        {" "}
                        total{" "}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.500" }}
                    >
                      10 Winner will get 1750 USDC.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
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
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "brand.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "brand.600" },
                      }}
                    >
                      Deposite to this Pool
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
  );
};

