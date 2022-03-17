import logo from "../assets/LOGO.svg";
import "../styles/header.scss";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo" />
      <nav className="nav">
        <a href="#">Accueil</a>
        <a href="#">A Propos</a>
      </nav>
    </div>
  );
}

export default Header;
