import React from 'react';
import { ShaderAnimation } from './components/ui/ShaderAnimation';

export default function App() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <ShaderAnimation />
      <h1 className="absolute pointer-events-none z-10 text-center text-5xl md:text-7xl leading-tight font-bold tracking-tighter text-white drop-shadow-lg">
        Welcome to<br />table no 01
      </h1>
    </main>
  );
}