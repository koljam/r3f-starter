import { useEffect, useMemo, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

export const Experience = () => {
  const [count, setCount] = useState(40);
  const dir = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          dir.current = 1;
        } else if (prev === 40) {
          dir.current = -1;
        }

        return prev + dir.current;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const material = useMemo(() => new THREE.MeshNormalMaterial(), []);
  const geometry = useMemo(() => new THREE.BoxGeometry(), []);

  const meshes = useMemo(
    () =>
      new Array(count)
        .fill()
        .map((_, index) => (
          <motion.mesh
            key={`box-${index}`}
            initial={{ y: index + 5 }}
            animate={{ y: index }}
            exit={{ y: index + 5 }}
            transition={{ duration: 0.5 }}
            position={[0, 0, 0]}
            material={material}
            geometry={geometry}
          />
        )),
    [count]
  );

  return (
    <>
      <OrbitControls />
      <AnimatePresence>{meshes}</AnimatePresence>
    </>
  );
};
