import React, { useEffect, useState } from 'react';
import {
    Button
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


const ToggleWalletModalButton = ({ toggleWalletModal  }): any => {
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
        <div>
            <div className="inline-block margin-right-double vertical-align-middle">
                <p className="ellipsis no-margin">
                    {account &&
                        account.substr(0, 6) +
                            '...' +
                            account.substr(account.length - 4, account.length)}
                </p>
                <p className="no-margin">
                    {walletProvider && (
                        <span className="margin-right">{getWalletName(walletProvider)}</span>
                    )}
                    {chainId && <span>{NETWORK_CHAIN_ID[chainId]}</span>}
                </p>
                <p className="no-margin">{`You have ${userBalance.toFixed(2)} Aave Pool ${pluralize(
                    'ticket',
                    userBalance,
                )}`}</p>
            </div>
            <CloseCircleOutlined onClick={disconnectWallet} style={{ fontSize: '16px' }} />
            </div>
    ) : (
            <Button  
                h="50px"
                w="130px"
                bgColor="#161A42"
                color="white"
                colorScheme="brand"
                cursor="pointer"
                variant='outline'
                onClick={toggleWalletModal}>
                    Connect
            </Button>
    );
};

const Wallet = ({ toggleWalletModal }) => {
    return (<ToggleWalletModalButton key="1" toggleWalletModal={toggleWalletModal} />);
};

export default Wallet;
