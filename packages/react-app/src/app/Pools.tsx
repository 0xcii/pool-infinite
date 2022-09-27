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
import cardBG from '../images/poola_bg.png';
import cardBG2 from '../images/poolb_bg.png';
import cardBG3 from '../images/pool_bg.png';
import Footer from "../components/Footer";


export default function Pools(){

  return (
    <Box mt="-30px" ml={{md: 20 }} mr={{ md: 80 }}>
    <Box  as="main" p="12">
      <Box>
        <Text mb="20px" fontSize="18px" fontWeight={["bold", "extrabold"]}> All Pools</Text>
 
    <Flex
      boxSize="full"
      // alignItems="center"
      // justifyContent="center"
    >
      <Box
        mx="auto"
        // textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
      >
        <Box>
          <Box>
            <SimpleGrid
              columns={[1, , 2]}
              gap="15px"
              // rounded="md"
              // textAlign="center"
            >
              <Box
                h="200px"
                w="440px"
                shadow="lg"
                rounded="md"
                bgImage= {cardBG}
                border= "1px solid #06B6D4"
                borderRadius = "10px"
              >
                <Box h="100%" borderRadius = "10px" backgroundColor="rgba(50, 0, 0, .3)"  pt={3} backdropFilter= {"blur(5px)"}>
                <Flex direction="column">
                  <Box px={4} >
                    <Text>
                      <chakra.p mr={6} display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Non-RISK Pool A 
                      </chakra.p>
                      <chakra.p display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Total Volume:17500USDC
                        </chakra.p>
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      color="rgb(255, 195, 0)"
                      lineHeight="tight"
                      textAlign="right"
                    >
                      Reward: 1750 USDC
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      lineHeight="tight"
                      textAlign="left"
                    >
                      <chakra.p
                      display="inline-block" 
                      mb={6}
                      fontSize="18px"
                    >
                      10 Winner will get
                    </chakra.p>
                    <chakra.p display="inline-block"  ml={20} fontSize="18px" fontWeight={["bold", "extrabold"]} color="#00BAAD">
                      1750 USDC</chakra.p>
                    </Text>
                    
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
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
                      borderRadius = "10px"
                    >
                      <Image display="inline"  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              </Box>
              
              <Box
                h="200px"
                w="440px"
                shadow="lg"
                rounded="md"
                bgImage= {cardBG}
                border= "1px solid #06B6D4"
                borderRadius = "10px"
              >
                <Box h="100%"  borderRadius = "10px" backgroundColor="rgba(50, 0, 0, .3)"  pt={3} backdropFilter= {"blur(5px)"}>
                <Flex direction="column">
                  <Box px={4} >
                    <Text>
                      <chakra.p mr={6} display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Non-RISK Pool A 
                      </chakra.p>
                      <chakra.p display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Total Volume:17500USDC
                        </chakra.p>
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      color="rgb(255, 195, 0)"
                      lineHeight="tight"
                      textAlign="right"
                    >
                      Reward: 1750 USDC
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      lineHeight="tight"
                      textAlign="left"
                    >
                      <chakra.p
                      display="inline-block" 
                      mb={6}
                      fontSize="18px"
                    >
                      10 Winner will get
                    </chakra.p>
                    <chakra.p display="inline-block"  ml={20} fontSize="18px" fontWeight={["bold", "extrabold"]} color="#00BAAD">
                      1750 USDC</chakra.p>
                    </Text>
                    
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
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
              </Box>

              <Box
                h="200px"
                w="440px"
                shadow="lg"
                rounded="md"
                backgroundColor="black"
                border= "1px solid #06B6D4"
                borderRadius = "10px"
                
              >
                <Box borderRadius = "10px" h="100%" backgroundColor="rgba(50, 0, 0, .3)"  pt={3} backdropFilter= {"blur(5px)"}>
                <Flex direction="column">
                  <Box px={4} >
                    <Text>
                      <chakra.p mr={6} display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Non-RISK Pool A 
                      </chakra.p>
                      <chakra.p display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Total Volume:17500USDC
                        </chakra.p>
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      color="rgb(255, 195, 0)"
                      lineHeight="tight"
                      textAlign="right"
                    >
                      Reward: 1750 USDC
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      lineHeight="tight"
                      textAlign="left"
                    >
                      <chakra.p
                      display="inline-block" 
                      mb={6}
                      fontSize="18px"
                    >
                      10 Winner will get
                    </chakra.p>
                    <chakra.p display="inline-block"  ml={20} fontSize="18px" fontWeight={["bold", "extrabold"]} color="#00BAAD">
                      1750 USDC</chakra.p>
                    </Text>
                    
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
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
              </Box>

              <Box
                h="200px"
                w="440px"
                shadow="lg"
                rounded="md"
                backgroundColor="black"
                border= "1px solid #06B6D4"
                borderRadius = "10px"
              >
                <Box h="100%"  borderRadius = "10px" backgroundColor="rgba(0, 0, 0, .3)"  pt={3} backdropFilter= {"blur(5px)"}>
                <Flex direction="column">
                  <Box px={4} >
                    <Text>
                      <chakra.p mr={6} display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Non-RISK Pool A 
                      </chakra.p>
                      <chakra.p display="inline-block" fontSize="18px" fontWeight={["bold", "extrabold"]}>
                        Total Volume:17500USDC
                        </chakra.p>
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      color="rgb(255, 195, 0)"
                      lineHeight="tight"
                      textAlign="right"
                    >
                      Reward: 1750 USDC
                    </Text>
                    <Text
                      mb={2}
                      fontSize="18px"
                      fontWeight={["bold", "extrabold"]}
                      lineHeight="tight"
                      textAlign="left"
                    >
                      <chakra.p
                      display="inline-block" 
                      mb={6}
                      fontSize="18px"
                    >
                      10 Winner will get
                    </chakra.p>
                    <chakra.p display="inline-block"  ml={20} fontSize="18px" fontWeight={["bold", "extrabold"]} color="#00BAAD">
                      1750 USDC</chakra.p>
                    </Text>
                    
                  </Box>
                  <Flex
                    // px={11}
                    borderRadius="xl"
                    w="90%"
                    margin="0 auto"
                    direction="column"
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
                      borderRadius = "10px"
                      href="/allpools/a"
                    >
                      <Image   display="inline"  src={deposit} alt='deposit' />
                    </Link>
                  </Flex>
                </Flex>
              </Box>
              </Box>

            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Flex>
    
    
    </Box>
    <Footer />
    </Box>
   
    </Box>
  );
};



