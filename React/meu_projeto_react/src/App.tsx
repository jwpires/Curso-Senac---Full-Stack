import React from 'react';
import './App.css';
import './style/style.css';
import Baseboard from './components/baseboard';
import Header from './components/header';


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

      <Header/>
      <Main/>
      <Baseboard/>

      
    </div>
  );
} export default App;


