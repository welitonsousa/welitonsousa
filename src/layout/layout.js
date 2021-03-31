/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import {
  Navbar,
  Nav,
  Row,
  Container,
  Form,
  FormControl,
  Image,
  Col,
} from 'react-bootstrap';
import {
  GitHub,
  LinkedIn,
  SportsEsports,
  WhatsApp,
  Close,
  Search,
} from '@material-ui/icons';
import { Api } from '../services/connection';
import { ItemFooter } from '../components/itensFooter';
import { ErrorContext } from '../context/errorContext';

const Layout = ({ children }) => {
  const context = useContext(ErrorContext);
  const [results, setResults] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const searchResults = async (search) => {
    try {
      const res = await Api.get('/activities/posts', {
        params: {
          search,
        },
      });
      setResults(res.data.data);
    } catch (e) {
      context.setError(true);
    }
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="nav-bar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="">
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

          <Form
            inline
            className="ml-lg-5 w-100"
            onSubmit={(key) => {
              key.preventDefault();
              searchResults(searchKey);
            }}
          >
            <FormControl
              type="text"
              value={searchKey}
              placeholder="Pesquisar"
              className="icons"
              onChange={(key) => {
                if (key.target.value === '') {
                  setResults([]);
                }
                setSearchKey(key.target.value);
              }}
            />
            <Search
              className="icon-search"
              onClick={() => {
                searchResults(searchKey);
              }}
            />
            <Close
              className="icon-close"
              onClick={() => {
                setResults([]);
                setSearchKey('');
              }}
            />
            {results.length > 0 ? (
              <ul className="search-results  pt-3">
                {results.map((e) => (
                  <a
                    href={`/post?id=${e.id}`}
                    className="text-dark result-search"
                    key={e.id}
                  >
                    <Container className="mb-3">
                      <Row className="align-items-center">
                        <Col md={2}>
                          <Image src={e.data.image} className="w-100" />
                        </Col>
                        <Col md={8}>
                          <div>
                            <h4>{e.data.title}</h4>
                            <p>{e.data.smallDescription}</p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </a>
                ))}
              </ul>
            ) : (
              <div />
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <main className="min-vh-100">{children}</main>

      <footer className="bg-dark footer text-light">
        <Container>
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
        </Container>

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
};
export { Layout };
