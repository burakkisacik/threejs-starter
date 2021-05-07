import './style.css';
import { World } from './src/World/World';

async function main() {
  const container = document.querySelector('#scene-container');

  const world = new World(container);

  //world.render();
  world.start();
}

main().catch((err) => {
  console.log(err);
});
