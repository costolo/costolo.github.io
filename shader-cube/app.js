/* global THREE requestAnimationFrame */
const t = THREE
const scene = new t.Scene()
const camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
const renderer = new t.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const uniforms = {
  u_time: { type: 'f', value: 1.0 },
  u_resolution: { type: 'v2', value: new THREE.Vector2() }
}

const material = new t.ShaderMaterial({
  uniforms,
  // vertexShader: document.getElementById('vertexShader').textContent,
  fragmentShader: document.getElementById('fragmentShader').textContent
})

const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
const cube = new t.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

const render = () => {
  requestAnimationFrame(render)

  uniforms.u_time.value += 0.05
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  cube.rotation.z += 0.01

  renderer.render(scene, camera)
}

render()
