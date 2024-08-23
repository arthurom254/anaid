import * as THREE from "three"
import {OrbitControls} from "jsm/controls/OrbitControls.js"

const width = window.innerWidth
const height = window.innerHeight
const scene = new THREE.Scene()
const loader = new THREE.TextureLoader()
const light = new THREE.AmbientLight(0xffff, 5)
scene.add(light)
// set backgound to canvas using the loader above and image src=img/cuck.jpg

// const backgroundMaterial = new THREE.MeshBasicMaterial({map: backgroundTexture})
// const backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), backgroundMaterial)
// backgroundMesh.position.z = -50
// scene.add(backgroundMesh)

// scene.background = 0xfffff //loader.load('img/cuck.jpg') 
const camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(width, height)
scene.background =loader.load('/img/cuck.jpg') 

document.getElementById('canvas').appendChild(renderer.domElement)

renderer.render(scene, camera)