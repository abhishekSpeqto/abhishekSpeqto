import React, { useState } from 'react'
import './Header.css'
import { Sidebar } from '../sidebar/Sidebar'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { useBalance } from 'wagmi'

export const Header = () => {
    const [isOpen, setIsopen] = useState(false)
    const { open, close } = useAppKit();
    const { address, isConnected, caipAddress, status, embeddedWalletInfo, allAccounts } = useAppKitAccount()

    const { data: balanceData, isLoading, error } = useBalance({ address })
    return (
        <div className='main-con'>
            <div className='header-con'>
                <Sidebar />
                <h1>CHAUFR</h1>
                {
                    !isConnected ?
                        <button onClick={() => open()} className='wallet-connect-btn'>Connect Wallet</button> :
                        <div className="wallet_btnGroup " onClick={() => open()}>
                            <button className="wallet_balance"> {balanceData?.formatted.slice(0, 5)} {balanceData?.symbol}</button>
                            <button className="walt_add"> {`${address.slice(0, 4)}...${address.slice(-4)}`}</button>
                        </div>
                }
            </div>
        </div>

    )
}
