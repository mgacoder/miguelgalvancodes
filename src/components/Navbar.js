import React from 'react'
import Link from 'react-scroll/modules/components/Link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        activeClass='active' 
                        to='home'
                        spy={true}
                        smooth={true}
                    >
                        home
                    </Link>
                </li>

                <li>
                    <Link 
                        to='resume'
                        spy={true}
                        smooth={true}
                    >
                        resume
                    </Link>
                </li>

                <li>
                    <Link 
                        to='projects'
                        spy={true}
                        smooth={true}
                    >
                        projects
                    </Link>
                </li>

                <li>
                    <Link 
                        to='photos'
                        spy={true}
                        smooth={true}
                    >
                        photos
                    </Link>
                </li>

                <li>
                    <Link 
                        to='contact'
                        spy={true}
                        smooth={true}
                    >
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
