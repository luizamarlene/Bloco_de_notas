import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";/* impostando ListaDeNotas */
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import './assets/App.css';
class App extends Component { /* componente app */
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas:[]
    }
  }
  criarNota(titulo, texto) {
    const novaNota = {titulo,texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
    
  }
  render(){
  return (
    <section className='conteudo'> {/* jsx precisa tá dentro de ma tag */}
    <FormularioCadastro criarNota= {this.criarNota.bind(this)}/>
    <ListaDeNotas notas={this.state.notas}/> {/* componente */}
    </section>
  );
  }
}

export default App; /* vai exportar pro ReactDom.render() lá no index.js */
