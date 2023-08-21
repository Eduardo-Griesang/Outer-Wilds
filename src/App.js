import { useRef } from "react";
import { motion } from "framer-motion";

import "./App.css";

import ship from "./assets/outer wilds ship/outer_wilds__the_ship.glb";
import Header from "./components/Header";
import AboutTheGame from "./components/AboutTheGame";

function App() {
  const spaceShip = useRef();

  return (
    <>
      <Header />

      <model-viewer
        classname="space-ship"
        alt="Outer Wilds Space ship"
        src={ship}
        ar
        camera-controls
        touch-action="pan-y"
        disable-tap
        useRef={spaceShip}
        camera-orbit="calc(335rad + env(window-scroll-y) * 4rad) calc(60deg + env(window-scroll-y) * 50deg) calc(150m - env(window-scroll-y) * 10m)"
      ></model-viewer>

      <div className="txt-content">
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
        </div>

        <motion.div
          className="solar-sistem"
          animate={{ y: 0, x:-100}}
          transition={{ ease: "linear", duration: 1, x: { duration: 1 } }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
        />
      </div>
    </>
  );
}

export default App;
