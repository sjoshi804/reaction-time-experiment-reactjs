import React from 'react';
import './App.css';
import { Container, Header, Button } from 'semantic-ui-react';
import { ExperimentControlPanel } from './experimentControlPanel';
function App() {
  return (
    <div className="App">
        <Header>
          Physics 4AL Reaction Time Experiment Project
        </Header>
        <Container>
          <ExperimentControlPanel>
          </ExperimentControlPanel>
        </Container>
    </div>
  );
}

export default App;
