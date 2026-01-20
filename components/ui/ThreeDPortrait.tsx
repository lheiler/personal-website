"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform sampler2D uDepthMap;
  uniform vec2 uMouse;
  uniform float uThreshold;
  varying vec2 vUv;

  void main() {
    float depth = texture2D(uDepthMap, vUv).r;
    vec2 displacement = uMouse * depth * uThreshold;
    vec2 displacedUv = clamp(vUv + displacement, 0.0, 1.0);
    gl_FragColor = texture2D(uTexture, displacedUv);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function Scene({ texturePath, depthPath }: { texturePath: string; depthPath: string }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    // Explicitly loading textures
    const texture = useTexture(texturePath);
    const depthMap = useTexture(depthPath);

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uDepthMap: { value: depthMap },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uThreshold: { value: 0.015 },
        }),
        [texture, depthMap]
    );

    useFrame((state) => {
        const { x, y } = state.mouse;
        uniforms.uMouse.value.x = THREE.MathUtils.lerp(uniforms.uMouse.value.x, x * 0.5, 0.1);
        uniforms.uMouse.value.y = THREE.MathUtils.lerp(uniforms.uMouse.value.y, y * 0.5, 0.1);
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[4, 5]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export function ThreeDPortrait({
    imageSrc,
    depthSrc
}: {
    imageSrc: string;
    depthSrc: string;
}) {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg bg-neutral-100 shadow-inner">
            <div className="absolute inset-0 border border-neutral-200/50 rounded-lg pointer-events-none z-20" />

            <div className="relative w-full h-full z-10 rounded-lg overflow-hidden">
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    style={{ width: '100%', height: '100%' }}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Suspense fallback={null}>
                        <Scene texturePath={imageSrc} depthPath={depthSrc} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
