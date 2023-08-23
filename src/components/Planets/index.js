import { useRef } from 'react'
import './Planets.css'

const Planets = ({ src, alt, planetName, planetDescription }) => {

    const planetInfoRef = useRef()

    function whereToHover(e) {
        const positionX = e.target.x;
        const positionY = e.target.y + e.target.clientHeight -30;
        
        const element = planetInfoRef.current

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