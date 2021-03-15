import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Image, Row } from 'react-bootstrap';
import { ErrorContext } from '../../context/errorContext';
import imageNotFound from '../../assets/images/chorando.svg';

const ErrorScreen = () => {
  const errorContext = useContext(ErrorContext);
  const history = useHistory();

  const handleScreen = (screenName) => {
    errorContext.setError(false);
    if (screenName) history.replace(screenName);
  };

  return (
    <div className="min-vh-100 circular-indicator">
      <div>
        <Image className="w-25" src={imageNotFound} />
        <h2>Ops, algo deu errado</h2>
        <Row className="justify-content-around mt-3">
          <Button className="w-25" onClick={() => handleScreen('/')}>Home</Button>
          <Button className="w-25" onClick={() => handleScreen()}>Recarregar</Button>
        </Row>
      </div>
    </div>
  );
};

export { ErrorScreen };
