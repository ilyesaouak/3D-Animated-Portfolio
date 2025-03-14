import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Scene } from './components/Scene';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="touch-none"
        >
          <ScrollControls pages={4} damping={0.3}>
            <Scene />
            <Scroll html>
              <div className="relative w-screen">
                <Hero />
                <About />
                <Projects />
                <Contact />
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </main>
  );
}

export default App;