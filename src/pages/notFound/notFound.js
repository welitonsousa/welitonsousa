import React from 'react';
import { Image } from 'react-bootstrap';
import imageNotFound from '../../assets/images/chorando.svg';

const NotFound = () => (
  <div className="vh-100 circular-indicator">
    <div>
      <Image className="w-25" src={imageNotFound} />
      <h2>Oh não, página não encontrada</h2>
    </div>
  </div>
);

export { NotFound };
