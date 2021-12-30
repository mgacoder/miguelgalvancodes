import React, { useState } from 'react';
import { CgMenu, CgCloseO } from 'react-icons/cg';
import { NavLinks } from './'
const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <CgMenu className='mobile-nav'
                            onClick={() => setOpen(!open)}
                            size={50}/>;
    const closeIcon = <CgCloseO className='mobile-nav'
                        onClick={() => setOpen(!open)}
                        size={50}/>;
    const closeMobileNav = () => setOpen(false);
    return ( 
       <nav className='mobile-navbar'>
           {open ? closeIcon : hamburgerIcon}
           {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav} />} 
       </nav>
     );
}
 
export default MobileNav;