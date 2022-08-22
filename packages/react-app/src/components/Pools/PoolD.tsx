import React from "react";
import {
    chakra,
    Box,
    Flex,
    GridItem,
    Input,
    Button
} from "@chakra-ui/react";

export default function PoolD(){

return (
    <Box ml={{ base: 0, md: 60 }} mr={{ base: 0, md: 80 }}>
        <Box w={{ base: "full",  xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto">
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box bg="white" _dark={{ bg: "#30366E" }} shadow="lg" rounded="lg">
                <Box px={4} py={2}>
                    <chakra.p
                        mt={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                        color: "gray.400",
                        }}
                    >
                        High-RISK Pool D
                    </chakra.p>
                </Box>
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="gray.900"
          _dark={{ color: "gray.100" }}
          lineHeight="shorter"
        >
         170 USDC
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          Each winner get 0.175 USDC
        </chakra.p>
        <GridItem as="label"  colSpan={{ base: "auto", lg: 4 }}>
            <Input 
                w={{ base: "full", md: 5 / 12 }}
                mr={3}
                size="lg"
                type="amount"
                placeholder="USDC: 0.0"
                required
            />
            <Button
            as={GridItem}
            w={{ base: "full", md: 3 / 12 }}
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
            cursor="pointer"
          >
            Stake
          </Button>
          </GridItem>
          <chakra.p
          m={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="white"
          lineHeight="base"
         >
          You will get all your staked asset back if you are not the winner. There is no potential risk in this pool.
        </chakra.p>

  </Box> 
</Flex>
      </Box>
    </Box>
  );
};

