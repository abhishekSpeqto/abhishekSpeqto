import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import {bsc, bscTestnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient()

const projectId = 'a956360da756cd81d70cabc55dfa3c14'

const metadata = {
    name: "CHAUFR",
    description: 'Chaufr wallet connect',
    url: 'http://localhost:5173',
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const networks = [bsc, bscTestnet];

const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: true
})

createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    features: {
        analytics: true
    }
})

export function WalletKitProvider({ children }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}