import './AboutTheGame.css'

const AboutTheGame = ({ title, children }) => {

    return (
        <div className='about-text-wrapper'>
            <h1 className='about-title'>
                {title}
            </h1>
            <div className='about-text'>
                {children}
            </div>
        </div>
    )
}

export default AboutTheGame