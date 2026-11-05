import * as THREE from "../js/three.module.js";
export default function E21 ({x, y, z}){

//Cuerpo del jarrón
var jarronb = new THREE.CylinderGeometry(2,3,8,10);
var mat1 = new THREE.MeshLambertMaterial({
  color: 0xf5f5dc, // beige
});
var mesh1 = new THREE.Mesh(jarronb,mat1);
mesh1.position.set(0,6,0);
mesh1.rotation.set(Math.PI/1,0,0);
//scene.add(mesh1);
mesh1.castShadow = true;

//Boca del jarrón
var boca = new THREE.CylinderGeometry(3,2,1,10);
var mat2 = new THREE.MeshLambertMaterial({
  color: 0xf5f5dc, // beige
});
var mesh2 = new THREE.Mesh(boca,mat2);
mesh2.position.set(0,10,0);
//scene.add(mesh2);
mesh2.castShadow = true;

//Base del jarrón
var base = new THREE.CylinderGeometry(3,3,1,10);
var mat3 = new THREE.MeshLambertMaterial({
  color: 0xf5f5dc, // beige
});
var mesh3 = new THREE.Mesh(base,mat3);
mesh3.position.set(0,2,0);
//scene.add(mesh3);
mesh3.castShadow = true;

//Boca oscura del jarrón
var bocaOscura = new THREE.CylinderGeometry(2.5,2.5,1.2,10);
var mat4 = new THREE.MeshLambertMaterial({
  color: 0x000000, // negro
});
var mesh4 = new THREE.Mesh(bocaOscura,mat4);
mesh4.position.set(0,10,0);
//scene.add(mesh4);
mesh4.castShadow = true;

const jarron = new THREE.Group();
jarron.add (mesh1, mesh2, mesh3, mesh4);
jarron.position.set(x,y,z);
return jarron;
}