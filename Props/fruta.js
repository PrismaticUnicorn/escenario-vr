import * as THREE from "../js/three.module.js";
export default function E14 ({x, y, z}){

//Primera Esfera
var sphereGeo01 = new THREE.SphereGeometry(2);
var sphereMat01 = new THREE.MeshBasicMaterial
({
    color:0xff6600,
    side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(sphereGeo01,sphereMat01);
//scene.add(mesh01);
mesh01.position.set(-1.8, 2, 1.04)

//Segunda Esfera
var sphereGeo02 = new THREE.SphereGeometry(2);
var sphereMat02 = new THREE.MeshBasicMaterial
({
    color:0xff6600,
    side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(sphereGeo02,sphereMat02);
//scene.add(mesh02);
mesh02.position.set(1.8, 2, 1.04)

//Tercera Esfera
var sphereGeo03 = new THREE.SphereGeometry(2);
var sphereMat03 = new THREE.MeshBasicMaterial
({
    color:0xff6600,
    side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(sphereGeo03,sphereMat03);
//scene.add(mesh03);
mesh03.position.set(0, 2, -2.08)

//Cuarta Esfera
var sphereGeo04 = new THREE.SphereGeometry(2);
var sphereMat04 = new THREE.MeshBasicMaterial
({
    color:0xff6600,
    side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(sphereGeo04,sphereMat04);
//scene.add(mesh04);
mesh04.position.set(0, 4.5, 0)

//Bowl
var bowlGeo = new THREE.CylinderGeometry(6,2,2);
var bowlMat = new THREE.MeshBasicMaterial
({
    color:0xdddddd,
    side:THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(bowlGeo,bowlMat);
//scene.add(mesh05);
mesh05.position.set(0, 0, 0)

const fruta = new THREE.Group();
fruta.add (mesh01, mesh02, mesh03, mesh04, mesh05);
fruta.position.set(x,y,z);
return fruta;
}