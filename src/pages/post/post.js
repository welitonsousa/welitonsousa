import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Api } from '../../services/connection';
import { ErrorContext } from '../../context/errorContext';
import { NotFound } from '../notFound/notFound';

import './post.css';

const Post = () => {
  const errorContext = useContext(ErrorContext);
  const history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const id = useQuery().get('id');
  const [data, setData] = useState();

  const getPost = async (idPost) => {
    try {
      const res = await Api.get(`/activities/post${idPost}`);
      setData(res.data.data);
    } catch (e) {
      errorContext.setError(true);
    }
  };
  useEffect(() => {
    const idPost = id;
    if (!idPost) history.push('/posts');
    else getPost(idPost);
  }, []);

  if (data) {
    if (data.date === undefined) {
      return <NotFound />;
    }
    return (
      <Container>
        <div className="text-center mt-4">
          <Image className="image-title" src={`${data.image}`} />
          <h1 className="mt-3">{data.title}</h1>
          <h3 className="mt-4">{data.smallDescription}</h3>
          <div className="text-justify">
            {data.fullDescription.map((e) => (
              <div key={`${e.title}`}>
                {e.title ? <h3 className="text-left">{e.title}</h3> : <div />}
                {e.description ? <p>{e.description}</p> : <div />}
                {e.code ? (
                  <SyntaxHighlighter
                    language={e.lang}
                    style={dracula}
                    showLineNumbers
                    CircularProgress
                  >
                    {e.code}
                  </SyntaxHighlighter>
                ) : (
                  <div />
                )}
                {e.image ? <Image src={`${e.image}`} fluid /> : <div />}
                {e.link ? (
                  <a target="blank" href={`${e.link}`}>
                    {e.linkTitle}
                  </a>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
          {data.imageExample ? (
            <Image
              className="image-example "
              src={`${data.imageExample}`}
              fluid
            />
          ) : (
            <div />
          )}

          <div className="mt-4">
            {data.repo !== {} ? (
              <a target="blank" href={`${data.repo.link}`}>
                {data.repo.title}
              </a>
            ) : (
              <div />
            )}
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div className="min-vh-100 circular-indicator">
      <CircularProgress size={100} />
    </div>
  );
};

export { Post };
