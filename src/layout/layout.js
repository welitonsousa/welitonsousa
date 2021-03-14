import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {GitHub, LinkedIn, SportsEsports, WhatsApp } from '@material-ui/icons';
import { ItemFooter } from "../components/itensFooter";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="nav-bar">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/posts">Blog</Nav.Link>
						<Nav.Link href="https://github.com/welitonsousa" target="blank">GitHub</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

      {children}

      <footer className="bg-dark footer text-light">
        <div className="my-row text-center">
          <ItemFooter Icon={GitHub} link="https://github.com/welitonsousa" title="GitHub"/>
          <ItemFooter Icon={LinkedIn} link="https://www.linkedin.com/in/weliton-sousa-330a29190/" title="Linkedin"/>
          <ItemFooter Icon={WhatsApp} link="https://wa.me/5589988187280" title="Whatsapp"/>
          <ItemFooter Icon={SportsEsports} link="https://steamcommunity.com/id/welitonuzumaki" title="Steam"/>    
        </div>

        <div className="text-center mt-3">
          <a className="text-light" href="mailto:welitonubuntu@gmail.com"><h5>Email: welitonubuntu@gmail.com</h5></a>
          <h5>Cidade: Picos - PI</h5>
        </div>
      </footer>
    </div>
  );
}

export {Layout}