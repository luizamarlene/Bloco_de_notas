import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

/* React utiliza esse arquivo index.js para inserir todo o conteúdo JSX do App.js no index.html, tornando possível que esse template seja exibido no navegador.*/

ReactDOM.render( /*Um método interno do ReactDOM chamado render() (que também utiliza JSX ao passar < App /> como parâmetro */
  <React.StrictMode> {/* boa prática do js? */}
    <App /> {/* receber o app.js */}
  </React.StrictMode>,
  document.getElementById('root') /* O React usa a div="root" no arquivo index.js, inserindo os elementos declarados em JSX do arquivo App.js.O */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
