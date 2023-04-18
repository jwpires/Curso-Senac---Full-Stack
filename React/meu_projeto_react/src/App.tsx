import React from 'react';
import './App.css';
import './style/style.css';

const Tabela = (props: { Menu1: string ; Menu2: string ;  Menu3: string ; Menu4: string ;}) =>{
  return(
    <table className='menu'>
        <tr>
            <a href="http://localhost:3000/"><td>{props.Menu1}</td></a> 
            <a href="http://localhost:3000/"><td>{props.Menu2}</td></a> 
            <a href="http://localhost:3000/"><td>{props.Menu3}</td></a> 
            <a href="https://github.com/jwpires/Curso-Senac---Full-Stack" target="_blank"><td>{props.Menu4}</td></a> 
        </tr>
      </table>
  );
}

const Cabecalho = () => {
  // let Menu1: string = "Página Principal";
  // let Menu2: string = "Nossos Produtos";
  // let Menu3: string = "Contatos";
  // let Menu4: string = "Meu GitHub";

  return(
    <header className="cabecalho">
      Olá
      <Tabela Menu1={'Página Principal'} Menu2={'Nossos Produtos'} Menu3={'Contatos'} Menu4={'Meu GitHub'}/>
    </header>
  );
}

const Rodape = () =>{
  return(
    <footer className="rodape">
        Rodapé
    </footer>
  );
}

const Main = () =>{

  return(
      <main className="_body">
        Corpo <br />
        Teste
      </main>
  );
}

function App() {

  return (
    <div>

      <Cabecalho/>
      <Main/>
      <Rodape/>

      
    </div>
  );
} export default App;


