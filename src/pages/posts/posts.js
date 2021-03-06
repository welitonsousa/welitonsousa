import { useEffect, useState } from "react";
import { Api } from "../../services/connection";
import { Image, Row, Col } from "react-bootstrap";
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
  <div className="content">
    <div className="post-item">
      {data.map((e)=> (
        <div key={e.id} className="content-post">
          <a href={`/post?id=${e.id}`}>
            <Row className="title">
              <div >{e.data.title}</div>
              <div>{e.data.date}</div>
            </Row>
          </a>
          <div className="description">
            <Row>
              <Col md={2}>
                <Image className="image" src={`${e.data.image}`} fluid />
              </Col>
            <div> {e.data.smallDescription}</div>

            </Row>
          </div>
        </div>
      ))}  
    </div>
  </div>: <div className="content"/>
  )
}
export {Posts}