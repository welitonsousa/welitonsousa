import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useEffect, useState, useContext } from 'react';
import { Image, Col, Tab, Tabs, Row, Container } from 'react-bootstrap';
import { Api } from '../../services/connection';
import { ErrorContext } from '../../context/errorContext';
import profile from '../../assets/images/weliton-profile.jpg';
import './home.css';

const Home = () => {
  const errorContext = useContext(ErrorContext);
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await Api.get('/profile');
      setData(res.data.data);
    } catch (e) {
      errorContext.setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return data ? (
    <div>
      <Container>
        <Row className="justify-content-around">
          <Col md={5} className="text-center">
            <Image src={profile} roundedCircle className="w-50 mt-4" />
            <h5>Weliton de Sousa Araujo</h5>
            <div className="text-justify">
              <h3>Projetos: </h3>
              {data.projects.map((e) => (
                <div>
                  <a key={e.title.toString()} href={e.link} target="blank">
                    <h5 className="text-dark font-weight-bolder project-color">
                      {e.title}
                    </h5>
                  </a>
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} className="text-justify">
            <br />
            <h4>Sobre:</h4>
            {data.about.map((e) => (
              <div key={`${e}`}>{e}</div>
            ))}

            <br />
            <h4>Soft skills:</h4>
            {data.softSkills.map((e) => (
              <div key={`${e}`}>{e}</div>
            ))}

            <br />
            <h4>Hard skills:</h4>

            <Tabs
              defaultActiveKey={`${data.hardSkills[0].title}`}
              id="uncontrolled-tab-example"
            >
              {data.hardSkills.map((e) => (
                <Tab
                  key={`${e.title}`}
                  eventKey={e.title}
                  title={<p>{e.title}</p>}
                >
                  <ul>
                    {e.itens.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </Tab>
              ))}
            </Tabs>
            <br />
            <h4>Formação:</h4>
            {data.formation.map((e) => (
              <div key={`${e}`}>{e}</div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <div className="vh-100 circular-indicator">
      <CircularProgress size={100} />
    </div>
  );
};

export { Home };
