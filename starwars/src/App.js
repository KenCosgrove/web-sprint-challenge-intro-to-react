import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

const WrapperDiv =styled.div`
font-family: sans-serif;
color: #EE82EE;
font-weight: bold;
text-shadow: 2px 1px black;
font-size:1.5rem;
list-style: none;
background: url("https://i.pinimg.com/originals/d9/4f/39/d94f397d1fbebd2212a9b83415d7e550.jpg") no-repeat center/cover;
`
const kf = keyframes`
100%{
  opacity:1;
  color:limegreen;
}
`
const Header = styled.h1`
opacity:0;
color:white;
font-size: 3rem;
text-shadow: 2px 1px black;
animation:  ${kf} 3s ease-in-out forwards;
transition: transform 2s ease;
&:hover {
  transform: scale(1.2);
}
`

const Flexbox = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-around;
padding-bottom: 14rem;
width: 80%;
margin: 0 auto;
transition: transform 2s ease-in;
&:hover {
    transform: rotate(360deg)
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api//character/[1,2,49,185, 192, 218, 213, 244,265, 312]").then(res=>{
    console.log(res.data)  
    setCharacters(res.data)
    }).catch(err=>{
      console.log("error")
    })
  },[])

  return (
    <WrapperDiv>
    <div className="App">
   <Header className="Header">Rick and Morty Characters </Header>
  <Flexbox>    {characters.map(char=>{
  return  <Character name={char.name} status={char.status} species={char.species} image={char.image}/>
})
}</Flexbox>
    </div>
    </WrapperDiv>
  );
}

export default App;
