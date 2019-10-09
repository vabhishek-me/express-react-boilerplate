import React, { useState, useEffect } from 'react';
import { api } from './utils';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('hello?name=Abhishek').then(({ data }) => {
      setName(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
