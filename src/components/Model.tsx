import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("public/3d_model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mousepad.geometry}
        material={materials.M_lam_teal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_1.geometry}
        material={materials.M_lam_browngreylighter}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_2.geometry}
        material={materials.M_plastic_bone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_keys.geometry}
        material={materials.M_lam_browngreylighter}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mouse_1.geometry}
        material={materials.M_plastic_bone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mouse_2.geometry}
        material={materials.M_lam_browngrey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_and_body_1.geometry}
        material={materials.M_plastic_bone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_and_body_2.geometry}
        material={materials.M_lam_darkgrey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_and_body_3.geometry}
        material={materials.M_plastic_bone_shad}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_and_body_4.geometry}
        material={materials.M_screen_blue}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face.geometry}
        material={materials.M_lam_black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face_shadow.geometry}
        material={materials.M_screen_whitetext}
      />
    </group>
  );
}

useGLTF.preload("/3d_model.glb");
