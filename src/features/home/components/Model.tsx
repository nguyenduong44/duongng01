import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";

type GLTFResult = {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};

const PARTS: Array<[node: string, material: string]> = [
  ["mousepad", "M_lam_teal"],
  ["keyboard_1", "M_lam_browngreylighter"],
  ["keyboard_2", "M_plastic_bone"],
  ["keyboard_keys", "M_lam_browngreylighter"],
  ["mouse_1", "M_plastic_bone"],
  ["mouse_2", "M_lam_browngrey"],
  ["monitor_and_body_1", "M_plastic_bone"],
  ["monitor_and_body_2", "M_lam_darkgrey"],
  ["monitor_and_body_3", "M_plastic_bone_shad"],
  ["monitor_and_body_4", "M_screen_blue"],
  ["face", "M_lam_black"],
  ["face_shadow", "M_screen_whitetext"],
];

export function Model(props: React.ComponentProps<"group">) {
  const { nodes, materials } = useGLTF("/3d_model.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {PARTS.map(([node, material]) => (
        <mesh
          key={node}
          castShadow
          receiveShadow
          geometry={nodes[node].geometry}
          material={materials[material]}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/3d_model.glb");
