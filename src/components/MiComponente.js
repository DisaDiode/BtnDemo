import React, {Component} from 'react'

class MiComponente extends Component{

    render(){

        let receta ={

            nombre: 'Pizza',
            ingredientes:['Tomate', 'Queso', 'Peperoni'],
            Calorias:600
        }
        return(
            <React.Fragment>
            <h1>{receta.nombre}</h1>
            <h2>{receta.Calorias}</h2>
            {
                receta.ingredientes.map((ingredientes,i)=>{
                    console.log(ingredientes)
                    return(
                        <li key={i}>
                            {ingredientes}
                        </li>
                    )
                })
            }
            <hr/>
            </React.Fragment>
        );
    }
}

export default MiComponente; 