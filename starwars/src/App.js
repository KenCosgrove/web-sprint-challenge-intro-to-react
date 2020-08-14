import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api//character/[1,2,244,265]").then(res=>{
    console.log(res.data)  
    setCharacters(res.data)
    }).catch(err=>{
      console.log("error")
    })
  },[])


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      {characters.map(char=>{
  return  <Character name={char.name} status={char.status} species={char.species} image={char.image}/>
})
}
      
    </div>
  );
}

export default App;
