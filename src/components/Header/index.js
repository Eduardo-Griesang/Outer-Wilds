import './Header.css'
import logo from "../../assets/images/Outer_Wilds_Logo.png"
import planet from "../../assets/images/backgound-planet.jpg"


const Header = () => {
    return(
        <div className="space-ship-wrapper">
            <img src={logo} alt="Outer Wilds Logo" className="header-logo"/>
    
            <img src={planet} alt='Outer Wilds planet with a bonfire lit' className="planet" />
        </div>
    )
}

export default Header

