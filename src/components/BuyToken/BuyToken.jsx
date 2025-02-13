import React, { useEffect, useState } from 'react'
import './BuyToken.css'
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import PRESALE_ABI from "../../utils/abi/presaleChaufrAbi.json";
import { formatEther, parseEther } from 'viem';
import { useAppKitAccount } from '@reown/appkit/react';

const BuyToken = () => {
    const { data: buyTokenHash, isSuccess: buyTokenSuccess, isError: buyTokenError, writeContract: buyTokenWrite, error: errorMesssageRelease } = useWriteContract();
    const { isConnected } = useAppKitAccount()
    const [chufrTokenAmount, setChufrTokenAmount] = useState(0);
    const [bnbAmount, setBnbAmount] = useState(0);

    const handleBuyToken = () => {
        try {
            buyTokenWrite({
                address: import.meta.env.VITE_PRESALE_CHAUFR_ADDRESS,
                abi: PRESALE_ABI,
                functionName: "buyTokenBNB",
                value: [parseEther(bnbAmount)]
            });
        } catch (error) {
            console.error(error)
        }
    }

    // wagmi hooks for waiting till the transaction successful and get the stake data
    const {
        data: buyTokenWaitData,
        isLoading: buyTokenWaitLoading,
        isSuccess: buyTokenWaitSuccess,
        isError: buyTokenWaitError,
        error: errorMesssage
    } = useWaitForTransactionReceipt({
        hash: buyTokenHash,
    });

    const { data: bnbPricePerToken, isSuccess: bnbPriceFetchSuccess, refetch } = useReadContract({
        address: import.meta.env.VITE_PRESALE_CHAUFR_ADDRESS,
        abi: PRESALE_ABI,
        functionName: 'getBnbPricePerToken'
    });

    useEffect(() => {
        if (bnbPriceFetchSuccess) {
            console.log(bnbPricePerToken)
            setChufrTokenAmount(Number(formatEther(bnbPricePerToken)).toFixed(6))
        }
    }, [bnbPriceFetchSuccess]);

    return (
        <section className='buy-token-cont'>
            <h1 className='take-heading'>BUY CHUFR TOKEN</h1>

            <div className='bt-sub-cont bg-gradient'>
                <div className='btsc-left'>
                    <div>CHUFR</div>

                    <div>You will get: {Number((bnbAmount / chufrTokenAmount) || 0).toFixed(2)} CHUFR</div>
                </div>

                <div className='btsc-right'>
                    <input type="number" name="amount" id="amount" className='bg-gradient bt-input' onWheel={(e) => e.target.blur()} min={0} placeholder='Enter Amount' value={bnbAmount} onChange={(e) => setBnbAmount(e.target.value)} disabled={!isConnected} />

                    <button type="button" className='bt-btn' onClick={() => handleBuyToken()} disabled={!isConnected}>Buy Token</button>
                </div>
            </div>
        </section>
    )
}

export default BuyToken;