import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#000',
       color: '#333',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#dc3545' }}>😢 Oops!</h1>
      <h2 style={{ fontSize: '2rem' }}>Something went wrong.</h2>
      {error?.status && <p style={{ fontSize: '1.5rem', margin: '10px 0' }}>Error {error.status}</p>}
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        {error?.statusText || error?.message || 'An unexpected error occurred.'}
      </p>

      <button 
        onClick={() => window.location.href = '/'} 
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        Go Back Home 🏠
      </button>
    </div>
  );
};

export default ErrorPage;
