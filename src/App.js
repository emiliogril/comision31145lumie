import './App.css';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const styles = { 
    color: 'red', 
    fontSize: '40px'
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={'./images/logo192.png'} className="App-logo" alt="logo" />
        <h1 style={styles} className="Titulo">Hola Comision 31145</h1>
        <button>Boton</button>
      </header>
    </div>
  );
}

export default App;
