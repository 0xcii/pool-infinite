import React, { useEffect, useState } from 'react';
import {
    chakra,
    Box,
    Flex,
    Button,
} from "@chakra-ui/react";

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { getAavePoolPrize, getPrizePeriodRemainingSeconds } from 'helpers/Pool';
import { useInterval } from 'hooks/useInterval';
import cardBG from '../../images/card_bg.gif';
import poolBG from '../../images/poolBG.png';
import poolBG2 from '../../images/poolBG2.png';
import inputNB from '../../images/inputNB.png';
import stake from '../../images/stake.png';

momentDurationFormatSetup(moment);


export default function PoolA({
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
    <Box ml="-200px" mt="150px">
        <Box   textAlign={"left" } mx="auto" >
        <Flex  w="full" alignItems="center" justifyContent="center">
            <Box backgroundSize="contain" 
                backgroundRepeat="no-repeat"
                h="280px"
                w="35%"
                backgroundBlendMode="multiply"
                background={"rgba(0, 0, 0)"}
                border= "1px solid rgba(112, 112, 112, 1)"
                // bgImage= {poolBG2}
                backdropFilter= {"blur(3px)"}
                borderRadius = "12px" >
            <Box  h="100%" bgImage= {poolBG} borderRadius = "12px">

              <Flex>
              <Box>
              <Box  px={4} py={2}>
                <chakra.p
                    mt={1}
                    ml="10px"
                    fontSize="sm"
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    color="rgba(255, 255, 255, 1)"
                >
                    Non-RISK Pool A 
                </chakra.p>
            </Box>
            <chakra.h1
              mb={3}
              ml="25px"
              fontWeight={{ base: "bold", md: "extrabold" }}
              color="rgba(255, 255, 255, 1)"
              lineHeight="shorter"
            >
            Total Volume:  175 USDC
            </chakra.h1>
            <chakra.p
              ml="25px"
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255, 195, 0, 1)"
              lineHeight="base"
            >
              Reward:  17.53 USDC
            </chakra.p>
            <chakra.p
              ml="25px"
              mb="12px"
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255, 255, 255, 1)"
              lineHeight="base"
            >
              Each Winner will get
                <chakra.p color="rgba(0, 186, 173, 1)">
                    0.175 USDC
                </chakra.p>
            </chakra.p>

              </Box>
          <Box>

              
          <Box
                // display="inline-flex"
                // alignItems="center"
                // justifyContent="center"
                // fontWeight="semibold"
                // rounded="md"
                // _hover={{
                //   bg: "gray.700",
                //   _dark: { bg: "brand.600" },
                // }}
                // bgImage={stake}
                // borderRadius = "10px"
                >
                <Button
                  // backgroundSize="contain" 
                  // backgroundRepeat="no-repeat"
                  // bgImage={stake}
                  bgColor={"rgb(13,16,44)"}
                  margin={10}
                  mt="80px"
                  variant="solid"
                  size="lg"
                  type="submit"
                  w="270px"
                  border= "1px solid #06B6D4"
                  // cursor="pointer"
                  onClick={walletConnected?handleJoinAavePool:toggleWalletModal}
                  >Stack
                  </Button>
            </Box>
          </Box>
          </Flex>
          <chakra.p
          fontSize={{ base: "lg", md: "xl" }}
          color="white"
          ml="10px"
          mt="25px"
          lineHeight="base">
          You will get all your staked asset back if you are not the winner. There is no potential risk in this pool.
        </chakra.p>
        </Box>
  </Box> 
</Flex>
      </Box>
    </Box>
  );
};

