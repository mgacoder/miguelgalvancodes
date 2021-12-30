import React, { useState } from 'react';
import { CgMenu, CgCloseO } from 'react-icons/cg';
import { NavLinks } from './'
const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <CgMenu className='mobile-nav'
                            onClick={() => setOpen(!open)}/>;
    const closeIcon = <CgCloseO className='mobile-nav'
                        onClick={() => setOpen(!open)}/>;
    const closeMobileNav = () => setOpen(false);
    return ( 
       <nav className='mobile-navbar'>
           {open ? closeIcon : hamburgerIcon}
           {open && <NavLinks />} 
       </nav>
     );
}
 
export default MobileNav;