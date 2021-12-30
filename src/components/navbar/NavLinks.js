import Link from 'react-scroll/modules/components/Link';
import './NavLinks.css';
const NavLinks = () => {
    return ( 
        <ul className='linkContainer'>
            <li className='link'>
                <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                >projects</Link>
            </li>

            <li className='link'>
                <Link
                    to='resume'
                    spy={true}
                    smooth={true}
                >resume</Link>
            </li>

            <li className='link'>
                <Link
                    to='photos'
                    spy={true}
                    smooth={true}
                >photos</Link>
            </li>
        </ul>
     );
}
 
export default NavLinks;