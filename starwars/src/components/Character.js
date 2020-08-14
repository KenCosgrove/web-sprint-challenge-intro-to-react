// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props){
    const  {name, status, species, image} = props

   const Nameh3 = styled.h3`
   color: white;
   text-shadow: 2px 1px green;
   `
   const ListStyles = styled.li`
   margin-bottom: 2rem;
   `

  //  if (!props.image) return <h3>Loading...</h3>;
    return (
        
<div>

<img src={image} alt="character"/>

<Nameh3>{name}</Nameh3>
<li>Status: {status}</li>
<ListStyles>Species: {species}</ListStyles>

</div>
    )
    }