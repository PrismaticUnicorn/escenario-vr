// Tazón
// Materiales

import * as THREE from "../js/three.module.js";
export default function E10 ({x, y, z}){

var matTazon = new THREE.MeshLambertMaterial(
    {color: 0x8b5a2b, 
        flatShading: true,
    }
);

var matManzana = new THREE.MeshLambertMaterial(
    {color: 0xd92b2b, 
        flatShading: true,
    }
);

var matNaranja = new THREE.MeshLambertMaterial(
    {color: 0xf28500, 
        flatShading: true,
    }
);

var matPlatano = new THREE.MeshLambertMaterial(
    {color: 0xe5e045, 
        flatShading: true,
    }
);

// Geometría y Mesh del Tazón
var geoTazon = new THREE.CylinderGeometry(2.5, 1.5, 1.2, 12);
var tazon = new THREE.Mesh(geoTazon, matTazon);
//scene.add(tazon);
tazon.position.set(0, 0.6, 0);

// Geometría y Mesh de la Manzana
var geoManzana = new THREE.SphereGeometry(0.7, 8, 8);
var manzana = new THREE.Mesh(geoManzana, matManzana);
//scene.add(manzana);
manzana.position.set(0.6, 1.5, 0.5);

// Geometría y Mesh de la Naranja
var geoNaranja = new THREE.SphereGeometry(0.75, 8, 8);
var naranja = new THREE.Mesh(geoNaranja, matNaranja);
//scene.add(naranja);
naranja.position.set(-0.7, 1.5, -0.3);

// Geometría y Mesh del Plátano (Cilindro delgado y alargado)
var geoPlatano = new THREE.CylinderGeometry(0.18, 0.18, 2.0, 6);
var platano = new THREE.Mesh(geoPlatano, matPlatano);
//scene.add(platano);
platano.position.set(0.2, 1.8, -0.8);
platano.rotation.z = 1.57;
platano.rotation.y = 0.5;  

const bowl = new THREE.Group();
bowl.add (tazon, manzana, naranja, platano);
bowl.position.set(x,y,z);
return bowl;
}