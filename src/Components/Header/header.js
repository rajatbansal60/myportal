import React from "react";
import LogoSrc from "../../images/logo.png";
import styled from 'styled-components'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
// import '../react-toastify/dist/ReactToastify.css';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

export default function Header(){


    const Header = styled.header`
        .cuslogo img{
            height: 40px;
        }
        .navbar-light .navbar-nav .nav-link:not(:last-child){
            margin-right: 1.5em;
        }
        .navbar-light .navbar-nav .nav-link{
            color: #fff;
        }
        .navbar-light .navbar-nav .nav-link.cusbtn{
            color: #fff;
            border: 1px solid #715f2c;
            padding: 4px 15px 4px 10px;
            border-radius: 7px;
            text-transform: uppercase;
        }
        
    `;
    const LoginModal = () => toast.success("Click Successfully!");
    return(
        <>
            <Header>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className="cuslogo" href="/"><img src={LogoSrc} alt="Logo" className="img-fluid" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="#" className="cusbtn" onClick={LoginModal}>
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
            </Header>

            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}