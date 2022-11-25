import React from 'react'


export default class form extends React.Component {

constructor(props){
super(props);

this.state = {
  name:"",
  pname:"",
  img:"#",
  typeA:"",
  typeB:"",
  weight:"",
  id:"",
  move:"",
  height:""
  }

}
  
 fetchApi = async () => {
  let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
  let data = await resp.json();
  console.log( data.sprites.other['official-artwork'].front_default,)
  this.setState({
    img: data.sprites.other['official-artwork'].front_default,
    pname:data.forms[0].name,
    type:data.types[0].type.name,
    weight:data.weight,
    id:data.id,
    move:data.moves[0].move.name,
    height:data.height
      })
    } 

  handlerName = event => {
   this.setState({
    name: event.target.value
    })
    }

  handlerSubmit = event => {
    let aux = this.state.name
    console.log(aux);
    event.preventDefault();
    this.fetchApi();
    }

    render() {
      
    if(this.state.img === "#"){
      return (
      <div>
      <p className='text-dark mt-4 font-italic Italica' >¡¡Bienvenido a tu POKEdex!! <br/> Busca el nombre de tu compañero Pokemon.</p>
      <div className='forma'>
      <form onSubmit={this.handlerSubmit}>
      <input type="text-center" placeholder="     ¡Busca tu Pokemon!"  value={this.state.name} onChange={this.handlerName}></input>  <br/>
      <button type='submit' className="btn btn-primary mt-4">Enviar</button>                
      </form>
      </div>
                      
         
              
        </div>
        )
      } else {

    return (
    <div>
    <p className='text-dark mt-4 font-italic Italica' >¡¡Bienvenido a tu POKEdex!! <br/> Busca el nombre de tu compañero Pokemon.</p>
    <div className='forma'>
    <form onSubmit={this.handlerSubmit}>
    <input type="text-center" placeholder="     ¡Busca tu Pokemon!"  value={this.state.name} onChange={this.handlerName}></input>  <br/>
    <button type='submit' className="btn btn-primary mt-4">Enviar</button>                
    </form>
    </div>
    <div class="tarjeta">
    <div class="card mt-5 card border border-warning border border-2 mx-auto width:15em; col-7" onSubmit={this.handlerSubmit}>
    <p className='text-uppercase text-secondary mt-3 fw-bold text-start pr-5 my-2 mx-4 '> {this.state.id}</p>  
    <p className='text-dark text-uppercase fw-bold '>{this.state.pname}</p> 
    <div className='imgss'>
    <img src={this.state.img} class="card-img-top" alt="...height=90px" />
    </div>
    <div class="card-body">
    <p class="text-dark">
    <div class="">
    <p class="text-center"> </p> 
    <p className='fw-bold'> Tipo: </p><p> {this.state.type} </p>
    <p className='fw-bold'> Peso:  </p><p> {this.state.weight} Kg. </p> 
    <p className='fw-bold'> Altura: </p><p> {this.state.height}</p> 
    <p className='fw-bold'> Ataque Especial:</p>{this.state.move}.
    </div>
    </p>  
    </div>
    </div>
    </div>
    </div>
        )
      }
  }
  }


