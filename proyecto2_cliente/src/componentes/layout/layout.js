import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


const layout=()=>{
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet"/>
                <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"/>
            </head>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> img </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/Inicio">Inicio</Nav.Link>
                        <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="/servicios">Servicios</Nav.Link>
                        <Nav.Link href="/Proyectos">Proyectos</Nav.Link>
                        <Nav.Link href="/iniciarsesion">Iniciar sesión</Nav.Link>
                        <Nav.Link href="/Usuario">Usuarios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <body>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </body>
            <main>
            	<Outlet />
          	</main>
            <CDBFooter className="shadow">
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <CDBBox display="flex" className="mt-4">
                        <CDBBtn flat color="dark">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Compañía
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                        <CDBFooterLink href="/">Acerca de</CDBFooterLink>
                        <CDBFooterLink href="/">Historia</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Comunidades
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                        <CDBFooterLink href="/">Servicio diseño</CDBFooterLink>
                        <CDBFooterLink href="/">Desarrolladores</CDBFooterLink>
                        <CDBFooterLink href="/">Publicidad</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Enlaces utiles
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                        <CDBFooterLink href="/">Ayuda</CDBFooterLink>
                        <CDBFooterLink href="/">Contactos</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    </CDBBox>
                    <small className="text-center mt-5">&copy; Diseño Janice, 2020. All rights reserved.</small>
                </CDBBox>
            </CDBFooter>
        </>
    );
};
export default layout;