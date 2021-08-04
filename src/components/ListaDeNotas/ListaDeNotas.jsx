import React, { Component } from 'react'
import CardNota from '../CardNota';
import './estilo.css' 
/*class components*/
class ListaDeNotas extends Component { /* criando um componente e exportando */
 
  render() { /* renderizando jsx pra virar js na pag web */
    return (
      <section>
      <ul className="lista-notas">
        {this.props.notas.map((nota,index) => {
          return (
            <li className="lista-notas_item" key={index}>
              
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
            })    
        } {/* pra dizer q é js */}
      </ul>
      </section>
    );
}
}
export default ListaDeNotas;