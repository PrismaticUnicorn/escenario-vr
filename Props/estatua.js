
 // ESTATUA DE MICTLANTECUHTLI 

 import * as THREE from "../js/three.module.js";
export default function E06 ({x, y, z}){

    //Cabeza
    var  cabezaEstatua = new THREE.SphereGeometry(3, 8, 10);
    var  matEstatua01 = new THREE.MeshLambertMaterial({
    color: 0xCFBCA3,
    flatShading: true 
    });
    var mesh01 = new THREE.Mesh(cabezaEstatua,matEstatua01);
    mesh01.position.set(3.5, 14.7, 7.0);
    mesh01.scale.set(0.7, 0.84, 0.7);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    //Cuerpo
    var  cabezaEstatua = new THREE.SphereGeometry(5, 8, 10);
    var  matEstatua02 = new THREE.MeshLambertMaterial({
    color: 0xCFBCA3,
    flatShading: true 
    });
    var mesh02 = new THREE.Mesh(cabezaEstatua,matEstatua02);
    mesh02.position.set(3.5, 3.5, 7.0);
    mesh02.scale.set(0.7, 2.1, 0.7);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    // Piernas
    var  piernasEstatua = new THREE.SphereGeometry(4, 8, 10);
    var  matEstatua03 = new THREE.MeshLambertMaterial({
    color: 0xCFBCA3,
    flatShading: true 
    });

    var mesh03 = new THREE.Mesh(piernasEstatua,matEstatua03);
    mesh03.position.set(3.5, 3.5, 9.45);
    mesh03.scale.set(0.7, 1.4, 0.7);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    //Manos
    var  manosEstatua = new THREE.SphereGeometry(1.3, 8, 8);
    var  matEstatua04 = new THREE.MeshLambertMaterial({
    color: 0xCFBCA3,
    flatShading: true 
    });
    var mesh04 = new THREE.Mesh(manosEstatua,matEstatua04);
    mesh04.position.set(3.5, 9.8, 9.31);
    mesh04.scale.set(2.45, 0.7, 0.7);
    mesh04.castShadow = true;
    //scene.add(mesh04);

    // Anillo Base del Penacho
    var  anilloPenacho1 = new THREE.TorusGeometry(3.2, 0.4, 6, 8);
    var  matPlumaAmarilla1 = new THREE.MeshLambertMaterial({
    color: 0xDEBD35,
    flatShading: true 
    });
    var mesh05 = new THREE.Mesh(anilloPenacho1,matPlumaAmarilla1);
    mesh05.position.set(3.5, 15.4, 7.0);
    mesh05.scale.set(0.7, 0.7, 0.7);
    mesh05.castShadow = true;
    //scene.add(mesh05);

    // Anillo Superior
    var  anilloPenacho2 = new THREE.TorusGeometry(3.8, 0.4, 6, 8);
    var  matPlumaAmarilla2 = new THREE.MeshLambertMaterial({
    color: 0xDEBD35,
    flatShading: true 
    });
    var mesh06 = new THREE.Mesh(anilloPenacho2,matPlumaAmarilla2);
    mesh06.position.set(3.5, 15.54, 7.0);
    mesh06.scale.set(0.7, 0.7, 0.7);
    mesh06.castShadow = true;
    //scene.add(mesh06);

    //Aretes
    var esferaAreteIzq = new THREE.SphereGeometry(0.5, 6, 6);
    var  matPlumaAmarilla3 = new THREE.MeshLambertMaterial({
    color: 0xDEBD35,
    flatShading: true 
    });
    var mesh07 = new THREE.Mesh(esferaAreteIzq,matPlumaAmarilla3);
    mesh07.position.set(5.74, 13.86, 7.0);
    mesh07.scale.set(1.4, 1.75, 0.7);
    mesh07.castShadow = true;
    //scene.add(mesh07);

    var esferaAreteDer = new THREE.SphereGeometry(0.5, 6, 6);
    var  matPlumaAmarilla4 = new THREE.MeshLambertMaterial({
    color: 0xDEBD35,
    flatShading: true 
    });
    var mesh08 = new THREE.Mesh(esferaAreteDer,matPlumaAmarilla4);
    mesh08.position.set(1.26, 13.86, 7.0);
    mesh08.scale.set(1.4, 1.75, 0.7);
    mesh08.castShadow = true;
    //scene.add(mesh08);

const estatua = new THREE.Group();
estatua.add (mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08);
estatua.position.set(x,y,z);
return estatua;
}