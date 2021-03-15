import React, { createContext, useState } from 'react';

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorProvider, ErrorContext };
