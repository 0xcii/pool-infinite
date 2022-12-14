import React, { useEffect, useState } from 'react';
import {
    chakra,
    Box,
    Flex,
    GridItem,
    Button
} from "@chakra-ui/react";

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { getAavePoolPrize, getPrizePeriodRemainingSeconds } from 'helpers/Pool';
import { useInterval } from 'hooks/useInterval';
import cardBG from '../../images/card_bg.gif';

momentDurationFormatSetup(moment);


export default function PoolC({
  toggleJoinModal,
  toggleWithdrawModal,
  toggleWalletModal,
  walletModalIsOpen,
}){
  const { account, active: walletConnected, chainId, library } = useWeb3React<Web3Provider>();

  const [currentPrize, setCurrentPrize] = useState('');
  const [mountedAt, setMountedAt] = useState(0);
  const [secondsToPrizeAtMount, setSecondsToPrizeAtMount] = useState(0);
  const [secondsRemainingNow, setSecondsRemainingNow] = useState('');

  const setPrizePeriodRemainingSecondsAtMount = async () => {
      const prizePeriodRemainingSeconds = await getPrizePeriodRemainingSeconds(chainId as number);
      const formattedPrizePeriodRemainingSeconds = parseInt(
          prizePeriodRemainingSeconds.toString(),
          10,
      );

      setSecondsToPrizeAtMount(formattedPrizePeriodRemainingSeconds);
      setMountedAt(parseInt((Date.now() / 1000).toString(), 10));
  };
  const getAsyncValues = async () => {
      const { prizeInDai } = await getAavePoolPrize(
          account as string,
          chainId as number,
          library,
      );

      setCurrentPrize(Number(prizeInDai).toFixed());
  };
  useEffect(() => {
    if (walletConnected) {
        getAsyncValues();
        setPrizePeriodRemainingSecondsAtMount();

        if (walletModalIsOpen) {
            toggleWalletModal();
        }
    }
}, [walletConnected]); // eslint-disable-line react-hooks/exhaustive-deps

useEffect(() => {
  toggleWalletModal()
}, [walletConnected]); // eslint-disable-line react-hooks/exhaustive-deps


useInterval(() => {
    const diffInSeconds = parseInt((Date.now() / 1000).toString(), 10) - mountedAt;
    const remaining = secondsToPrizeAtMount - diffInSeconds;

    setSecondsRemainingNow(
        remaining <= 0
            ? '0'
            : moment.duration(remaining, 'seconds').format('d [days] [and] h:m:s [hours]'),
    );
}, 1000);

const handleJoinAavePool = () => {
    toggleJoinModal();
};

const handleWithdrawFromAavePool = () => {
    toggleWithdrawModal();
};

return (
    <Box  ml={{ base: 0, md: 60 }} mr={{ base: 0, md: 80 }}>
        <Box  w={{ base: "full",  xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto">
        <Flex  p={50} w="full" alignItems="center" justifyContent="center">
            <Box bgImage= {cardBG}
                opacity= {0.90}  shadow="lg" rounded="lg">
                <Box  px={4} py={2}>
                    <chakra.p
                        mt={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                        color: "gray.400",
                        }}
                    >
                        Mid-RISK Pool C
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
        2000 USDC
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          Each winner get 200 USDC
        </chakra.p>
        <GridItem as="label"  colSpan={{ base: "auto", lg: 4 }}>
            <Button
            margin={2}
            as={GridItem}
            w={{ base: "full", md: 4 / 12 }}
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
            cursor="pointer"
            onClick={walletConnected?handleJoinAavePool:toggleWalletModal}
          >
            Stake
          </Button>
          {/* <Button
            as={GridItem}
            margin={2}
            w={{ base: "full", md: 4 / 12 }}
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
            cursor="pointer"
            onClick={walletConnected?handleWithdrawFromAavePool:toggleWalletModal}
          >
            Withdraw
          </Button> */}
          </GridItem>
          <chakra.p
          m={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="white"
          lineHeight="base">
          You will get part of your staked asset back if you are not the winner. There is mid potential risk in this pool.
        </chakra.p>

  </Box> 
</Flex>
      </Box>
    </Box>
  );
};

