import { useState } from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import MLListContainer from './components/MLListContainer/MLListContainer'


const App = () => {
 const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
      <div className="App">
        {/* <ItemListContainer greeting={'Hola coders'} /> */}
        {/* <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
        { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null } */}
        <MLListContainer />
      </div>
  );
}

export default App;
