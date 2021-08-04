import React, { Component } from 'react'
import './estilo.css'


class FormularioCadastro extends Component {

    constructor(props) { /* o q é isso? */
       super(props);
        this.titulo = "";
        this.texto = "";
    }
    
    _handleMudancaTitulo(evento) { /* _ é pra dizer que são privados */
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    _handleMudancaTexto(evento) {
        /* Caso eu não use o this, pode ficar assim: 
        let handleMudancaTexto = document.getElementsByClassName("form-cadastro_input");
        handleMudancaTexto.texto = evento.target.value;
        console.log(handleMudancaTexto.texto); */
        evento.stopPropagation();
        this.texto = evento.target.value;
    }
    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto);
    }
    render() {
        return(
        <form className="form-cadastro " onSubmit={this._criarNota.bind(this)} >
            <input type='text' placeholder='Título' className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
            <textarea placeholder='Escreva sua nota...' className="form-cadastro_input " rows='10' onChange={this._handleMudancaTexto.bind(this)} />
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
        )
    }
}
export default FormularioCadastro;