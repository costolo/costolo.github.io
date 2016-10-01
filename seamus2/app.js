'use strict';
//global configuration variables
window.seamusConfig = {
	gravity: {
		x: 0,
		y: -100,
		z: 0
	},
	ground: {
		restitution: 1,
		friction: 1
	},
	box: {
		restitution: 1,
		friction: 1
	},
	cubeSpawnRate: 1000
};


Physijs.scripts.worker = './physijs_worker.js';
Physijs.scripts.ammo = './ammo.js';

var initScene, render, _boxes = [],
	spawnBox, loader,
	renderer, render_stats, physics_stats, scene, ground_material, ground, light, camera;

initScene = function() {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;
	document.getElementById('viewport').appendChild(renderer.domElement);

	scene = new Physijs.Scene;
	scene.setGravity(new THREE.Vector3(
		window.seamusConfig.gravity.x,
		window.seamusConfig.gravity.y,
		window.seamusConfig.gravity.z
	));
	scene.addEventListener(
		'update',
		function() {
			scene.simulate(undefined, 1);
		}
	);

	camera = new THREE.PerspectiveCamera(
		35,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.set(60, 50, 60);
	camera.lookAt(scene.position);
	scene.add(camera);

	// Light
	light = new THREE.DirectionalLight(0xffffff);
	light.position.set(20, 40, -15);
	light.target.position.copy(scene.position);
	light.castShadow = true;
	light.shadow.camera.left = -60;
	light.shadow.camera.top = -60;
	light.shadow.camera.right = 60;
	light.shadow.camera.bottom = 60;
	light.shadow.camera.near = 20;
	light.shadow.camera.far = 200;
	light.shadow.bias = -.0001
	light.shadow.mapSize.width = light.shadow.mapSize.height = 2048;
	scene.add(light);

	// Loader
	loader = new THREE.TextureLoader();

	// Ground
	ground_material = Physijs.createMaterial(
		new THREE.MeshLambertMaterial({
			map: loader.load('assets/pic9.jpeg')
		}),
		window.seamusConfig.ground.restitution,
		window.seamusConfig.ground.friction
	);

	//ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
	//ground_material.map.repeat.set(3, 3);

	ground = new Physijs.BoxMesh(
		new THREE.BoxGeometry(10, 1, 10),
		ground_material,
		0 // mass
	);
	ground.receiveShadow = true;
	scene.add(ground);

	spawnBox();

	requestAnimationFrame(render);
	scene.simulate();
};

spawnBox = (function() {
	var box_geometry = new THREE.BoxGeometry(4, 4, 4),
		handleCollision = function(collided_with, linearVelocity, angularVelocity) {
			console.log(collided_with);
			switch (++this.collisions) {

				case 1:
					this.material.color.setHex(0xcc8855);
					break;

				case 2:
					this.material.color.setHex(0xbb9955);
					break;

				case 3:
					this.material.color.setHex(0xaaaa55);
					break;

				case 4:
					this.material.color.setHex(0x99bb55);
					break;

				case 5:
					this.material.color.setHex(0x88cc55);
					break;

				case 6:
					this.material.color.setHex(0x77dd55);
					break;
			}
		},
		createBox = function() {
			var box, material;

			material = Physijs.createMaterial(
				new THREE.MeshFaceMaterial([
					new THREE.MeshBasicMaterial({
						map: new loader.load('assets/pic1.jpeg')
					}),
					new THREE.MeshBasicMaterial({
						map: new loader.load('assets/pic2.jpeg')
					}),
					new THREE.MeshBasicMaterial({
						map: new loader.load('assets/pic8.jpeg')
					}),
					new THREE.MeshBasicMaterial({
						map: new loader.load('assets/pic4.jpeg')
					}),
					new THREE.MeshBasicMaterial({
						map: new loader.load('assets/pic5.jpeg')
					}),
					new THREE.MeshBasicMaterial({
						map: new loader.load('assets/pic6.jpeg')
					})
				]),
				window.seamusConfig.box.restitution,
				window.seamusConfig.box.friction
			);

			box = new Physijs.BoxMesh(
				box_geometry,
				material
			);

			box.collisions = 0;

			box.position.set(
				Math.random() * 15 - 7.5,
				25,
				Math.random() * 15 - 7.5
			);

			box.rotation.set(
				Math.random() * Math.PI,
				Math.random() * Math.PI,
				Math.random() * Math.PI
			);

			box.castShadow = true;
			box.addEventListener('collision', handleCollision);
			box.addEventListener('ready', spawnBox);
			scene.add(box);
		};

	return function() {
		setTimeout(createBox, window.seamusConfig.cubeSpawnRate);
	};
})();

render = function() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
};

window.onload = initScene;
