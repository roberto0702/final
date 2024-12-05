const canvas = document.getElementById('moodCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('mousemove', (e) => {
      const hue = (e.clientX / window.innerWidth) * 360;
      sphere.material.color.setHSL(hue / 360, 0.5, 0.5);
      document.body.style.backgroundColor = `hsl(${hue}, 50%, 20%)`;
    });