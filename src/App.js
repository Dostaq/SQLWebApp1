import './App.css';
import logo from './logo-cofco-small.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to COFCO International!
        </p>
        <a
          className="App-link"
          href="https://www.cofcointernational.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          COFCO International
        </a>
      </header>
    </div>
  );
}

export default App;
