import * as THREE from "../js/three.module.js";
export default function E20 ({x, y, z}){

var geometry01 = new THREE.SphereGeometry(3, 10, 10);
    var matFlor01 = new THREE.MeshLambertMaterial({
        color: 0xD2691E,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh01 = new THREE.Mesh(geometry01, matFlor01);
    mesh01.position.set(0, 4.2, 0);
    mesh01.castShadow = true;
    //scene.add(mesh01);

//Cuello
    var CuellBo = new THREE.CylinderGeometry(2.5, 2, 2, 10, 10, true);
    var matBotella03 = new THREE.MeshLambertMaterial({
    color: 0xD2691E,
    side: THREE.DoubleSide,
    flatShading: true
     
    });
var mesh02 = new THREE.Mesh(CuellBo, matBotella03);
    mesh02.position.set(0, 7, 0);
    mesh02.scale.y = 1.2;
    mesh02.castShadow = true;
    //scene.add(mesh02);

//asa
    var Asa = new THREE.TorusGeometry(1.5);
    var AsaMat = new THREE.MeshLambertMaterial({
    color: 0xD2691E,
    side: THREE.DoubleSide,
    flatShading: true 
    });
var mesh03 = new THREE.Mesh(Asa, AsaMat);
    mesh03.position.set(-2.9, 4.8, 0);
    mesh03.scale.y = 1.2;
    mesh03.castShadow = true;
    //scene.add(mesh03);

//pulque
    var Pulque = new THREE.CylinderGeometry(2.3, 1, 1, 10);
    var PulMat = new THREE.MeshLambertMaterial({
    color: 0xF5E6B3,
    side: THREE.DoubleSide,
    flatShading: true 
    });
var mesh04 = new THREE.Mesh(Pulque, PulMat);
    mesh04.position.set(0, 7, 0);
    mesh04.scale.y = 1.2;
    mesh04.castShadow = true;
    //scene.add(mesh04);

//Decoración
 
var Flor1 = new THREE.SphereGeometry(0.4, 10, 10);
    var matFlor01 = new THREE.MeshLambertMaterial({
        color:0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh05 = new THREE.Mesh(Flor1, matFlor01);
    mesh05.position.set(0, 4, 2.8);
    mesh05.castShadow = true;
    //scene.add(mesh05);

var Flor2 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor02 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh06 = new THREE.Mesh(Flor2, matFlor02);
    mesh06.position.set(0, 4.75, 2.8);
    mesh06.castShadow = true;
    //scene.add(mesh06);

var Flor3 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor03 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh07 = new THREE.Mesh(Flor3, matFlor03);
    mesh07.position.set(0, 3.25, 2.8);
    mesh07.castShadow = true;
    //scene.add(mesh07);

var Flor4 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor04 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh08 = new THREE.Mesh(Flor4, matFlor04);
    mesh08.position.set(0.75, 4, 2.8);
    mesh08.castShadow = true;
    //scene.add(mesh08);

var Flor5 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor05 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh09 = new THREE.Mesh(Flor5, matFlor05);
    mesh09.position.set(-0.75, 4, 2.8);
    mesh09.castShadow = true;
    //scene.add(mesh09);

    //Decoracion de atras
    var Flor6 = new THREE.SphereGeometry(0.4, 10, 10);
    var matFlor06 = new THREE.MeshLambertMaterial({
        color:0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh10 = new THREE.Mesh(Flor6, matFlor06);
    mesh10.position.set(0, 4, -2.8);
    mesh10.castShadow = true;
    //scene.add(mesh10);

var Flor7 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor07 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh11 = new THREE.Mesh(Flor7, matFlor07);
    mesh11.position.set(0, 4.75, -2.8);
    mesh11.castShadow = true;
    //scene.add(mesh11);

var Flor8 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor08 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh12 = new THREE.Mesh(Flor8, matFlor08);
    mesh12.position.set(0, 3.25, -2.8);
    mesh12.castShadow = true;
    //scene.add(mesh12);

var Flor9 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor09 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh13 = new THREE.Mesh(Flor9, matFlor09);
    mesh13.position.set(0.75, 4, -2.8);
    mesh13.castShadow = true;
    //scene.add(mesh13);

var Flor10 = new THREE.SphereGeometry(0.3, 10, 10);
    var matFlor10 = new THREE.MeshLambertMaterial({
        color: 0x000080,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh14 = new THREE.Mesh(Flor10, matFlor10);
    mesh14.position.set(-0.75, 4, -2.8);
    mesh14.castShadow = true;
    //scene.add(mesh14);   

    const monolito = new THREE.Group();
    monolito.add (mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13, mesh14);
    monolito.position.set(x,y,z);
    return monolito;
    }