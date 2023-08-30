import { useRef } from 'react'
import './Planets.css'

const Planets = ({ src, alt, planetName, planetDescription }) => {

    const planetInfoRef = useRef()

    function whereToHover(e) {
        const element = planetInfoRef.current;

        const positionX = e.target.x;
        const positionY = e.target.offsetTop + e.target.height +13;

        element.style.left = `${positionX}px`
        element.style.top = `${positionY}px`
    }

    return (
        <>
            <img src={src} alt={planetName} className={alt} onMouseEnter={whereToHover} />

            <div className="planet-info-onHover" ref={planetInfoRef}>
                <h2>{planetName}</h2>
                <p>{planetDescription}</p>
            </div>
        </>
    )
}

export default Planets