import logo from './logo.svg';
import './App.css';
import menu from './menu.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edite <code>src/App.js</code> e salve para reload. */}
          SOBRE
          <img src={menu} className="App-menu" alt='Menu' width={"20px"}/>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a> */}
        
      </header>

    </div>
  );
}

export default App;
