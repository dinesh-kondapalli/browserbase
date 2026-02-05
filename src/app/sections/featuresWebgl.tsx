"use client";

import { Suspense, useEffect, useMemo } from "react";
import {
  Edges,
  Environment,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

interface RubiksCubeProps {
  color: string;
}

function RubiksCube({ color }: RubiksCubeProps) {
  const cubeSize = 1.6;
  const segments = 2;
  const segmentSize = cubeSize / segments;

  const blockColors = [
    new THREE.Color("#82c92f"),
    new THREE.Color("#00aefe"),
    new THREE.Color("#fab700"),
    new THREE.Color("#d3497f"),
    new THREE.Color("#fa9300"),
    new THREE.Color("#fab700"),
    new THREE.Color("#a45e00"),
    new THREE.Color("#a374fa"),
  ];

  const cubes = [];
  let colorIndex = 0;
  for (let x = 0; x < segments; x++) {
    for (let y = 0; y < segments; y++) {
      for (let z = 0; z < segments; z++) {
        const px = (x - 0.5) * segmentSize;
        const py = (y - 0.5) * segmentSize;
        const pz = (z - 0.5) * segmentSize;

        const blockColor = blockColors[colorIndex % blockColors.length];

        const materials = Array(6)
          .fill(null)
          .map(
            () =>
              new THREE.MeshStandardMaterial({
                color: blockColor,
                roughness: 0.3,
                metalness: 0.1,
              }),
          );

        cubes.push({
          position: [px, py, pz] as [number, number, number],
          materials,
        });

        colorIndex++;
      }
    }
  }

  return (
    <group position={[-1.5, 0.2, 0]} rotation={[0.55, 0.75, 0]}>
      {cubes.map((cube, idx) => (
        <mesh key={idx} position={cube.position}>
          <boxGeometry
            args={[segmentSize - 0.01, segmentSize - 0.01, segmentSize - 0.01]}
          />
          {cube.materials.map((mat, matIdx) => (
            <primitive
              key={matIdx}
              object={mat}
              attach={`material-${matIdx}`}
            />
          ))}
          <Edges scale={1} threshold={8} color={0x000000} />
        </mesh>
      ))}
      <Grid />
      <Shadow />
    </group>
  );
}

function Grid() {
  const gridTexture = useTexture("/grid.svg");
  gridTexture.wrapS = THREE.RepeatWrapping;
  gridTexture.wrapT = THREE.RepeatWrapping;
  gridTexture.repeat.set(8, 8);

  return (
    <mesh
      position={[0, -0.95, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial
        map={gridTexture}
        transparent
        opacity={0.4}
        depthWrite={false}
        color={0xffffff}
      />
    </mesh>
  );
}

function Shadow() {
  return (
    <mesh position={[0, -0.92, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.2, 2.2]} />
      <meshBasicMaterial color={0x000000} transparent opacity={0.2} />
    </mesh>
  );
}

function VideoPlane() {
  const texture = useVideoTexture("/video-chrome.webm", {
    muted: true,
    loop: true,
    start: true,
  });

  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh position={[0.6, 0.2, 0]} rotation={[-0.1, -0.5, 0]}>
      <planeGeometry args={[6.2, 4.6]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.2}
        metalness={0.1}
        transparent
        opacity={1}
      />
    </mesh>
  );
}

interface SceneProps {
  showVideo: boolean;
  activeColor: string;
}

function Scene({ showVideo, activeColor }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.25}
        penumbra={0.8}
        intensity={1}
      />
      <spotLight
        position={[-10, -10, -5]}
        angle={0.25}
        penumbra={0.8}
        intensity={0.5}
      />
      <Environment preset="city" />
      {showVideo ? <VideoPlane /> : <RubiksCube color={activeColor} />}
    </>
  );
}

export default function FeaturesWebgl({
  showVideo = false,
  activeColor = "#0b3a7a",
}: {
  showVideo?: boolean;
  activeColor?: string;
}) {
  useEffect(() => {
    const video = document.querySelector(
      ".webgl-video",
    ) as HTMLVideoElement | null;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  return (
    <div className="features-webgl">
      <Canvas
        camera={{ position: [0, 1.15, 7.8], fov: 34 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      >
        <Suspense fallback={null}>
          <Scene showVideo={showVideo} activeColor={activeColor} />
        </Suspense>
      </Canvas>
      <video
        className="webgl-video"
        muted
        loop
        playsInline
        preload="metadata"
        style={{ display: "none" }}
      >
        <source src="/video-chrome.webm" type="video/webm" />
      </video>
    </div>
  );
}
