import './header.css'
import Logo from '../../images/logo.svg'

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-logo-div">
          <img className="logo" src={Logo}></img>
          <h3>ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  )
}

export default Header;
