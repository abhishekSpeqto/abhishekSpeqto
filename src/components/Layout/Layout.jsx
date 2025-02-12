import React from 'react'
import './Layout.css'
import { Header } from '../header/Header'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
    return (
        <div className="app-layout">
            <Header />
            <div className="page-content">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}
