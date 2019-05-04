import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassDiagram from './DragDrop';
import Clock from './Clock';
import ClassBlock from './ClassDiagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Header.
        </p>
      </header>

      <body className="App-body">
        
        <div className="Menu">
          <p>
            Menu.
          </p>
        </div>

        <div className="Workspace" style={{position: 'relative', overflow: 'auto'}}>
          
          {<ClassBlock />}
          {<ClassBlock />} 
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload... <br/>
            lala~ <br />
            {<Clock />}
            {<ClassDiagram />}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>

        <div className="Menu">
          <p>
            Menu.
          </p>
        </div>

      </body>

      <footer className="App-footer">
        <p>
          Footer.
        </p>
      </footer>

    </div>
  );
}

export default App;
