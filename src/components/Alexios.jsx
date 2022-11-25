import axios from 'axios';
import {useEffect} from 'react';
import React from 'react';
import {useState} from "react"
import Tipop from './Tipop';

export default function Alexios() {

  const [ pokemon, setPokemon]= useState([{name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}])
  
    const getpokemons=()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9`)
    .then((response)=>{
    console.log(response.data.results);
    setPokemon (response.data.results);
    
    }) }
    
    
    useEffect(()=>getpokemons(),[]);
  
    return (
    <div>
      <Tipop pokemon={pokemon}/>   
    </div>
  )
}
