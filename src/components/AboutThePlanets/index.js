import Planets from '../Planets';

import './AboutThePlanets.css';
import sun from '../../assets/images/planets/sol.png'
import sunStation from '../../assets/images/planets/estação sol.png'
import hourglassTwins from '../../assets/images/planets/twins.png'
import theAttlerock from '../../assets/images/planets/lua.png'
import timberHeart from '../../assets/images/planets/terra.png'
import theInterloper from '../../assets/images/planets/cometa.png'
import hollowsLantern from '../../assets/images/planets/vulcão.png'
import brittleHollow from '../../assets/images/planets/buraco negro.png'
import quanticMoon from '../../assets/images/planets/lua quantica.png'
import giantsDeepTelescope from '../../assets/images/planets/giants deep telescope.png'
import giantsDeep from '../../assets/images/planets/giants deep.png'
import darkBramble from '../../assets/images/planets/abrolho sombrio.png'
import whiteHole from '../../assets/images/planets/buraco branco.png'
import whiteHoleStation from '../../assets/images/planets/estação buraco branco.png'


const AboutThePlanets = () => {
    return(
        <div className='solar-system-wrapper'>
            <Planets src={sun} alt={"sun"} />
            <Planets src={sunStation} alt={"sunStation"} />
            <Planets src={hourglassTwins} alt={"hourglassTwins"} />
            <Planets src={theAttlerock} alt={"theAttlerock"} />
            <Planets src={timberHeart} alt={"timberHeart"} />
            <Planets src={theInterloper}  alt={"theInterloper"} />
            <Planets src={hollowsLantern} alt={"hollowsLantern"} />
            <Planets src={brittleHollow} alt={"brittleHollow"} />
            <Planets src={quanticMoon} alt={"quanticMoon"} />
            <Planets src={giantsDeepTelescope} alt={"giantsDeepTelescope"} />
            <Planets src={giantsDeep} alt={"giantsDeep"} />
            <Planets src={darkBramble} alt={"darkBramble"} />
            <Planets src={whiteHole} alt={"whiteHole"} />
            <Planets src={whiteHoleStation} alt={"whiteHoleStation"} />
        </div>
    )
}

export default AboutThePlanets