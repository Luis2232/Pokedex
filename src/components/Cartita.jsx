import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




export default function Card(props){

const[onePokemon,setOnePokemon]= useState({
   name:"",
   sprites:{front_default:""},
   moves: {0:{move:{name:""}}},
   weight: "",
   types:{0:{type:{name:""}}}
 

})

const getPokemon = (url) =>{

axios.get(url)
.then((response) => {
console.log(response)
setOnePokemon(response.data)
})
}

useEffect(() => {

getPokemon (props.url)
  }, [])
  

return(

<div className="container">
<div className="card mt-3 col-4 mx-5 border border-success border border-2">
<div className="card-header text-dark fw-bold">
{onePokemon.name}
</div>
<div className="card-body">
<img src={onePokemon.sprites.front_default} alt="" />
<h4><a href=""></a></h4>
<p className="card-text text-dark fw-bold">Tipo </p><p> {onePokemon.types[0].type.name} </p>
<p className="card-text text-dark fw-bold">Peso: </p><p> {onePokemon.weight} kg. </p>
<p className="card-text text-dark fw-bold">Altura: </p><p> {onePokemon.height} </p>
<p className="card-text text-dark fw-bold">Ataque Especial: </p><p> {onePokemon.moves[0].move.name} </p>
</div>
</div>
</div>


)

}
