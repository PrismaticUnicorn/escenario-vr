
// 3. PAPEL PICADO

import * as THREE from "../js/three.module.js";
export default function E11 ({x, y, z}){

// cordon
var geoCordon = new THREE.BoxGeometry(10.8, 0.025, 0.025);
var matCordon = new THREE.MeshLambertMaterial({ color: 0xe8dcc4, flatShading: true });
var cordon = new THREE.Mesh(geoCordon, matCordon);
cordon.position.set(-1, 7.2, -3); 
//scene.add(cordon);

// geometrias base para los papeles
var geoPapel = new THREE.BoxGeometry(1.6, 2.0, 0.02);
var geoPico = new THREE.ConeGeometry(0.26, 0.4, 4);

// materiales
var matNaranja = new THREE.MeshLambertMaterial({ color: 0xee8526, flatShading: true });
var matRosa = new THREE.MeshLambertMaterial({ color: 0xc94782, flatShading: true });
var matMorado = new THREE.MeshLambertMaterial({ color: 0x8959b8, flatShading: true });
var matAmarillo = new THREE.MeshLambertMaterial({ color: 0xefc63e, flatShading: true });
var matTeal = new THREE.MeshLambertMaterial({ color: 0x32aaa2, flatShading: true });


// papel 1 naranja
var papel1 = new THREE.Mesh(geoPapel, matNaranja);
papel1.position.set(-5, 6.2, -3);
papel1.rotation.x = 0.04; // pequeña inclinacion
//scene.add(papel1);

var pico1a = new THREE.Mesh(geoPico, matNaranja);
pico1a.position.set(-5.5, 5.2, -3);
pico1a.rotation.z = 3.14; // voltea el cono hacia abajo
pico1a.rotation.y = 0.785; // lo gira para que parezca rombo
//scene.add(pico1a);

var pico1b = new THREE.Mesh(geoPico, matNaranja);
pico1b.position.set(-5, 5.2, -3);
pico1b.rotation.z = 3.14;
pico1b.rotation.y = 0.785;
//scene.add(pico1b);

var pico1c = new THREE.Mesh(geoPico, matNaranja);
pico1c.position.set(-4.5, 5.2, -3);
pico1c.rotation.z = 3.14;
pico1c.rotation.y = 0.785;
//scene.add(pico1c);


// papel 2 rosa
var papel2 = new THREE.Mesh(geoPapel, matRosa);
papel2.position.set(-3, 6.2, -3);
papel2.rotation.x = 0.04;
//scene.add(papel2);

var pico2a = new THREE.Mesh(geoPico, matRosa);
pico2a.position.set(-3.5, 5.2, -3);
pico2a.rotation.z = 3.14;
pico2a.rotation.y = 0.785;
//scene.add(pico2a);

var pico2b = new THREE.Mesh(geoPico, matRosa);
pico2b.position.set(-3, 5.2, -3);
pico2b.rotation.z = 3.14;
pico2b.rotation.y = 0.785;
//scene.add(pico2b);

var pico2c = new THREE.Mesh(geoPico, matRosa);
pico2c.position.set(-2.5, 5.2, -3);
pico2c.rotation.z = 3.14;
pico2c.rotation.y = 0.785;
//scene.add(pico2c);


// papel 3 morado
var papel3 = new THREE.Mesh(geoPapel, matMorado);
papel3.position.set(-1, 6.2, -3);
papel3.rotation.x = 0.04;
//scene.add(papel3);

var pico3a = new THREE.Mesh(geoPico, matMorado);
pico3a.position.set(-1.5, 5.2, -3);
pico3a.rotation.z = 3.14;
pico3a.rotation.y = 0.785;
//scene.add(pico3a);

var pico3b = new THREE.Mesh(geoPico, matMorado);
pico3b.position.set(-1, 5.2, -3);
pico3b.rotation.z = 3.14;
pico3b.rotation.y = 0.785;
//scene.add(pico3b);

var pico3c = new THREE.Mesh(geoPico, matMorado);
pico3c.position.set(-0.5, 5.2, -3);
pico3c.rotation.z = 3.14;
pico3c.rotation.y = 0.785;
//scene.add(pico3c);


// papel 4 amarillo
var papel4 = new THREE.Mesh(geoPapel, matAmarillo);
papel4.position.set(1, 6.2, -3);
papel4.rotation.x = 0.04;
//scene.add(papel4);

var pico4a = new THREE.Mesh(geoPico, matAmarillo);
pico4a.position.set(0.5, 5.2, -3);
pico4a.rotation.z = 3.14;
pico4a.rotation.y = 0.785;
//scene.add(pico4a);

var pico4b = new THREE.Mesh(geoPico, matAmarillo);
pico4b.position.set(1, 5.2, -3);
pico4b.rotation.z = 3.14;
pico4b.rotation.y = 0.785;
//scene.add(pico4b);

var pico4c = new THREE.Mesh(geoPico, matAmarillo);
pico4c.position.set(1.5, 5.2, -3);
pico4c.rotation.z = 3.14;
pico4c.rotation.y = 0.785;
//scene.add(pico4c);


// papel 5 teal (verde azulado)
var papel5 = new THREE.Mesh(geoPapel, matTeal);
papel5.position.set(3, 6.2, -3);
papel5.rotation.x = 0.04;
//scene.add(papel5);

var pico5a = new THREE.Mesh(geoPico, matTeal);
pico5a.position.set(2.5, 5.2, -3);
pico5a.rotation.z = 3.14;
pico5a.rotation.y = 0.785;
//scene.add(pico5a);

var pico5b = new THREE.Mesh(geoPico, matTeal);
pico5b.position.set(3, 5.2, -3);
pico5b.rotation.z = 3.14;
pico5b.rotation.y = 0.785;
//scene.add(pico5b);

var pico5c = new THREE.Mesh(geoPico, matTeal);
pico5c.position.set(3.5, 5.2, -3);
pico5c.rotation.z = 3.14;
pico5c.rotation.y = 0.785;
//scene.add(pico5c);

const picado = new THREE.Group();
picado.add (cordon, papel1, pico1a, pico1b, pico1c, papel2, pico2a, pico2b, pico2c, papel3, pico3a, pico3b, pico3c, papel4, pico4a, pico4b, pico4c, papel5, pico5a, pico5b, pico5c);
picado.position.set(x,y,z);
return picado;
}