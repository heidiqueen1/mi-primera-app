import logo from './airplane.png';
import './App.css';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.cheapoair.com/es-us/reserva/aerolineas?codigo-de-aerolinea=v0&fpaffiliate=coana-es-bing-airline&fpsub=&device=c&fpprice=&utm_campaignID=376660464&utm_adgroupID=1239149832217213&msclkid=8f72c2ba3b9d1b3510d3a0dafddeaf51&utm_source=bing&utm_medium=cpc&utm_campaign=Airlines_ATLAS&utm_term=www%20conviasa&utm_content=airline%3Dconviasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Viaja por el mundo
        </a>
        <TitleComponent/>
      </header>
    </div>
  );
}

export default App;
