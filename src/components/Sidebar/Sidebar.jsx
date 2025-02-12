import React, { useState } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false)
    const menuItems = [
        {
            label: 'Home',
        },
        {
            label: 'Chaufr Coin',
        },
        {
            label: 'About',
        },
    ]

    return (
        <div className={`sidebar-container `}>
            <i className="bi bi-list" id='sidebar-button' onClick={() => setIsopen(!isOpen)}></i>
            <ul className={`sidebar-menu ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="sidebar-item"
                    >
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            <div className="quries">
                                {item.label.split(' ').map((line, lineIndex) => (
                                    <span key={lineIndex}>{line}</span>
                                ))}
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
