import { useRef } from "react";
import "./App.css";
import ship from "./assets/outer wilds ship/outer_wilds__the_ship.glb";
import Header from "./components/Header"
function App() {

  const spaceShip = useRef()

  console.log(ship)

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
      </>
  )
}

export default App;
