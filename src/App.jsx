/**
 * App.jsx — Root component
 * Composes all sections. Structure is defined here.
 */
import Navbar from './components/layout/Navbar';
import SocialSidebar from './components/layout/SocialSidebar';
import Hero from './components/sections/Hero';
import Sobre from './components/sections/Sobre';
import Skills from './components/sections/Skills';
import Experiencia from './components/sections/Experiencia';
import Projetos from './components/sections/Projetos';
import Contato from './components/sections/Contato';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Sobre />
        <Skills />
        <Experiencia />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
}
