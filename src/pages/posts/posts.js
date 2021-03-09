import { useEffect, useState } from "react";
import { Api } from "../../services/connection";
import { Image, Row, Col, Card } from "react-bootstrap";
import CircularProgress from '@material-ui/core/CircularProgress';

import "./posts.css";

const Posts = () => {

  const [data, setData] = useState(undefined);
  const getPosts = async () => {
    try{
      const res = await Api.get('/activities/posts');
      setData(res.data.data);
    }catch(e){}
  };

  useEffect(()=> {
    getPosts();
  }, []);

  return (
  data !== undefined ?
  <div className="content min-size-heigth">
    <div className="post-item">
      {data.map((e)=> (
        <Card className="card">
          <div key={e.id} className="content-post">
            <a href={`/post?id=${e.id}`}>
              <div className="title">
                <div >{e.data.title}</div>
                <div className="date">{e.data.dateShow}</div>
              </div>
            <div className="description">
              <Row>
                <Col md={2}>
                  <Image className="image" src={`${e.data.image}`} fluid />
                </Col>
              <div className="smallDescription"> {e.data.smallDescription}</div>

              </Row>
            </div>
            </a>
          </div>
        </Card>
      ))}  
    </div>
  </div>: <div className="min-size-heigth circular-indicator"><CircularProgress size={100}/></div>
  )
}
export {Posts}