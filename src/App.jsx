import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home/Home';
import { WalletKitProvider } from './utils/wallet/WalletProvider';

export const App = () => {
  return (
    <WalletKitProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </WalletKitProvider>
  )
}
