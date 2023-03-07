// Based on: https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_waves.html
import * as THREE from 'three';
import frameThrottle from './frame-throttle';

const SEPARATION = 80;
const AMOUNTX = 70;
const AMOUNTY = 70;

let camera;
let scene;
let renderer;

let particles;
let count = 0;

let mouseX = 89;
let mouseY = -340;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  let i = 0;
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const particle = particles[i++];

      particle.position.y = (Math.sin((ix + count) * 0.3) * 50)
        + (Math.sin((iy + count) * 0.5) * 50);

      const sinX = (Math.sin((ix + count) * 0.3) + 1) * 2;
      const sinY = (Math.sin((iy + count) * 0.5) + 1) * 2;
      const scale = sinX + sinY;

      particle.scale.x = scale;
      particle.scale.y = scale;
    }
  }

  renderer.render(scene, camera);
  count += 0.1;
}

export function init(container) {
  camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;
  scene = new THREE.Scene();
  particles = [];

  const geometry = new THREE.SphereGeometry(0.4, 10, 10);
  const material = new THREE.MeshBasicMaterial({ color: '#2dd4bf' });

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const particle = new THREE.Mesh(geometry, material);
      particles.push(particle);
      particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
      particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
      scene.add(particle);
    }
  }

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

export function animate() {
  requestAnimationFrame(animate);
  frameThrottle(render)();
}
