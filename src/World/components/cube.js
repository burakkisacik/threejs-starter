import { BoxBufferGeometry, MathUtils, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshBasicMaterial();

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
