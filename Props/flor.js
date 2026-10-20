

    // CENTRO - TorusKnot para lo rizado del cempasuchil
import * as THREE from "../js/three.module.js";
export default function E16 ({x, y, z}){

    var geometry01 = new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16, 2, 3);
    var matFlor01 = new THREE.MeshLambertMaterial({
        color: 0xE67E00,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh01 = new THREE.Mesh(geometry01, matFlor01);
    mesh01.position.set(0, 4, 0);
    mesh01.rotation.x = 1.57;
    mesh01.castShadow = true;
    //scene.add(mesh01);

    // CENTRO INTERNO
    var geometry02 = new THREE.SphereGeometry(0.6, 16, 16);
    var matFlor02 = new THREE.MeshLambertMaterial({
        color: 0x8B4513,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh02 = new THREE.Mesh(geometry02, matFlor02);
    mesh02.position.set(0, 4.2, 0);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    // PETALO 1
    var geometry03 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor03 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh03 = new THREE.Mesh(geometry03, matFlor03);
    mesh03.position.set(1.5, 4, 0);
    mesh03.rotation.set(1.25, 0, 3.1415);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    // PETALO 2
    var geometry04 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor04 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh04 = new THREE.Mesh(geometry04, matFlor04);
    mesh04.position.set(1.29, 4, 0.75);
    mesh04.rotation.set(1.25, -0.52, 3.1415);
    mesh04.castShadow = true;
    //scene.add(mesh04);

    // PETALO 3
    var geometry05 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor05 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh05 = new THREE.Mesh(geometry05, matFlor05);
    mesh05.position.set(0.75, 4, 1.29);
    mesh05.rotation.set(1.25, -1.04, 3.1415);
    mesh05.castShadow = true;
    //scene.add(mesh05);

    // PETALO 4
    var geometry06 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor06 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh06 = new THREE.Mesh(geometry06, matFlor06);
    mesh06.position.set(0, 4, 1.5);
    mesh06.rotation.set(1.25, -1.57, 3.1415);
    mesh06.castShadow = true;
    //scene.add(mesh06);

    // PETALO 5
    var geometry07 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor07 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh07 = new THREE.Mesh(geometry07, matFlor07);
    mesh07.position.set(-0.75, 4, 1.29);
    mesh07.rotation.set(1.25, -2.09, 3.1415);
    mesh07.castShadow = true;
    //scene.add(mesh07);

    // PETALO 6
    var geometry08 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor08 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh08 = new THREE.Mesh(geometry08, matFlor08);
    mesh08.position.set(-1.29, 4, 0.75);
    mesh08.rotation.set(1.25, -2.61, 3.1415);
    mesh08.castShadow = true;
    //scene.add(mesh08);

    // PETALO 7
    var geometry09 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor09 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh09 = new THREE.Mesh(geometry09, matFlor09);
    mesh09.position.set(-1.5, 4, 0);
    mesh09.rotation.set(1.25, -3.14, 3.1415);
    mesh09.castShadow = true;
    //scene.add(mesh09);

    // PETALO 8
    var geometry10 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor10 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh10 = new THREE.Mesh(geometry10, matFlor10);
    mesh10.position.set(-1.29, 4, -0.75);
    mesh10.rotation.set(1.25, -3.66, 3.1415);
    mesh10.castShadow = true;
    //scene.add(mesh10);

    // PETALO 9
    var geometry11 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor11 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh11 = new THREE.Mesh(geometry11, matFlor11);
    mesh11.position.set(-0.75, 4, -1.29);
    mesh11.rotation.set(1.25, -4.18, 3.1415);
    mesh11.castShadow = true;
    //scene.add(mesh11);

    // PETALO 10
    var geometry12 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor12 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh12 = new THREE.Mesh(geometry12, matFlor12);
    mesh12.position.set(0, 4, -1.5);
    mesh12.rotation.set(1.25, -4.71, 3.1415);
    mesh12.castShadow = true;
    //scene.add(mesh12);

    // PETALO 11
    var geometry13 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor13 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh13 = new THREE.Mesh(geometry13, matFlor13);
    mesh13.position.set(0.75, 4, -1.29);
    mesh13.rotation.set(1.25, -5.23, 3.1415);
    mesh13.castShadow = true;
    //scene.add(mesh13);

    // PETALO 12
    var geometry14 = new THREE.TorusGeometry(1.2, 0.25, 8, 20, 3.1415);
    var matFlor14 = new THREE.MeshLambertMaterial({
        color: 0xFFA500,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh14 = new THREE.Mesh(geometry14, matFlor14);
    mesh14.position.set(1.29, 4, -0.75);
    mesh14.rotation.set(1.25, -5.75, 3.1415);
    mesh14.castShadow = true;
    //scene.add(mesh14);

    // TALLO
    var geometry15 = new THREE.CylinderGeometry(0.15, 0.15, 4, 8);
    var matFlor15 = new THREE.MeshLambertMaterial({
        color: 0x2E8B57,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh15 = new THREE.Mesh(geometry15, matFlor15);
    mesh15.position.set(0, 1.5, 0);
    mesh15.castShadow = true;
    //scene.add(mesh15);

const flor = new THREE.Group();
flor.add (mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15);
flor.position.set(x,y,z);
return flor;
}