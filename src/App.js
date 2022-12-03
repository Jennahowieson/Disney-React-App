import React from 'react';
import DisneyContainer from './containers/DisneyContainer'
import './App.css'


function App() {
  let charactersApi = 'https://api.disneyapi.dev/characters/4703'

  const updateCharactersApi = ((randomCharacterId, newUrl)=>{
    charactersApi = [{name:`Random${randomCharacterId}`, url:{newUrl}}]
  })

    return (
      <DisneyContainer charactersApi={charactersApi} updateCharactersApi={updateCharactersApi}/>
    );
  }

  export default App;
