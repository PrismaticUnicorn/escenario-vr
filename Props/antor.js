

//antorcha
import * as THREE from "../js/three.module.js";
export default function E04 ({x, y, z}){

var antorcha = new THREE.CylinderGeometry(1,0.2,4,10);
var material05 = new THREE.MeshLambertMaterial(
    {
        color:0x5c3a21,
        flatShading: true
    }
);
var mesh05 = new THREE.Mesh(antorcha,material05);
//scene.add(mesh05);
mesh05.position.set(10,2,0);

var fuegoan = new THREE.OctahedronGeometry(1.5,0);
var materialan = new THREE.MeshStandardMaterial(
    {
        color:0xffd000,
        flatShading: true
    }
);
var meshan = new THREE.Mesh(fuegoan,materialan);
//scene.add(meshan);
meshan.position.set(10,4.8,0);

var pL1 = new THREE.PointLight(0xFF7700, 5, 10,);
pL1.position.set(8, 4.8, 0);
//scene.add(pL1);

var pL2 = new THREE.PointLight(0xFF7700, 5, 10,);
pL2.position.set(12,4.8,0);
//scene.add(pL2);

const antor = new THREE.Group();
antor.add (mesh05, meshan, pL1, pL2);
antor.position.set(x,y,z);
return antor;
}