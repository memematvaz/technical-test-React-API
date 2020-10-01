import React from 'react';
import Header from './components/Header.js';
import PokeList from './components/PokeList.js';


const App = () => {
  return (
    <div className="App">
        <Header/>
        <PokeList/>
    </div>
  )
}

export default App;
