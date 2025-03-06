import React, { useEffect, useState } from 'react'
import './Header.css'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id='navbar' className={isScrolled ? 'navbar-scroll' : ''}>
            <nav className='nav-container'>
                <ul className='nav-ul'>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">FEATURES</a></li>
                    <li><a href="/">ROADMAP</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">INSIGHTS</a></li>
                </ul>
            </nav>
        </header>
    )
}
