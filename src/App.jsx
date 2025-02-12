import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Banner } from './components/Banner/Banner';
import { Home } from './pages/Home/Home';
import { AppKitProvider } from './utils/WagmiProvider';

export const App = () => {

  return (
    <AppKitProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </AppKitProvider>

  )
}
