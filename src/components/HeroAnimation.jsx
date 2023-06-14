import { Lottie } from "lottie-react";
import iotAnimation from "../assets/iot-transparent.json";

const style = {
  height: 300,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

const HeroAnimation = () => {
  return (
    <Lottie
      animationData={iotAnimation}
      // interactivity={interactivity}
    />
  );
};

export default HeroAnimation;