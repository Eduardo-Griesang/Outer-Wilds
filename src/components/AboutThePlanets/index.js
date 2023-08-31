import Planets from "../Planets";

import "./AboutThePlanets.css";

import ship from "../../assets/outer wilds ship/outer_wilds__the_ship.glb";

import sun from "../../assets/images/planets/sol.png";
import sunStation from "../../assets/images/planets/estação sol.png";
import hourglassTwins from "../../assets/images/planets/twins.png";
import theAttlerock from "../../assets/images/planets/lua.png";
import timberHeart from "../../assets/images/planets/terra.png";
import theInterloper from "../../assets/images/planets/cometa.png";
import hollowsLantern from "../../assets/images/planets/vulcão.png";
import brittleHollow from "../../assets/images/planets/buraco negro.png";
import quantumMoon from "../../assets/images/planets/lua quantica.png";
import giantsDeepTelescope from "../../assets/images/planets/giants deep telescope.png";
import giantsDeep from "../../assets/images/planets/giants deep.png";
import darkBramble from "../../assets/images/planets/abrolho sombrio.png";
import whiteHole from "../../assets/images/planets/buraco branco.png";
import whiteHoleStation from "../../assets/images/planets/estação buraco branco.png";

const AboutThePlanets = () => {
  return (
    <div className="solar-system-wrapper">
      <Planets src={sun} alt={"sun"} />
      <Planets
        src={sunStation}
        alt={"sunStation planets-Hover"}
        planetName={"sun Station"}
        planetDescription={
          "Is an ancient Nomai station in an extremely close and rapid orbit around the Sun."
        }
      />
      <Planets
        src={hourglassTwins}
        alt={"hourglassTwins planets-Hover"}
        planetName={"Hourglass Twins"}
        planetDescription={
          "Are binary planets orbiting each other. Ember Twin is mostly desert rock divided into two halves by a wide equatorial canyon, and Ash Twin is almost entirely made of sand laid over a black, rocky core."
        }
      />
      <Planets
        src={theAttlerock}
        alt={"theAttlerock planets-Hover"}
        planetName={"Attlerock"}
        planetDescription={
          "Is the only natural satellite of Timber Hearth. It is almost entirely barren, the terrain mostly level except where it is pocked with deep craters."
        }
      />
      <Planets
        src={timberHeart}
        alt={"timberHeart planets-Hover"}
        planetName={"Timber Hearth"}
        planetDescription={
          "Is the home planet of the Hearthians and where you will begin your journey. It has a mainly rocky composition accented with forests, ridges, and waterfalls."
        }
      />
      <Planets
        src={theInterloper}
        alt={"theInterloper planets-Hover"}
        planetName={"Interloper"}
        planetDescription={
          "Is a comet on a highly elliptical orbit around the sun. It is relatively small, but is fairly easy to land on. Due to the lack of gravity in its interior"
        }
      />
      <Planets
        src={hollowsLantern}
        alt={"hollowsLantern planets-Hover"}
        planetName={"Hollow's Lantern"}
        planetDescription={
          "Is a relatively small but highly volcanic moon orbiting Brittle Hollow. It has four volcanoes that throw out balls of lava into space at random short intervals."
        }
      />
      <Planets
        src={brittleHollow}
        alt={"brittleHollow planets-Hover"}
        planetName={"Brittle Hollow"}
        planetDescription={
          "The planet consists of a brittle, rocky crust, surrounding a hollow interior with a large Black Hole serving as the planet's core."
        }
      />
      <Planets
        src={quantumMoon}
        alt={"quantumMoon planets-Hover"}
        planetName={"Quantum Moon"}
        planetDescription={"????"}
      />
      <Planets src={giantsDeepTelescope} alt={"giantsDeepTelescope"} />
      <Planets
        src={giantsDeep}
        alt={"giantsDeep planets-Hover"}
        planetName={"Giant's Deep"}
        planetDescription={
          "An ocean planet made of increasingly dense fluid layers, with five small islands on the surface. Filled with turbulent weather and a dense atmosphere, massive cyclones frequently form and travel along the surface of the water."
        }
      />
      <Planets
        src={darkBramble}
        alt={"darkBramble planets-Hover"}
        planetName={"Dark Bramble"}
        planetDescription={
          "A large, confusing network of twisted vines and teleportation passages, the imploded remnants of a fifth planet that has long since been infected and overrun by space-bending plant growth."
        }
      />
      <Planets src={whiteHole} alt={"whiteHole"} />
      
      <Planets src={whiteHoleStation} alt={"whiteHoleStation"} />

      <model-viewer
        classname="space-ship"
        alt="Outer Wilds Space ship"
        src={ship}
        disable-tap
        camera-orbit="calc(30rad + env(window-scroll-y) * 4rad) calc(35deg + env(window-scroll-y) * 50deg) calc(150m - env(window-scroll-y) * 10m)"
      ></model-viewer>
    </div>
  );
};

export default AboutThePlanets;
