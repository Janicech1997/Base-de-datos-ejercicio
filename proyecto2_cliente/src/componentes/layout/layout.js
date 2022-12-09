import { Outlet,NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const layout=()=>{
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> img </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink href="#features">Inicio</NavLink>
                        <NavLink href="#pricing">Quienes somos</NavLink>
                        <NavLink href="#pricing">Portafolios</NavLink>
                        <NavLink href="#pricing">Contáctanos</NavLink>
                        <NavLink href="#pricing">Iniciar sesión</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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