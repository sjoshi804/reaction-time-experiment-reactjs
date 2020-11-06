import React from 'react';
import './App.css';
import { Button, Container, Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
        <Header
          style={{
              position: 'absolute', left: '50%', top: '5%',
              transform: 'translate(-50%, -50%)'
          }}
        >
          Physics 4AL Project: Reaction Time Experiment
        </Header>

        <Container>
          <a href="/basic">Basic Experiment</a>
          <a href="/colors">Varying Colors Experiment</a>
          <a href="/sizes">Varying Sizes Experiment</a>
        </Container>
    </div>
  );
}

export default App;
