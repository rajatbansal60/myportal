import LogoSrc from "../../images/logo.png";
import styled from "styled-components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
import { LoginFrom } from "../LoginForm/LoginForm";
// import '../react-toastify/dist/ReactToastify.css';
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

export default function Header() {
  const Header = styled.header`
    .cuslogo img {
      height: 40px;
    }
    .navbar-light .navbar-nav .nav-link:not(:last-child) {
      margin-right: 1.5em;
    }
    .navbar-light .navbar-nav .nav-link {
      color: #fff;
    }
    .navbar-light .navbar-nav .nav-link.cusbtn {
      color: #fff;
      border: 1px solid #715f2c;
      padding: 4px 15px 4px 10px;
      border-radius: 7px;
      text-transform: uppercase;
    }
  `;

  // const LoginModal = () => toast.success("Click Successfully!");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Header>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand className="cuslogo" href="/">
              <img src={LogoSrc} alt="Logo" className="img-fluid" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
                <NavLink
                  className="nav-link cusbtn"
                  to="#"
                  onClick={handleShow}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/dxjqoygy.json"
                    trigger="loop"
                    colors="primary:#e8b730,secondary:#c79816"
                  ></lord-icon>
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>

      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onhide={handleClose}
        className="cusModal"
      >
        <Modal.Body>
          <Button className="closebtn" onClick={handleClose}>
            <i className="fa fa-times"></i>
          </Button>
          <LoginFrom />
        </Modal.Body>
      </Modal>

      {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </>
  );
}
