
//pan
import * as THREE from "../js/three.module.js";
export default function E03 ({x, y, z}){

var panm = new THREE.SphereGeometry(2,32,15);
var material04 = new THREE.MeshLambertMaterial(
    {
        color:0xE09852,
        flatShading: true
    }
);
var mesh04 = new THREE.Mesh(panm,material04);
//scene.add(mesh04);
mesh04.scale.set(1, 0.6, 1);
mesh04.position.set(20,1.2,0);

var pan0 = new THREE.SphereGeometry(0.4);
var materialp0 = new THREE.MeshLambertMaterial(
    {
        color:0xcd853f,
        flatShading: true
    }
);
var meshp0 = new THREE.Mesh(pan0,materialp0);
//scene.add(meshp0);
meshp0.position.set(20,2.5,0);

var pan1 = new THREE.TorusGeometry(0.1);
var materialp1 = new THREE.MeshLambertMaterial(
    {
        color:0xcd853f,
        flatShading: true
    }
);
var meshp1 = new THREE.Mesh(pan1,materialp1);
meshp1.position.set(20,2,1);
meshp1.rotation.y = THREE.MathUtils.degToRad(90);
//scene.add(meshp1);

var pan2 = new THREE.TorusGeometry(0.1);
var materialp2 = new THREE.MeshLambertMaterial(
    {
        color:0xcd853f,
        flatShading: true
    }
);
var meshp2 = new THREE.Mesh(pan2,materialp2);
//scene.add(meshp2);
meshp2.position.set(21,2,0);

var pan3 = new THREE.TorusGeometry(0.1);
var materialp3 = new THREE.MeshLambertMaterial(
    {
        color:0xcd853f,
        flatShading: true
    }
);
var meshp3 = new THREE.Mesh(pan3,materialp3);
//scene.add(meshp3);
meshp3.position.set(19,2,0);

var pan4 = new THREE.TorusGeometry(0.1);
var materialp4 = new THREE.MeshLambertMaterial(
    {
        color:0xcd853f,
        flatShading: true
    }
);
var meshp4 = new THREE.Mesh(pan4,materialp4);
meshp4.position.set(20,2,-1);
meshp4.rotation.y = THREE.MathUtils.degToRad(90);
//scene.add(meshp4);

const pan = new THREE.Group();
pan.add (mesh04, meshp0, meshp1, meshp2, meshp3, meshp4);
pan.position.set(x,y,z);
return pan;
}