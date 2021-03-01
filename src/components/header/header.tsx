import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import './Header.css';



function Header() {
   return (
      <>
         <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home">REACT</Navbar.Brand>
               <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
               <NavbarCollapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricing</Nav.Link>
                     <Nav.Link href="#AboutUs">About Us</Nav.Link>
                     <Nav.Link href="#contacts">Contacts</Nav.Link>
                  </Nav>

                  <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-info">Search</Button>
                  </Form>
               </NavbarCollapse>
            </Container>
         </Navbar>
         <br />
      </>
   );
}
export default Header;