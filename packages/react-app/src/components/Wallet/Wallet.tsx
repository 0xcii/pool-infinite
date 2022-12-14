import React, { useEffect, useState } from 'react';
import {
    Button, Flex, Box, Icon, Image
} from "@chakra-ui/react";
import { CloseCircleOutlined } from '@ant-design/icons';
import { useWeb3React } from '@web3-react/core';
import { utils } from 'ethers';
import { useSelector } from 'react-redux';
import pluralize from 'pluralize';
import { RootState } from 'app/rootReducer';
import { DEFAULT_TOKEN_DECIMAL_PRECISION, NETWORK_CHAIN_ID } from 'Constants';
import { getWalletName } from 'helpers/Network';
import { getUserTicketsBalance } from 'helpers/Pool';
import { Web3Provider } from '@ethersproject/providers';
import balanceBG from '../../images/balance.png';
import profileImage from '../../images/profileLogo.png';
import connectBG from '../../images/connectButton.png';
import networkBG from '../../images/network.png';
import acBG from '../../images/ac.png';

const ToggleWalletModalButton = ({ toggleWalletModal  }): any => {

    const NetworkButton = ()=> (
        <Box
          bgImage= {balanceBG}
          mt={4}
          background-repeat= "repeat"
          display={{
            base: "none",
            md: "flex",
          }}
          alignItems="center"
          // bg="brand"
          // borderWidth="1px"
          // borderColor="gray.200"
          px="1em"
          h="30px"
          minH="50px"
          rounded="md"
          fontSize="sm"
          color="white"
          outline="10"
          transition="all 0.3s"
          // _hover={{
          //   bg: "brand",
          //   borderColor: "gray.300",
          // }}
          // _active={{
          //   borderColor: "gray.200",
          // }}
          // _focus={{
          //   boxShadow: "outline",
          // }}
          
        >
          <Box  as="strong" lineHeight="inherit" fontWeight="semibold">
            {chainId && <span>{NETWORK_CHAIN_ID[chainId]}</span>}
          </Box>
        </Box>
      );
    const AddressButton = ()=> (
        <Box
          margin={2}
          display={{
            base: "none",
            md: "flex",
          }}
          alignItems="center"
          aria-label="Sponsor Choc UI on Open Collective"
          bg="brand"
        
          // borderWidth="1px"
          // borderColor="gray.200"
          px="1em"
          minH="36px"
          rounded="md"
          fontSize="sm"
          color="white"
          outline="0"
          transition="all 0.3s"
          _hover={{
            bg: "brand",
            borderColor: "gray.300",
          }}
          _active={{
            borderColor: "gray.200",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          
        >
          <Image
            borderRadius='full'
            boxSize='55px'
            margin={2}
            src={profileImage}
          />
          <Box as="strong" lineHeight="inherit" fontWeight="semibold">
          {account &&
                        account.substr(0, 6) +
                            '...' +
                            account.substr(account.length - 4, account.length)}
          </Box>
        </Box>
      );
    const BalanceButton = ()=> (
        <Box
          margin={2}
          display={{
            base: "none",
            md: "flex",
          }}
          alignItems="center"
          aria-label="Sponsor Choc UI on Open Collective"
          bg="brand"
          borderWidth="1px"
          borderColor="gray.200"
          px="1em"
          minH="36px"
          rounded="md"
          fontSize="sm"
          color="white"
          outline="0"
          transition="all 0.3s"
          _hover={{
            bg: "brand",
            borderColor: "gray.300",
          }}
          _active={{
            borderColor: "gray.200",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          
        >
          <Box as="strong" lineHeight="inherit" fontWeight="semibold">
          <p className="no-margin">{`${userBalance.toFixed(2)} Lottery ${pluralize(
                    'Ticket',
                    userBalance,
                )}`}</p>
          </Box>
        </Box>
      );

    const {
        account,
        active: walletConnected,
        chainId,
        connector: walletProvider,
        deactivate: disconnectWallet,
        library,
    } = useWeb3React<Web3Provider>();
    
    const { completed: transactionCompleted } = useSelector(
        (state: RootState) => state.transaction,
    );

    const [userBalance, setUserBalance] = useState(0);

    useEffect(() => {
        if (walletConnected) {
            const calculateBalance = async () => {
                const userBalance = await getUserTicketsBalance(
                    account as string,
                    chainId as number,
                    library,
                );

                const formattedUserBalance = Number(
                    utils.formatUnits(userBalance.toString(), DEFAULT_TOKEN_DECIMAL_PRECISION),
                );

                setUserBalance(formattedUserBalance);
            };

            calculateBalance();
        }
    }, [account, chainId, library, transactionCompleted, walletConnected]);

    return walletConnected ? (
        <Flex>
            
                
            <AddressButton />
            <NetworkButton />
            {/* <BalanceButton /> */}

            {/* <CloseCircleOutlined onClick={disconnectWallet} style={{ fontSize: '16px' }} /> */}
            </Flex>
    ) : (
      <Flex>
        <Box  
            h = "60px"
            w = "141px"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            bgImage= {connectBG}
            textAlign= "center"
            lineHeight="60px"
            fontSize="18dp"
            fontWeight="bold"
            color="white"
            onClick={toggleWalletModal}
            >
              Connect
          </Box>
          <Box  
            h = "42px"
            w = "85px"
            marginTop = "12px"
            marginLeft = "10px"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            bgImage= {networkBG}
            textAlign= "center"
            lineHeight="42px"
            fontSize="18dp"
            fontWeight="bold"
            color="rgba(42, 130, 228, 1)"
            // onClick={toggleWalletModal}
            >
              Polygon
          </Box>
          <Image h="24px" marginTop = "18px" src={acBG} alt='acBG' />
      </Flex>

            
    );
};

const Wallet = ({ toggleWalletModal }) => {
    return (<ToggleWalletModalButton key="1" toggleWalletModal={toggleWalletModal} />);
};

export default Wallet;
