import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar/Navbar';
import type { SectionType } from './components/Navbar/Navbar'; // ✅ Importar tipo
import { ToastContainer } from './components/ToastContainer';
import { useToast } from './hooks/useToast';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import SkillsStack from './components/Skills/SkillsStack';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import ContactSection from './components/Contact/ContactSection';

function App() {
  const { toasts, removeToast } = useToast();
  const [activeSection, setActiveSection] = useState<SectionType>('inicio');

  const handleNavigate = (section: SectionType) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <Preloader />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {activeSection === 'inicio' && <HeroSection />}
            {activeSection === 'sobre-mi' && <AboutSection />}
            {activeSection === 'skills' && <SkillsStack />}
            {activeSection === 'proyectos' && <ProjectsGrid />}
            {activeSection === 'contacto' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;