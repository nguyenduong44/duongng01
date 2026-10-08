# AGENTS.md - Frontend (`duongng01`)

## Commands

Run inside `duongng01/`:

- `npm run dev` - Launch Vite development server
- `npm run lint` - Run ESLint
- `npm run build` - Run TypeScript build check (`tsc -b`) followed by Vite build

## Architecture & Tech Stack

- **Framework**: React 19 + TypeScript + Vite.
- **Styling**: Tailwind CSS v4 using `@tailwindcss/vite` plugin.
- **3D Graphics**: Three.js integrated via `@react-three/fiber` and `@react-three/drei`.
- **Animations**: GSAP (`gsap`).
- **Assets**: 3D GLTF/GLB models (`3d_model.glb`, `base_basic_pbr.glb`) are stored in `public/`.
- **Database Script**: `duongng01.sql` contains the SQL Server schema setup script for the backend database.
