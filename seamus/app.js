var t = THREE;
var scene = new t.Scene();
var camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var seamuses = new t.MeshFaceMaterial([
	new t.MeshBasicMaterial({
		map: new t.TextureLoader().load('assets/pic1.jpeg')
	}),
	new t.MeshBasicMaterial({
		map: new t.TextureLoader().load('assets/pic2.jpeg')
	}),
	new t.MeshBasicMaterial({
		map: new t.TextureLoader().load('assets/pic3.jpeg')
	}),
	new t.MeshBasicMaterial({
		map: new t.TextureLoader().load('assets/pic4.jpeg')
	}),
	new t.MeshBasicMaterial({
		map: new t.TextureLoader().load('assets/pic5.jpeg')
	}),
	new t.MeshBasicMaterial({
		map: new t.TextureLoader().load('assets/pic6.jpeg')
	})
]);

var renderer = new t.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new t.BoxGeometry(4, 4, 4);

var cube = new t.Mesh(geometry, seamuses);
scene.add(cube);

camera.position.z = 5;

var render = function() {
	requestAnimationFrame(render);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	renderer.render(scene, camera);
};

render();
