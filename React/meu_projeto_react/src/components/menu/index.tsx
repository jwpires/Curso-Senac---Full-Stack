import '../../style/style.css';

function Menu (props: { Menu1: string ; Menu2: string ;  Menu3: string ; Menu4: string ;}){
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

  export default Menu;