import * as THREE from "../js/three.module.js";
export default function E19 ({x, y, z}){

//piramide
    var PirGeo = new THREE.ConeGeometry(2.13,2,4);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var PirMat =new THREE.MeshLambertMaterial({map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh01 = new THREE.Mesh(PirGeo, PirMat);
    mesh01.position.set(0, 8.5, 0);
    mesh01.castShadow = true;
    //scene.add(mesh01);
    mesh01.rotation.y += Math.PI / 4;

//Cuerpo
    var CueGeo = new THREE.BoxGeometry(3,7,3);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var CueMat =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh02 = new THREE.Mesh(CueGeo, CueMat);
    mesh02.position.set(0, 4, 0);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    //Base
    var BasGeo1 = new THREE.BoxGeometry(4,2,4);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var BasMat01 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh03 = new THREE.Mesh(BasGeo1, BasMat01);
    mesh03.position.set(0, 1, 0);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    var BasGeo2 = new THREE.BoxGeometry(5,0.5,5);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var BasMat02 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh04 = new THREE.Mesh(BasGeo2, BasMat02);
    mesh04.position.set(0, 0.2, 0);
    mesh04.castShadow = true;
    //scene.add(mesh04);

    var BasGeo3 = new THREE.BoxGeometry(5,0.5,5);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var BasMat03 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh05 = new THREE.Mesh(BasGeo3, BasMat03);
    mesh05.position.set(0, 1.8, 0);
    mesh05.castShadow = true;
    //scene.add(mesh05);

    const monolito = new THREE.Group();
    monolito.add (mesh01, mesh02, mesh03, mesh04, mesh05);
    monolito.position.set(x,y,z);
    return monolito;
    }