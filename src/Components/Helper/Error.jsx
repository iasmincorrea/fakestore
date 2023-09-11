import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: '#f31', margin: '1rem 0' }}>Erro: 404</p>;
};

export default Error;
