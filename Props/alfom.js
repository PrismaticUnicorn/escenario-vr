import * as THREE from "../js/three.module.js";
export default function E23 ({x, y, z}){


//Alfombra
var alfombra = new THREE.BoxGeometry(10, 0.1, 20);
var mat1 = new THREE.MeshBasicMaterial({
  color: 0x8B4513, //marron
});
var mesh1 = new THREE.Mesh(alfombra, mat1);
mesh1.position.set(0, 0.1, 0);
//scene.add(mesh1);
mesh1.castShadow = true;

//Contorno
var alfombra2 = new THREE.BoxGeometry(10.5, 0.1, 20.5);
var mat2 = new THREE.MeshBasicMaterial({
  color: 0x654321, //marron oscuro
});
var mesh2 = new THREE.Mesh(alfombra2, mat2);
mesh2.position.set(0, 0, 0);
//scene.add(mesh2);
mesh2.castShadow = true;

//Rayas de la alfombra

//Raya 1
var raya1 = new THREE.BoxGeometry(10, 0.1, 0.5);
var ray1 = new THREE.MeshBasicMaterial({
  color: 0xD2B48C, //marron claro
});
var raya01 = new THREE.Mesh(raya1, ray1);
raya01.position.set(0, 0.12, 8);
//scene.add(raya01);
raya01.castShadow = true;

//Raya 2
var raya2 = new THREE.BoxGeometry(10, 0.1, 0.5);
var ray2 = new THREE.MeshBasicMaterial({
  color: 0xD2B48C, //marron claro
});
var raya02 = new THREE.Mesh(raya2, ray2);
raya02.position.set(0, 0.12, -8);
//scene.add(raya02);
raya02.castShadow = true;

//Raya 3
var raya3 = new THREE.BoxGeometry(10, 0.1, 0.5);
var ray3 = new THREE.MeshBasicMaterial({
  color: 0xD2B48C, //marron claro
});
var raya03 = new THREE.Mesh(raya3, ray3);
raya03.position.set(0, 0.12, 6);
//scene.add(raya03);
raya03.castShadow = true;

//Raya 4
var raya4 = new THREE.BoxGeometry(10, 0.1, 0.5);
var ray4 = new THREE.MeshBasicMaterial({
  color: 0xD2B48C, //marron claro
});
var raya04 = new THREE.Mesh(raya4, ray4);
raya04.position.set(0, 0.12, -6);
//scene.add(raya04);
raya04.castShadow = true;

const alfom = new THREE.Group();
alfom.add (mesh1, mesh2, raya01, raya02, raya03, raya04);
alfom.position.set(x,y,z);
return alfom;
}