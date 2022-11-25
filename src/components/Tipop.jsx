import React from "react"
import Card from "./Cartita"

export default function Tipop({pokemon}){

return(
<div>
{ pokemon && pokemon.map((value, index) => 

    <Card key={index} {...value}/>
)
}


</div>

)
}


