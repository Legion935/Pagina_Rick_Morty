import logo from './logo.svg';
import './App.css';

import imagenRYM from './img/rick-morty.png'
import { useState } from 'react';
import Characters from './components/Characters';
function App() {
  const [characters, setCharacters]= useState(null);
  const reqApi = async () =>{
    const api= await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tittle">Rick & Morty</h1>
        
        {characters ? (
          console.log(setCharacters),
          <Characters characters={characters} setCharacters={setCharacters}/>
         ):(
          <>
        <img src={imagenRYM} alt="Rick & Morty" className="img-home"></img>
        <button onClick={reqApi} className="btn.search">Buscar Personajes</button>
          </>
         )}
      </header>
    </div>
  );
}

export default App;
