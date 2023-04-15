import React from 'react';
import './App.css';
import './style/style.css';

function App() {

  let Menu1: string = "Página Principal";
  let Menu2: string = "Nossos Produtos";
  let Menu3: string = "Contatos";
  let Menu4: string = "Meu GitHub";

  return (
    <div>
      <header className="cabecalho">
        <table className='menu'>
          <tr>
           <a href="http://localhost:3000/"><td>{Menu1}</td></a> 
           <a href="http://localhost:3000/"><td>{Menu2}</td></a> 
           <a href="http://localhost:3000/"><td>{Menu3}</td></a> 
           <a href="https://github.com/jwpires/Curso-Senac---Full-Stack" target="_blank"><td>{Menu4}</td></a> 
          </tr>
        </table>
      </header>

      <main className="_body">
        Corpo <br />
        Teste
      </main>

      <footer className="rodape">
        Rodapé
      </footer>
    </div>
  );
} export default App;


