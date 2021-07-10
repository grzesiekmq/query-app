import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js";

export const container = document.querySelector(".container");
export function updateOs() {
  container.innerHTML = "OS is updating. Please wait" + "<br>";
  container.innerHTML += "<progress></progress>";

  setTimeout(() => (container.textContent = "Updated"), 5000);
}

export function showText() {
  const answer = "Gran turismo sport";
  container.textContent = answer;
  return answer;
}

export function showCar() {
  const img = `<img src="test images/gallardo.jpg">`;
  container.innerHTML = img;

  container.style.left = "10%";
}

export function resizeCar() {
  const img = document.querySelector("img");

  img.style.width = "50%";
  img.style.height = "50%";
}

export function saveCar() {
  const img = document.querySelector("img");
  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);

  link.href = img.src;
  link.download = img.src.split("/").slice(-1)[0];
  link.click();
}

export function showCanvas() {
  const c = document.createElement("canvas");
  document.body.appendChild(c);
}

export function threejsScene() {
  container.textContent = "";
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
}
