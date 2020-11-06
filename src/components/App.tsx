import React from 'react';
import './App.css';
import { Container, Header, Button } from 'semantic-ui-react';
import { Experiment } from './experiment';
function App() {
  return (
    <div className="App">
        <Header>
          Physics 4AL Project: Reaction Time Experiment
        </Header>
        <Container>
          <Experiment>
          </Experiment>
        </Container>
    </div>
  );
}

export default App;
