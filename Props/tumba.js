import * as THREE from "../js/three.module.js";
export default function E18 ({x, y, z}){

//Cuerpo
    var CueGeo = new THREE.BoxGeometry(5,8,1.5);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var CueMat =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh01 = new THREE.Mesh(CueGeo, CueMat);
    mesh01.position.set(0, 5.5, 0);
    mesh01.castShadow = true;
    //scene.add(mesh01);
//Marco
 var MarGeo1 = new THREE.BoxGeometry(6,1.5,2.5);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var MarMat01 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh02 = new THREE.Mesh(MarGeo1, MarMat01);
    mesh02.position.set(0, 10, 0);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    var MarGeo2= new THREE.BoxGeometry(3,1.5,2.1);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var MarMat02 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh03 = new THREE.Mesh(MarGeo2, MarMat02);
    mesh03.position.set(3.4, 9.2, 0);
    mesh03.castShadow = true;
    mesh03.rotation.z -=0.9;
    //scene.add(mesh03);

    var MarGeo2= new THREE.BoxGeometry(3,1.5,2.1);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var MarMat02 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh04 = new THREE.Mesh(MarGeo2, MarMat02);
    mesh04.position.set(-3.4, 9.2, 0);
    mesh04.castShadow = true;
    mesh04.rotation.z +=0.9;
    //scene.add(mesh04);

//Base
    var MarGeo2= new THREE.BoxGeometry(7,1.5,3);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var MarMat02 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh05 = new THREE.Mesh(MarGeo2, MarMat02);
    mesh05.position.set(0, 0.8, 0);
    mesh05.castShadow = true;
    //scene.add(mesh05);

    const tumba = new THREE.Group();
    tumba.add (mesh01, mesh02, mesh03, mesh04, mesh05);
    tumba.position.set(x,y,z);
    return tumba;
    }