import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const Particles = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const AbstractShape = ({ position, color, speed, args }) => {
    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={3} position={position}>
            <mesh>
                <octahedronGeometry args={args} />
                <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
            </mesh>
        </Float>
    );
};

const CanvasBg = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 1 : 0.5} color={isDarkMode ? "#3b82f6" : "#60a5fa"} />
                {isDarkMode && <Particles />}
                <AbstractShape position={[-5, 2, -2]} color={isDarkMode ? '#3b82f6' : '#2563eb'} speed={2} args={[1, 0]} />
                <AbstractShape position={[5, -2, -5]} color={isDarkMode ? '#8b5cf6' : '#6d28d9'} speed={1.5} args={[1.5, 0]} />
                <AbstractShape position={[0, -5, -8]} color={isDarkMode ? '#06b6d4' : '#0891b2'} speed={1} args={[2, 0]} />
            </Canvas>
        </div>
    );
};

export default CanvasBg;
