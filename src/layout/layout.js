import React from 'react';
import { Navbar, Nav, Row } from 'react-bootstrap';
import { GitHub, LinkedIn, SportsEsports, WhatsApp } from '@material-ui/icons';
import { ItemFooter } from '../components/itensFooter';

const Layout = ({ children }) => (
  <div>
    <Navbar bg="dark" expand="lg" variant="dark" className="nav-bar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="/posts">
            Blog
          </Nav.Link>
          <Nav.Link
            className="text-light"
            href="https://github.com/welitonsousa"
            target="blank"
          >
            GitHub
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {children}

    <footer className="bg-dark footer text-light">
      <Row className="justify-content-around text-center">
        <ItemFooter
          Icon={GitHub}
          link="https://github.com/welitonsousa"
          title="GitHub"
        />
        <ItemFooter
          Icon={LinkedIn}
          link="https://www.linkedin.com/in/weliton-sousa-330a29190/"
          title="Linkedin"
        />
        <ItemFooter
          Icon={WhatsApp}
          link="https://wa.me/5589988187280"
          title="Whatsapp"
        />
        <ItemFooter
          Icon={SportsEsports}
          link="https://steamcommunity.com/id/welitonuzumaki"
          title="Steam"
        />
      </Row>

      <div className="text-center mt-5">
        <a className="text-light" href="mailto:welitonubuntu@gmail.com">
          welitonubuntu@gmail.com
        </a>

        <p>
          copyright 2021 &copy; Weliton de Sousa Araujo - Todos os Direitos
          Reservados.
        </p>
      </div>
    </footer>
  </div>
);

export { Layout };
