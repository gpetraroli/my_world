import * as THREE from 'three';
import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls.js";

// create the renderer and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//scene
const scene = new THREE.Scene();

const sphereGeometry = new THREE.SphereGeometry(1000, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0x0000ff,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

// controls
const controls = new THREE.PointerLockControls(camera, document.body);
scene.add(controls.getObject());

// floor
const floorGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
const floorMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -10;
scene.add(floor);

renderer.setAnimationLoop(() => {
    setTimeout(() => {
        renderer.render(scene, camera);
    }, 1000 / 60);
});

document.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

