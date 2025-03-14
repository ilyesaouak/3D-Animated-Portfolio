import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, MeshDistortMaterial, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const { viewport } = useThree();
  const data = useScroll();
  const group = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  // Create particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = data.scroll.current;

    // Rotate group based on scroll
    if (group.current) {
      group.current.rotation.y = scroll * Math.PI * 2;
      group.current.position.y = scroll * -10;
    }

    // Animate sphere
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(time * 0.3) * 2;
      sphereRef.current.position.y = Math.cos(time * 0.2) * 2;
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.1;
    }

    // Animate box
    if (boxRef.current) {
      boxRef.current.position.x = Math.cos(time * 0.3) * 2;
      boxRef.current.position.y = Math.sin(time * 0.2) * 2;
      boxRef.current.rotation.x = time * 0.1;
      boxRef.current.rotation.y = time * 0.2;
    }

    // Update particles
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      if (group.current && group.current.children[i]) {
        group.current.children[i].position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );
        group.current.children[i].scale.setScalar(s * 0.3);
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#4338ca" />
      
      <group ref={group}>
        {particles.map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial 
              color="#4338ca"
              emissive="#4338ca"
              emissiveIntensity={0.5}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      <Sphere ref={sphereRef} args={[1, 64, 64]} position={[-2, 0, 0]}>
        <MeshDistortMaterial
          color="#4338ca"
          speed={4}
          distort={0.6}
          radius={1}
          emissive="#4338ca"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[2, 0, 0]}>
        <meshStandardMaterial
          color="#4338ca"
          emissive="#4338ca"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>
    </>
  );
}