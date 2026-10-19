
//tarro cerveza
import * as THREE from "../js/three.module.js";
export default function E02 ({x, y, z}){

var tarro = new THREE.CylinderGeometry(2,2,5,20,20,);
var material02 = new THREE.MeshPhysicalMaterial(
    {
    color: 0xDBD4CE,
    transmission: 1,  
    opacity: 1,      
    transparent: true,
    roughness: 0.1,  
    ior: 1.5,        
    thickness: 0.5,
    flatShading: true
    }
);
var mesh02 = new THREE.Mesh(tarro,material02);
//scene.add(mesh02);
mesh02.position.set(-10,2.5,0);

var cerveza = new THREE.CylinderGeometry(1.5,1.5,4,20);
var materialt = new THREE.MeshLambertMaterial(
    {
    color:0xf29f05,
    flatShading: true
    }
);
var mesht = new THREE.Mesh(cerveza,materialt);
//scene.add(mesht);
mesht.position.set(-10,2,0);

var espuma = new THREE.CylinderGeometry(1.5,1.5,1,20);
var materialt = new THREE.MeshLambertMaterial(
    {
    color:0xffffff,
    flatShading: true
    }
);
var meshe = new THREE.Mesh(espuma,materialt);
//scene.add(meshe);
meshe.position.set(-10,4.5,0);

var asat = new THREE.TorusGeometry(1,0.6,9,4);
var material03 = new THREE.MeshPhysicalMaterial(
    {
    color: 0xDBD4CE,
    transmission: 1,  
    opacity: 1,      
    transparent: true,
    roughness: 0.1,  
    ior: 1.5,        
    thickness: 0.5,
    flatShading: true    
    }
);
var mesh03 = new THREE.Mesh(asat,material03);
mesh03.position.set(-8,2.6,0);
mesh03.rotation.z = THREE.MathUtils.degToRad(45);
//scene.add(mesh03);

const cerv = new THREE.Group();
cerv.add (mesh02, mesht, meshe, mesh03);
cerv.position.set(x,y,z);
return cerv;
}