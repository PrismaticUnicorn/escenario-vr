import * as THREE from "../js/three.module.js";
export default function E12 ({x, y, z}){

// 1. CERA
    var geometry01 = new THREE.CylinderGeometry(2, 2, 10, 32);
    var matVela01 = new THREE.MeshLambertMaterial({
        color: 0xFFF8DC,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh01 = new THREE.Mesh(geometry01, matVela01);
    mesh01.position.set(0, 5, 0);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    // 2. MECHA
    var geometry02 = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
    var matVela02 = new THREE.MeshLambertMaterial({
        color: 0x111111,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh02 = new THREE.Mesh(geometry02, matVela02);
    mesh02.position.set(0, 10.5, 0);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    // 3. LLAMA
    var geometry03 = new THREE.ConeGeometry(0.6, 1.8, 16);
    var matVela03 = new THREE.MeshLambertMaterial({
        color: 0xff6600,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh03 = new THREE.Mesh(geometry03, matVela03);
    mesh03.position.set(0, 11.6, 0);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    var pL2 = new THREE.PointLight(0xFF7700, 15, 10,);
pL2.position.set(0,13,0);
//scene.add(pL2);

const vela = new THREE.Group();
vela.add (mesh01, mesh02, mesh03, pL2);
vela.position.set(x,y,z);
return vela;
}