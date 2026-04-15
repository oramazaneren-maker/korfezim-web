import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ElectricParticles() {
    const ref = useRef<THREE.Points>(null!);
    const count = 4000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.015;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.08;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#cc2222" size={0.025} sizeAttenuation depthWrite={false} opacity={0.4} />
        </Points>
    );
}

function PowerGrid() {
    const ref = useRef<THREE.Group>(null!);

    const lines = useMemo(() => {
        const result: THREE.Line[] = [];
        for (let i = 0; i < 15; i++) {
            const points: THREE.Vector3[] = [];
            const z = (i / 15 - 0.5) * 20;
            for (let j = 0; j <= 60; j++) {
                const x = (j / 60 - 0.5) * 40;
                const y = Math.sin(x * 0.2 + i * 0.7) * 1.5 + Math.cos(x * 0.1) * 0.8;
                points.push(new THREE.Vector3(x, y, z));
            }
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({
                color: i % 3 === 0 ? '#881111' : '#334466',
                transparent: true,
                opacity: i % 3 === 0 ? 0.12 : 0.06,
            });
            result.push(new THREE.Line(geo, mat));
        }
        return result;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = -0.25 + Math.sin(state.clock.elapsedTime * 0.06) * 0.04;
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.3;
        }
    });

    return (
        <group ref={ref} position={[0, -3, -8]}>
            {lines.map((line, i) => (
                <primitive key={i} object={line} />
            ))}
        </group>
    );
}

function GlowOrb() {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.8;
            ref.current.rotation.y = state.clock.elapsedTime * 0.15;
            ref.current.rotation.z = state.clock.elapsedTime * 0.08;
        }
    });

    return (
        <mesh ref={ref} position={[5, 2, -12]}>
            <icosahedronGeometry args={[2.5, 1]} />
            <meshBasicMaterial color="#991111" wireframe transparent opacity={0.06} />
        </mesh>
    );
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 12], fov: 55 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
                <ambientLight intensity={0.2} />
                <ElectricParticles />
                <PowerGrid />
                <GlowOrb />
            </Canvas>
        </div>
    );
}
