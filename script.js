import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(60, width/height, 0.1, 1000)
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const orbtcontrol = new OrbitControls(camera, renderer.domElement)
renderer.setSize(width, height)

document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry()
const loader = new THREE.TextureLoader()
const material = new THREE.MeshPhongMaterial({
    map:loader.load('./assets/e.jpg'),
    flatShading:true ,
    // wireframe: true
})


const planegeometry =new THREE.PlaneGeometry(5, 5)
const planematerial = new THREE.MeshPhongMaterial({
    color: 0xfffff,
    flatShading: true,
    side: THREE.DoubleSide
})
const ligt = new THREE.DirectionalLight(0xff00e0, 9)
scene.add(ligt)
ligt.position.set(10, 10, 5)

const dlh = new THREE.DirectionalLightHelper(ligt, 2)
dlh.castShadow=true
scene.add(dlh)
const sphere = new THREE.Mesh(geometry, material)
camera.position.set(3, 3, -5)
orbtcontrol.update()
sphere.castShadow = true
sphere.position.set(2, 2, 2)
scene.add(sphere)

const plane = new THREE.Mesh(planegeometry, planematerial)
plane.rotation.x = Math.PI * - 0.5  
plane.receiveShadow = true
scene.add(plane)



function animate(){
    sphere.rotation.x+=0.01
    sphere.rotation.y+=0.02
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)