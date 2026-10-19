
    // FANTASMA

import * as THREE from "../js/three.module.js";
export default function E05 ({x, y, z}){

    var  cabezaFantasma = new THREE.SphereGeometry(2.5, 8, 6);
    var  matFantasma1 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh01 = new THREE.Mesh(cabezaFantasma,matFantasma1);
    mesh01.position.set(-20, 22, 0);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    // TORSO SUPERIOR 
    var  torsoAlto = new THREE.SphereGeometry(3.5, 8, 6);
    var  matFantasma2 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh02 = new THREE.Mesh(torsoAlto,matFantasma2);
    mesh02.position.set(-20, 16.4, 0);
    mesh02.scale.set(1.2, 1.0, 0.6);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    // CADERA TORSO INFERIOR 
    var  cuerpoFantasma = new THREE.SphereGeometry(3, 8, 6);
    var  matFantasma3 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh03 = new THREE.Mesh(cuerpoFantasma,matFantasma3);
    mesh03.position.set(-20, 13.5, 0);
    mesh03.scale.set(1.1, 1.8, 0.6);
    mesh03.castShadow = true;
    //scene.add(mesh03);    

    // ANTEBRAZO IZQUIERDO 
    var  antebrazoF1 = new THREE.SphereGeometry(1.4, 8, 5);
    var  matFantasma4 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh04 = new THREE.Mesh(antebrazoF1,matFantasma4);
    mesh04.position.set(-23.8, 16, 0);
    mesh04.scale.set(0.8, 2.3, 0.8);
    mesh04.castShadow = true;
    //scene.add(mesh04);    

    // BRAZO IZQUIERDO 
    var  brazoF1 = new THREE.SphereGeometry(1.2, 6, 5);
    var  matFantasma5 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh05 = new THREE.Mesh(brazoF1,matFantasma5);
    mesh05.position.set(-24.5, 12.5, 0.8);
    mesh05.scale.set(0.7, 2.8, 0.7);
    mesh05.castShadow = true;
    //scene.add(mesh05);

    // ANTEBRAZO DERECHO 
    var  antebrazoF2 = new THREE.SphereGeometry(1.4, 8, 5);
    var  matFantasma6 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh06 = new THREE.Mesh(antebrazoF2,matFantasma6);
    mesh06.position.set(-16.2, 16.5, 0);
    mesh06.scale.set(0.8, 2.3, 0.8);
    mesh06.castShadow = true;
    //scene.add(mesh06);
    
    // BRAZO DERECHO 
    var  brazoF2 = new THREE.SphereGeometry(1.2, 6, 5);
    var  matFantasma6 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh07 = new THREE.Mesh(brazoF2,matFantasma6);
    mesh07.position.set(-15.5, 12.5, 0.8);
    mesh07.scale.set(0.7, 2.8, 0.7);
    mesh07.castShadow = true;
    //scene.add(mesh07);

    //  PIERNA IZQUIERDA
    var  pieF1 = new THREE.SphereGeometry(1.8, 6, 5);
    var  matFantasma6 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh08 = new THREE.Mesh(pieF1,matFantasma6);
    mesh08.position.set(-21.5, 6, 0);
    mesh08.scale.set(0.8, 3.3, 0.8);
    mesh08.castShadow = true;
    //scene.add(mesh08);

    //  PIERNA DERECHA
    var  pieF2 = new THREE.SphereGeometry(1.8, 6, 5);
    var  matFantasma6 = new THREE.MeshLambertMaterial({
    color: 0xCFFFEF,
    transparent:true,
    opacity:0.3,
    flatShading: true 
    });
    var mesh09 = new THREE.Mesh(pieF2,matFantasma6);
    mesh09.position.set(-18.5, 6, 1);
    mesh09.scale.set(0.8, 3.3, 0.8);
    mesh09.castShadow = true;
   // scene.add(mesh09);

const fant = new THREE.Group();
fant.add (mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09);
fant.position.set(x,y,z);
return fant;
}