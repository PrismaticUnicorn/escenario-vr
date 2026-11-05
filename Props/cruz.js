import * as THREE from "../js/three.module.js";
export default function E17 ({x, y, z}){
//Cruz
    var CruGeo01 = new THREE.BoxGeometry(2,8,2);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var CruMat1 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh01 = new THREE.Mesh(CruGeo01, CruMat1);
    mesh01.position.set(0, 7, 0);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    var CruGeo02 = new THREE.BoxGeometry(7,2,1.99);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var CruMat2 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh02 = new THREE.Mesh(CruGeo02, CruMat2);
    mesh02.position.set(0, 8, 0);
    mesh02.castShadow = true;
    //scene.add(mesh02);


//Incrustación
    var IncGeo01 = new THREE.BoxGeometry(0.5,8,3);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var IncMat1 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh03 = new THREE.Mesh(IncGeo01, IncMat1);
    mesh03.position.set(0, 7, 0);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    var IncGeo02= new THREE.BoxGeometry(7,0.5,2.99);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var IncMat2 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh04 = new THREE.Mesh(IncGeo02, IncMat2);
    mesh04.position.set(0, 8, 0);
    mesh04.castShadow = true;
    //scene.add(mesh04);

//Base
    var BasGeo1 = new THREE.BoxGeometry(4,1.5,4);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var BasMat01 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh05 = new THREE.Mesh(BasGeo1, BasMat01);
    mesh05.position.set(0, 2.3, 0);
    mesh05.castShadow = true;
    //scene.add(mesh05);
    
    var BasGeo2 = new THREE.BoxGeometry(6,1.5,6);
    var texture = new THREE.TextureLoader().load ("./assets/roca2.jpg");
    var BasMat02 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh06 = new THREE.Mesh(BasGeo2, BasMat02);
    mesh06.position.set(0, 0.8, 0);
    mesh06.castShadow = true;
    //scene.add(mesh06);

//Topes
    var ToGeo01 = new THREE.BoxGeometry(0.5,3,3);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var ToMat1 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh07 = new THREE.Mesh(ToGeo01,ToMat1);
    mesh07.position.set(3.79, 8, 0);
    mesh07.castShadow = true;
    //scene.add(mesh07);

    var ToGeo02 = new THREE.BoxGeometry(0.5,3,3);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var ToMat2 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh08 = new THREE.Mesh(ToGeo02,ToMat2);
    mesh08.position.set(-3.79, 8, 0);
    mesh08.castShadow = true;
    //scene.add(mesh08);

    var ToGeo03 = new THREE.BoxGeometry(3,0.5,3);
    var texture = new THREE.TextureLoader().load ("./assets/roca3.jpg");
    var ToMat3 =new THREE.MeshLambertMaterial({
        map:texture,
        side: THREE.DoubleSide,
        flatShading: true
    });
    var mesh09 = new THREE.Mesh(ToGeo03,ToMat3);
    mesh09.position.set(0, 11.25, 0);
    mesh09.castShadow = true;
    //scene.add(mesh09);

const cruz = new THREE.Group();
cruz.add (mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09);
cruz.position.set(x,y,z);
return cruz;
}