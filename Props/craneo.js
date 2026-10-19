


//Craneo

import * as THREE from "../js/three.module.js";
export default function E01 ({x, y, z}){

var cabeza = new THREE.SphereGeometry(3);
var material01 = new THREE.MeshLambertMaterial(
    {color:0xb8a99a,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var mesh01 = new THREE.Mesh(cabeza,material01);
//scene.add(mesh01);
mesh01.position.set(0,6,0);

var boca = new THREE.CylinderGeometry(2,1.5,2);
var materialc = new THREE.MeshLambertMaterial(
    {color:0xb8a99a,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc = new THREE.Mesh(boca,materialc);
//scene.add(meshc);
meshc.position.set(0,3.5,0.6);

var ojo1 = new THREE.CircleGeometry(1,15);
var materialc1 = new THREE.MeshLambertMaterial(
    {color:0x2b2625,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc1 = new THREE.Mesh(ojo1,materialc1);
meshc1.position.set(-1.2,7,2.6);
meshc1.rotation.x = THREE.MathUtils.degToRad(-20);
meshc1.rotation.y = THREE.MathUtils.degToRad(-20);
//scene.add(meshc1);

var ojo2 = new THREE.CircleGeometry(1,15);
var materialc2 = new THREE.MeshLambertMaterial(
    {color:0x2b2625,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc2 = new THREE.Mesh(ojo2,materialc2);
meshc2.position.set(1.2,7,2.6);
meshc2.rotation.x = THREE.MathUtils.degToRad(-20);
meshc2.rotation.y = THREE.MathUtils.degToRad(20);
//scene.add(meshc2);

var diente1 = new THREE.PlaneGeometry(0.5,0.7);
var materialc3 = new THREE.MeshLambertMaterial(
    {color:0xfffdf9,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc3 = new THREE.Mesh(diente1,materialc3);
meshc3.position.set(0.27,4,2.55);
meshc3.rotation.y = THREE.MathUtils.degToRad(5);
//scene.add(meshc3);

var diente2 = new THREE.PlaneGeometry(0.5,0.7);
var materialc4 = new THREE.MeshLambertMaterial(
    {color:0xfffdf9,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc4 = new THREE.Mesh(diente2,materialc4);
meshc4.position.set(-0.27,4,2.55);
meshc4.rotation.y = THREE.MathUtils.degToRad(-5);
//scene.add(meshc4);

var diente3 = new THREE.PlaneGeometry(0.5,0.7);
var materialc5 = new THREE.MeshLambertMaterial(
    {color:0xfffdf9,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc5 = new THREE.Mesh(diente3,materialc5);
meshc5.position.set(-0.8,4,2.45);
meshc5.rotation.y = THREE.MathUtils.degToRad(-15);
//scene.add(meshc5);

var diente4 = new THREE.PlaneGeometry(0.5,0.7);
var materialc6 = new THREE.MeshLambertMaterial(
    {color:0xfffdf9,
        side: THREE.DoubleSide,
        flatShading: true
    }
);
var meshc6 = new THREE.Mesh(diente4,materialc6);
meshc6.position.set(0.8,4,2.45);
meshc6.rotation.y = THREE.MathUtils.degToRad(15);
//scene.add(meshc6);

const craneo = new THREE.Group();
craneo.add (mesh01, meshc, meshc1, meshc2, meshc3, meshc4, meshc5, meshc6);
craneo.position.set(x,y,z);
return craneo;
}