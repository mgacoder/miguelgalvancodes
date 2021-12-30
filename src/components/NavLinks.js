import Link from 'react-scroll/modules/components/Link';

const NavLinks = (props) => {
    return ( 
        <ul>
                <li >
                    <Link
                        activeClass='active' 
                        to='home'
                        spy={true}
                        smooth={true}
                        onClick={() => props.isMobile && props.closeMobileNav()}
                    >
                        home
                    </Link>
                </li>

                <li>
                    <Link 
                        to='resume'
                        spy={true}
                        smooth={true}
                        onClick={() => props.isMobile && props.closeMobileNav()}
                    >
                        resume
                    </Link>
                </li>

                <li>
                    <Link 
                        to='projects'
                        spy={true}
                        smooth={true}
                        onClick={() => props.isMobile && props.closeMobileNav()}
                    >
                        projects
                    </Link>
                </li>

                <li>
                    <Link 
                        to='photos'
                        spy={true}
                        smooth={true}
                        onClick={() => props.isMobile && props.closeMobileNav()}
                    >
                        photos
                    </Link>
                </li>

                <li>
                    <Link 
                        to='contact'
                        spy={true}
                        smooth={true}
                        onClick={() => props.isMobile && props.closeMobileNav()}
                    >
                        contact
                    </Link>
                </li>
            </ul>
     );
}
 
export default NavLinks;