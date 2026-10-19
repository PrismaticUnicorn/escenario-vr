
// Candelabro colgante

import * as THREE from "../js/three.module.js";
export default function E08 ({x, y, z}){

// Materiales
var materialMetalCandelabro = new THREE.MeshLambertMaterial(
    {color: 0x303039,
        flatShading: true,
    }
);
var materialVela = new THREE.MeshLambertMaterial(
    {color: 0xe6d6b1,
        flatShading: true,
    }
);
var materialLlama = new THREE.MeshLambertMaterial(
    {color: 0xffc35b,
        flatShading: true,
    }
);

// Aro
var geometriaAro = new THREE.TorusGeometry(1.8, 0.12, 4, 6);
var aroCandelabro = new THREE.Mesh(geometriaAro, materialMetalCandelabro);
//scene.add(aroCandelabro);
aroCandelabro.rotation.set(Math.PI / 2, 0, 0);
aroCandelabro.position.set(0, 2.8, 0);

// Soporte de techo
var geometriaSoporte = new THREE.CylinderGeometry(0.35, 0.35, 0.15, 6);
var soporteTecho = new THREE.Mesh(geometriaSoporte, materialMetalCandelabro);
//scene.add(soporteTecho);
soporteTecho.position.set(0, 5.9, 0);

// Barra central
var geometriaBarraCentral = new THREE.CylinderGeometry(0.07, 0.07, 0.35, 6);
var barraCentral = new THREE.Mesh(geometriaBarraCentral, materialMetalCandelabro);
//scene.add(barraCentral);
barraCentral.position.set(0, 5.65, 0);

// Barras inclinadas
var geometriaBarraIncLarga = new THREE.CylinderGeometry(0.055, 0.055, 3.245, 5);
var geometriaBarraIncCorta = new THREE.CylinderGeometry(0.055, 0.055, 3.118, 5);

var barraInclinada1 = new THREE.Mesh(geometriaBarraIncLarga, materialMetalCandelabro);
//scene.add(barraInclinada1);
barraInclinada1.position.set(-0.9, 4.15, 0);
barraInclinada1.rotation.z = -0.588; 

var barraInclinada2 = new THREE.Mesh(geometriaBarraIncLarga, materialMetalCandelabro);
//scene.add(barraInclinada2);
barraInclinada2.position.set(0.9, 4.15, 0);
barraInclinada2.rotation.z = 0.588;

var barraInclinada3 = new THREE.Mesh(geometriaBarraIncCorta, materialMetalCandelabro);
//scene.add(barraInclinada3);
barraInclinada3.position.set(0, 4.15, -0.78);
barraInclinada3.rotation.x = 0.524; 

var barraInclinada4 = new THREE.Mesh(geometriaBarraIncCorta, materialMetalCandelabro);
//scene.add(barraInclinada4);
barraInclinada4.position.set(0, 4.15, 0.78);
barraInclinada4.rotation.x = -0.524;

// Geometrías para velas
var geometriaPlatillo = new THREE.CylinderGeometry(0.28, 0.2, 0.12, 6);
var geometriaVela = new THREE.CylinderGeometry(0.12, 0.12, 0.65, 6);
var geometriaLlama = new THREE.ConeGeometry(0.1, 0.3, 4);

// Vela 1
var platillo1 = new THREE.Mesh(geometriaPlatillo, materialMetalCandelabro);
//scene.add(platillo1);
platillo1.position.set(1.8, 2.94, 0);

var vela1 = new THREE.Mesh(geometriaVela, materialVela);
//scene.add(vela1);
vela1.position.set(1.8, 3.325, 0);

var llama1 = new THREE.Mesh(geometriaLlama, materialLlama);
//scene.add(llama1);
llama1.position.set(1.8, 3.8, 0);

// Vela 2
var platillo2 = new THREE.Mesh(geometriaPlatillo, materialMetalCandelabro);
//scene.add(platillo2);
platillo2.position.set(-1.8, 2.94, 0);

var vela2 = new THREE.Mesh(geometriaVela, materialVela);
//scene.add(vela2);
vela2.position.set(-1.8, 3.325, 0);

var llama2 = new THREE.Mesh(geometriaLlama, materialLlama);
//scene.add(llama2);
llama2.position.set(-1.8, 3.8, 0);

// Vela 3
var platillo3 = new THREE.Mesh(geometriaPlatillo, materialMetalCandelabro);
//scene.add(platillo3);
platillo3.position.set(0, 2.94, 1.56);

var vela3 = new THREE.Mesh(geometriaVela, materialVela);
//scene.add(vela3);
vela3.position.set(0, 3.325, 1.56);

var llama3 = new THREE.Mesh(geometriaLlama, materialLlama);
//scene.add(llama3);
llama3.position.set(0, 3.8, 1.56);

// Vela 4
var platillo4 = new THREE.Mesh(geometriaPlatillo, materialMetalCandelabro);
//scene.add(platillo4);
platillo4.position.set(0, 2.94, -1.56);

var vela4 = new THREE.Mesh(geometriaVela, materialVela);
//scene.add(vela4);
vela4.position.set(0, 3.325, -1.56);

var llama4 = new THREE.Mesh(geometriaLlama, materialLlama);
//scene.add(llama4);
llama4.position.set(0, 3.8, -1.56);

// Punta inferior
var geometriaPunta = new THREE.ConeGeometry(0.22, 0.55, 4);
var puntaInferior = new THREE.Mesh(geometriaPunta, materialMetalCandelabro);
//scene.add(puntaInferior);
puntaInferior.rotation.z = Math.PI;
puntaInferior.position.set(0, 2.45, 0);

// Caja central
var geometriaCaja = new THREE.BoxGeometry(3.6, 0.1, 0.1);
var cajaCentral = new THREE.Mesh(geometriaCaja, materialMetalCandelabro);
//scene.add(cajaCentral);
cajaCentral.position.set(0, 2.75, 0);

const candelabro = new THREE.Group();
candelabro.add (aroCandelabro, soporteTecho, barraCentral, barraInclinada1, barraInclinada2, barraInclinada3, barraInclinada4, platillo1, vela1, llama1, platillo2, vela2, llama2, platillo3, vela3, llama3, platillo4, vela4, llama4, puntaInferior, cajaCentral);
candelabro.position.set(x,y,z);
return candelabro;
}