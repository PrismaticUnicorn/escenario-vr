
//side: THREE.DoubleSide,

    //Botella

import * as THREE from "../js/three.module.js";
export default function E09 ({x, y, z}){

    var geometry01 = new THREE.CylinderGeometry(1, 1.6, 2, 8);
    var matBotella01 = new THREE.MeshLambertMaterial({
    color: 0x0B540C,
    transparent:true,
    opacity:0.7, 
    flatShading: true 
    });

    var mesh01 = new THREE.Mesh(geometry01, matBotella01);
    mesh01.position.set(15, 5, 0);
    mesh01.scale.set(1.2, 1.8, 1.2);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    //CuerpoBotella
    var CuerBo = new THREE.CylinderGeometry(1.5, 1.5, 5, 8);
    var matBotella02 = new THREE.MeshLambertMaterial({
    color: 0x0B540C,
    transparent:true,
    opacity:0.7, 
    flatShading: true 
    });

    var mesh02 = new THREE.Mesh(CuerBo, matBotella02);
    mesh02.position.set(15, 7, 0);
    mesh02.scale.y = 1.2;
    mesh02.castShadow = true;
    //scene.add(mesh02);

     //Cuello
    var CuellBo = new THREE.CylinderGeometry(1, 1, 2, 8);
    var matBotella03 = new THREE.MeshLambertMaterial({
    color: 0x0B540C,
    transparent:true,
    opacity:0.7, 
    flatShading: true 
    });

    var mesh03 = new THREE.Mesh(CuellBo, matBotella03);
    mesh03.position.set(15, 11, 0);
    mesh03.scale.set(0.8, 1, 0.8);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    //Etiqueta
    var EtiGeo = new THREE.CylinderGeometry(1.6, 1.6, 2.5, 8);
    var matEtiqueta = new THREE.MeshLambertMaterial({
    color: 0xEEF5E9,
    flatShading: true 
    });

    var mesh04 = new THREE.Mesh(EtiGeo, matEtiqueta);
    mesh04.position.set(15, 7, 0);
    mesh04.scale.set = 12;
    mesh04.castShadow = true;
    //scene.add(mesh04);

    //Tapon
    var TaGeo = new THREE.CylinderGeometry(0.7, 0.7, 1, 8);
    var matTapon = new THREE.MeshLambertMaterial({
    color: 0x946801,
    flatShading: true 
    });

    var mesh05 = new THREE.Mesh(TaGeo, matTapon);
    mesh05.position.set(15, 12, 0);
    mesh05.scale.set(0.8, 1, 0.8);
    mesh05.castShadow = true;
    //scene.add(mesh05);

const botella = new THREE.Group();
botella.add (mesh01, mesh02, mesh03, mesh04, mesh05);
botella.position.set(x,y,z);
return botella;
}