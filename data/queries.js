import {
  showText,
  showCar,
  resizeCar,
  saveCar,
  updateOs,
  showCanvas,
  threejsScene,
} from "../components/tasks.js";

const queries = [
  {
    name: "great racing game",
    task: showText,
  },
  {
    name: "show car",
    task: showCar,
  },
  {
    name: "resize car",
    task: resizeCar,
  },
  {
    name: "save car",
    task: saveCar,
  },
  {
    name: "update os",
    task: updateOs,
  },

  {
    name: "show canvas",
    task: showCanvas,
  },
  {
    name: "threejs scene",
    task: threejsScene,
  },
];

export { queries };
