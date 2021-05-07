import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    35,
    1, //dummy value
    0.01,
    100
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
