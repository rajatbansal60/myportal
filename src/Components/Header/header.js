import React from "react";
import LogoSrc from "../../images/logo.png";
import styled from 'styled-components'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Header2} from './header_const.js';

export default function Header(){




/* ... */



// const header =styled{

// }




const Logo = styled.img`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`;
   
    return(
        <>
            <Header2>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand className="cuslogo" href="#home"><Logo src={LogoSrc} alt="Logo" className="img-fluid" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#link">
                                    <lord-icon
                                    src="https://cdn.lordicon.com/dxjqoygy.json"
                                    trigger="loop"
                                    colors="primary:#e8b730,secondary:#c79816">
                                    </lord-icon>
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Header2>
        </>
    )
}