import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Carte grise</NavLogo>
                    <MobileIcon>
                        <FaBars size={24} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Règlementation</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Avantages</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Simulation</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Authentification</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signin">Inscription</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
