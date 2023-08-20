import { useRef } from "react";
import "./App.css";
import ship from "./outer wilds ship/outer_wilds__the_ship.glb";

function App() {

  const spaceShip = useRef()

  console.log(ship)

  return (
    <div className="space-ship-wrapper">
      <model-viewer
        classname="space-ship"
        alt="Outer Wilds Space ship"
        src={ship}
        ar
        camera-controls
        touch-action="pan-y"
        disable-tap
        useRef={spaceShip}
      ></model-viewer>
    </div>
  );
}

export default App;
