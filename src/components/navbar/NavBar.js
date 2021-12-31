import './NavBar.css';
import NavLinks from './NavLinks';
import Link from 'react-scroll/modules/components/Link'

const NavBar = () => {
    return ( 
        <div className='navContainer'>
        
        <div className='leftContainer'><Link
                                        to='home'
                                        spy={true}
                                        smooth={true}
                                        >
                                        <h1 className='logo'>Miguel Galvan</h1>
                                        </Link></div>
        <div className='rightContainer'><NavLinks/></div>
        </div>
     );
}
 
export default NavBar;