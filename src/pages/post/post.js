import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Api } from "../../services/connection";
import { Image } from "react-bootstrap";
import CircularProgress from '@material-ui/core/CircularProgress';

import './post.css';

const Post = () => { 
  const history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const id = useQuery().get("id");
  const [data, setData] = useState();

  const getPost = async (idPost) => {
    try{
      const res = await Api.get(`/activities/post${idPost}`);
      if (res.data.data.length === 0) history.replace('/not-found');
      setData(res.data.data);
    }catch(e){
      history.replace('/not-found');
    }
  } 

  useEffect(()=> {
    const idPost = id;
    if (!idPost) history.push('/');
    else getPost(idPost);
  }, []);
  
  return (
    data ?
  <div className="content min-size-heigth">
    <div className="w-75 text-center mt-4">
      <Image className="image-title" src={`${data.image}`}/>
      <h1 className="mt-3">{data.title}</h1>
      <h3 className="mt-4">{data.smallDescription}</h3>
      <div className="text-justify">
        {data.fullDescription.map((e, index)=> (
        <div key={`${index}`}>
          {e.title ? <h3>{e.title}</h3>: <div/>}
          {e.description ? <p>{e.description}</p>: <div/>}
          {e.image ? <Image src={`${e.image}`} fluid/> : <div/>}
        </div>)
        )}
      </div>
      {data.imageExample ?
      <Image className="image-example " src={`${data.imageExample}`} fluid/>: <div/>}
    
      <br/><br/><br/>
      <div>
        {data.repo !== {} ? <a target="blank" href={`${data.repo.link}`}>{data.repo.title}</a> : <div/>}
      </div>
    </div>
  </div> : <div className="min-size-heigth circular-indicator"><CircularProgress size={100}/></div>)
}
export {Post};