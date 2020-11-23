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
        <title>Reaction Experiment</title>
        
        <Container      
          style={{
                  position: 'absolute', left: '50%', top: '40%',
                  transform: 'translate(-50%, -50%)'
                  }}
          >
          <a href="/basic"><Button>Basic</Button></a>
          <a href="/colors"><Button>Different Colors Experiment </Button> </a>
          <a href="/sizes"><Button>Different Sizes Experiment (Startle Reflex)</Button> </a>
          <a href="/positions"><Button>Different Positions Experiment </Button> </a>
          <a href="/sound"><Button>Sound Reaction Experiment </Button> </a>
        </Container>
    </div>
  );
}

export default App;
