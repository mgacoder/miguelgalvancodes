import React from 'react';
import { DesktopNav, MobileNav } from './';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <DesktopNav/>
            <MobileNav/>
        </nav>
        
    )
}

export default Navbar;
