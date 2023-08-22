import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import "./App.css";
import solarSystem from './assets/images/orbit.png'

import ship from "./assets/outer wilds ship/outer_wilds__the_ship.glb";
import Header from "./components/Header";
import AboutTheGame from "./components/AboutTheGame";
import AboutThePlanets from "./components/AboutThePlanets";
import Footer from "./components/Footer";

function App() {
  const solarSistem = useRef(null);
  const isInView = useInView(solarSistem, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <main>
      <Header />

      <model-viewer
        classname="space-ship"
        alt="Outer Wilds Space ship"
        src={ship}
        ar
        camera-controls
        touch-action="pan-y"
        disable-tap
        camera-orbit="calc(335rad + env(window-scroll-y) * 4rad) calc(60deg + env(window-scroll-y) * 50deg) calc(150m - env(window-scroll-y) * 10m)"
      ></model-viewer>

      <div className="txt-content" ref={solarSistem}>
        <div>
          <AboutTheGame title="Explore an entire Solar System">
            <p>
              Discover the mysteries of each and every planet, from the crazy
              tornados of the Giants Deep to the unusual behavior of the
              Hourglass Twins.
            </p>
            <p>
              Who built the ruins on the moon? What lurks in the heart of Dark
              Bramble? Why are you trapped in a time loop, and can it be
              stopped? To solve these mysteries you’ll have to venture into the
              most dangerous reaches of space.
            </p>
          </AboutTheGame>

          <AboutTheGame title="A World That Changes Over Time">
            <p>
              The planets of Outer Wilds are packed with hidden locations that
              change with the passage of time. Visit an underground city before
              it’s swallowed by rising sand, or explore the crust of a hollow
              planet as it crumbles beneath your feet. Every secret is guarded
              by hazardous environments and natural disasters as the solar
              system spirals out of control.
            </p>
          </AboutTheGame>

          <AboutTheGame title="Grab Your Hiking Gear">
            <p>
              Strap on your hiking boots, check your oxygen levels, and get
              ready to venture into space. Use the Little Scout space probe to
              illuminate dark caves, take photos, or test for hazards in your
              environment. Track down mysterious audio with your Signal Scope or
              use your Translator to decipher an ancient Nomai riddle. Navigate
              the darkness of space with your jetpack and ship.
            </p>
          </AboutTheGame>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 0.8, x: 0 },
          }}
          transition={{duration: 2, delay: 0.5}}
          initial="hidden"
          animate={mainControls}
        >
          <img className="solar-sistem" src={solarSystem} alt="Outer Wilds solar system" />
        </motion.div>
      </div>

      <AboutThePlanets />

      <Footer />
    </main>
  );
}

export default App;
