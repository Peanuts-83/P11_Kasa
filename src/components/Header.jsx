import { Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "../styles/header.scss";

function Header() {
	return (
		<div className="Header">
			<Link to="/">
				<img src={logo} alt="Logo" />
			</Link>
			<nav className="nav">
				<Link to="/" className="Link">
					Accueil
				</Link>
				<Link to="/apropos" className="Link">
					A Propos
				</Link>
			</nav>
		</div>
	);
}

export default Header;
