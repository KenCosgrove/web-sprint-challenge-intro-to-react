// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props){
    const {name, status, species, image} = props
    if (!props.image) return <h3>Loading...</h3>;
    return (
        
<div>
<img src={image} alt="character"/>
<h3>{name}</h3>
<li> {status}</li>
<li> {species}</li>

</div>
    )
}