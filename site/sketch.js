var scene, camera, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
camera.position.set(0, 100, 1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
}

animate()
