import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Row, Col, Card } from 'react-bootstrap';
import { Api } from '../../services/connection';

import './posts.css';

const Posts = () => {
  const [data, setData] = useState(undefined);
  const history = useHistory();
  const getPosts = async () => {
    try {
      const res = await Api.get('/activities/posts');
      setData(res.data.data);
    } catch (e) {
      history.replace('not-found');
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return data !== undefined ? (
    <div className="content min-size-heigth">
      <div className="w-75 text-center">
        {data.map((e) => (
          <Card className="mt-4">
            <div key={e.id} className="content-post">
              <a href={`/post?id=${e.id}`}>
                <div className="title">
                  <div>{e.data.title}</div>
                  <div className="pl-3">{e.data.dateShow}</div>
                </div>
                <div className="text-dark m-3">
                  <Row>
                    <Col md={2}>
                      <Image className="image" src={`${e.data.image}`} fluid />
                    </Col>
                    <div className="m-1 text-justify">
                      {' '}
                      {e.data.smallDescription}
                    </div>
                  </Row>
                </div>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ) : (
    <div className="min-size-heigth circular-indicator">
      <CircularProgress size={100} />
    </div>
  );
};
export { Posts };
