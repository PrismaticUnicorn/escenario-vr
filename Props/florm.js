import * as THREE from "../js/three.module.js";
export default function E22 ({x, y, z}){


//FlorCempa
var flor1 = new THREE.TorusKnotGeometry(3,1.5,100,16,12,10);
var mat1 = new THREE.MeshPhongMaterial({
  color: 0x800080, // Morado estándar
  shininess:40,
  specular: 0x111111
});
var mesh1 = new THREE.Mesh(flor1,mat1);
mesh1.position.set(0,6,0);
mesh1.rotation.set(Math.PI/2,0,0);
//scene.add(mesh1);
mesh1.castShadow = true;

const florm = new THREE.Group();
florm.add (mesh1);
florm.position.set(x,y,z);
return florm;
}