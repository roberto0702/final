const canvas = document.getElementById('background');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const particles = new THREE.BufferGeometry();
const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}
particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const particleMesh = new THREE.Points(particles, particleMaterial);
scene.add(particleMesh);

function animate() {
  requestAnimationFrame(animate);
  particleMesh.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();
  
  const music = document.getElementById('backgroundMusic');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', () => {
  music.play();
});

pauseButton.addEventListener('click', () => {
  music.pause();
});
  