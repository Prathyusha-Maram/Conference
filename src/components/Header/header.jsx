import "../Header/header.css";
import logo from "../../assets/nwconflogo.png"
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="logoBox">
            <img src={logo} alt="Northwest conference logo" className="nwlogo"/>
            <h3 className="logoName"><a href="#" className="logoLink"></a>NWMSU</h3>
            </div>
            <div>
            <ul className="menu">
                <li className="menuItem"><Link to="/home" className="menuLink">HOME</Link></li>
                <li className="menuItem"><Link to="/committee" className="menuLink">PROGRAM COMMITTEE</Link></li>
                <li className="menuItem"><Link to="/accept" className="menuLink">ACCEPT</Link></li>
                <li className="menuItem"><Link to="/evaluation" className="menuLink">EVALUATION</Link></li>
                <li className="menuItem"><Link to="/login" className="menuLink">LOGIN</Link></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Header;