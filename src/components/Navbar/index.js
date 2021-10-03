import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../assets/pizza-logo.png';
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from './Navbar'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo src={logo} to='/'>
                        {/* <img src={logo} alt=''/> */}
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/menu'>Menu</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/location'>Location</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/cart'>Cart</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar