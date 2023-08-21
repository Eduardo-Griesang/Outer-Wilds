import './Header.css'
import logo from "../../assets/images/Outer_Wilds_Logo.png"


const Header = () => {
    return(
        <div className="space-ship-wrapper">
            <img src={logo} alt="Outer Wilds Logo" className="header-logo"/>
            <div className="planet"></div>
        </div>
    )
}

export default Header

