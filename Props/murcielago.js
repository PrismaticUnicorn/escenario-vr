    //MURCIÉLAGO
    //CUERPO

import * as THREE from "../js/three.module.js";
export default function E07 ({x, y, z}){

    var  cuerpoMur = new THREE.SphereGeometry(2.1, 8, 6);
    var  matMurcielago1 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh01 = new THREE.Mesh(cuerpoMur,matMurcielago1);
    mesh01.position.set(0, 9.0, 0);
    mesh01.scale.set(0.8, 1.5, 0.7);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    //  ALA IZQUIERDA
    var  alaIzq = new THREE.BoxGeometry(4.2, 0.36, 0.3);
    var  matMurcielago2 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh02 = new THREE.Mesh(alaIzq,matMurcielago2);
    mesh02.position.set(-1.92, 10.8, 0);
    mesh02.rotation.z = -1.35;
    mesh02.scale.set(1, 1.8, 1);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    //  ALA DERECHA
    var  alaDer = new THREE.BoxGeometry(4.2, 0.36, 0.3);
    var  matMurcielago3 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh03 = new THREE.Mesh(alaDer,matMurcielago3);
    mesh03.position.set(1.92, 10.8, 0);
    mesh03.rotation.z = 1.35;
    mesh03.scale.set(1, 1.8, 1);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    //  CABEZA
    var  alaDer = new THREE.SphereGeometry(1.32, 8, 6);
    var  matMurcielago4 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh04 = new THREE.Mesh(alaDer,matMurcielago4);
    mesh04.position.set(0, 6.6, 0);
    mesh04.scale.set(1, 0.9, 0.8);
    mesh04.castShadow = true;
    //scene.add(mesh04);

    //OREJAS
    //IZQUIERDA
    var  orejaIzq = new THREE.ConeGeometry(0.78, 2.4, 4);
    var  matMurcielago5 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh05 = new THREE.Mesh(orejaIzq,matMurcielago5);
    mesh05.position.set(-0.72, 5.4, 0);
    mesh05.rotation.x = Math.PI;
    mesh05.rotation.z = 0.10;
    mesh05.scale.set(1, 0.9, 0.8);
    mesh05.castShadow = true;
    //scene.add(mesh05); 

    //DERECHA
    var  orejaDer = new THREE.ConeGeometry(0.78, 2.4, 4);
    var  matMurcielago6 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh06 = new THREE.Mesh(orejaDer,matMurcielago6);
    mesh06.position.set(0.72, 5.4, 0);
    mesh06.rotation.x = Math.PI;
    mesh06.rotation.z = -0.10;
    mesh06.scale.set(1, 0.9, 0.8);
    mesh06.castShadow = true;
    //scene.add(mesh06); 

    //COLA
    var  colaMur = new THREE.ConeGeometry(0.9, 3.6, 4);
    var  matMurcielago7 = new THREE.MeshLambertMaterial({
    color: 0x170021,
    flatShading: true 
    });
    var mesh07 = new THREE.Mesh(colaMur,matMurcielago7);
    mesh07.position.set(0, 12.3,0);
    mesh07.castShadow = true;
    //scene.add(mesh07); 

    //OJOS
    var  ojo1 = new THREE.SphereGeometry(0.3, 6, 4);
    var  matOjos = new THREE.MeshLambertMaterial({
    color: 0xD49698,
    flatShading: true 
    });
    var mesh08 = new THREE.Mesh(ojo1,matOjos);
    mesh08.position.set(0.6, 6.6, 0.9);
    mesh08.scale.set(1, 0.4, 0.8);
    mesh08.castShadow = true;
    //scene.add(mesh08); 
    
    var  ojo2 = new THREE.SphereGeometry(0.3, 6, 4);
    var  matOjos2 = new THREE.MeshLambertMaterial({
    color: 0xD49698,
    flatShading: true 
    });
    var mesh09 = new THREE.Mesh(ojo2,matOjos2);
    mesh09.position.set(-0.6, 6.6, 0.9);
    mesh09.scale.set(1, 0.4, 0.8);
    mesh09.castShadow = true;
    //scene.add(mesh09); 

const murcielago = new THREE.Group();
murcielago.add (mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09);
murcielago.position.set(x,y,z);
return murcielago;
}