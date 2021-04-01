import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Button, FormControl } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Api } from '../../services/connection';
import { Data } from './data';
import 'react-toastify/dist/ReactToastify.css';

const NewPost = () => {
  const data = Data;
  const [fullDescriptionInput, setFullDescriptionInput] = useState([]);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const addFullDescription = () => {
    fullDescriptionInput.push(1);
    data.fullDescription.push({});
    setFullDescriptionInput([...fullDescriptionInput]);
  };

  const handlePost = async () => {
    try {
      data.fullDescription = data.fullDescription.filter(
        (e) => e.description || e.code || e.title || e.image || e.link,
      );
      if (!loading) {
        setLoading(true);
        await Api.post('/activities/post', data, {
          headers: { token },
        });
        const notify = () => toast.success('Post adicionado');
        notify();
      }
    } catch (e) {
      const notify = () => toast.error('Ops, algo deu errado');
      notify();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h4>Chave</h4>
      <FormControl
        placeholder="Chave"
        onChange={(e) => {
          setToken(e.target.value);
        }}
      />
      <h4 className="mt-3">Título</h4>
      <FormControl
        placeholder="Título"
        onChange={(e) => {
          data.title = e.target.value;
        }}
      />
      <h4 className="mt-3">Imagem</h4>
      <FormControl
        placeholder="Imagem"
        onChange={(e) => {
          data.image = e.target.value;
        }}
      />
      <h4 className="mt-3">Descrição pequena</h4>
      <FormControl
        placeholder="Pequena descrição"
        onChange={(e) => {
          data.smallDescription = e.target.value;
        }}
      />
      <h4 className="mt-3">Descrição completa</h4>
      {fullDescriptionInput.map((e, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <p>{`Paragrafo ${index + 1}`}</p>
          <FormControl
            placeholder="Título"
            onChange={(key) => {
              data.fullDescription[index].title = key.target.value;
            }}
          />

          <FormControl
            className="mt-3"
            rmControl
            placeholder="Imagem"
            onChange={(key) => {
              data.fullDescription[index].image = key.target.value;
            }}
          />

          <FormControl
            className="mt-3"
            rmControl
            as="textarea"
            placeholder="Descrição"
            onChange={(key) => {
              data.fullDescription[index].description = key.target.value;
            }}
          />

          <FormControl
            className="mt-3"
            rmControl
            as="textarea"
            rows={10}
            placeholder="Código"
            onChange={(key) => {
              data.fullDescription[index].code = key.target.value;
            }}
          />
          <FormControl
            className="mt-3"
            rmControl
            placeholder="Linguagem"
            onChange={(key) => {
              data.fullDescription[index].lang = key.target.value;
            }}
          />
          <FormControl
            className="mt-3"
            rmControl
            placeholder="Título do link"
            onChange={(key) => {
              data.fullDescription[index].linkTitle = key.target.value;
            }}
          />
          <FormControl
            className="mt-3"
            rmControl
            placeholder="Link"
            onChange={(key) => {
              data.fullDescription[index].link = key.target.value;
            }}
          />
        </div>
      ))}
      <Button className="mt-3 w-100" onClick={addFullDescription}>
        Adicionar campo
      </Button>
      <h4 className="mt-3">Imagem exemplo</h4>
      <FormControl
        placeholder="Exemplo de imagem"
        onChange={(e) => {
          data.imageExample = e.target.value;
        }}
      />
      <h4 className="mt-3">Repo</h4>
      <FormControl
        placeholder="Título"
        onChange={(e) => {
          data.repo.title = e.target.value;
        }}
      />
      <FormControl
        className="mt-3"
        rmControl
        placeholder="Link"
        onChange={(e) => {
          data.repo.link = e.target.value;
        }}
      />
      <Button className="mt-3 w-100" onClick={handlePost}>
        {loading ? <CircularProgress size={20} color="white" /> : 'Postar'}
      </Button>
      <ToastContainer />
    </Container>
  );
};

export { NewPost };
