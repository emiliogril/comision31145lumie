import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button'
import ClassCounter from './components/ClassCounter/ClassCounter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  const title = 'Ecommerce'

  const myFunction = () => {
    console.log('hice click en el boton')
  }

  return (
      <div className="App">
        <ItemListContainer greeting={'Hola coders'}/>
        { true ? 'true' : 'false' }
        <NavBar name={title}>
          'Este es otro titulo'
        </NavBar>
        <h1>Comision 31145</h1>
        <Counter />
        <ClassCounter />
        <Button func={myFunction} label="Mi boton"/>
      </div>
  );
}

export default App;
