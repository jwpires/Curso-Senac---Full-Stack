import '../../style/style.css';
import Menu from '../menu';
 
 function Header(){
    return(
      <header className="cabecalho">
        Olá
        <Menu Menu1={'Página Principal'} Menu2={'Nossos Produtos'} Menu3={'Contatos'} Menu4={'Meu GitHub'}/>
      </header>
    );
  }

  export default Header;