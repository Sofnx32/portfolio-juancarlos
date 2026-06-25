import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export type SectionType = 'inicio' | 'sobre-mi' | 'skills' | 'proyectos' | 'contacto';

const NAV_LINKS: { id: SectionType; label: string; number: string }[] = [
  { id: 'inicio', label: 'INICIO', number: '01' },
  { id: 'sobre-mi', label: 'SOBRE MÍ', number: '02' },
  { id: 'skills', label: 'SKILLS', number: '03' },
  { id: 'proyectos', label: 'PROYECTOS', number: '04' },
  { id: 'contacto', label: 'CONTACTO', number: '05' },
];

interface NavbarProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

export const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigate = (id: SectionType) => {
    onNavigate(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] bg-[#050315]/80 backdrop-blur-xl border-b border-[#2f27ce]/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavigate('inicio')}
            >
              {/* Logo mark */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#433bff] to-[#2f27ce] rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
                <div className="absolute inset-[3px] bg-[#050315] rounded-md rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-sm -rotate-45">JC</span>
                </div>
              </div>
              
              {/* Logo text */}
              <div className="hidden sm:block">
                <div className="text-white font-bold text-sm tracking-wider">
                  JUAN CARLOS
                </div>
                <div className="text-[#dedcff] text-[10px] font-mono tracking-[0.2em]">
                  FULL STACK DEV
                </div>
              </div>
            </motion.div>

            {/* NAV LINKS - DESKTOP */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex items-center gap-1"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={`relative px-4 py-2 text-xs font-mono tracking-[0.2em] transition-all duration-300 group ${
                    activeSection === link.id 
                      ? 'text-[#4ade80]' 
                      : 'text-[#dedcff] hover:text-white'
                  }`}
                >
                  <span className="text-[8px] text-[#433bff]/60 mr-2">{link.number}</span>
                  {link.label}
                  
                  {/* Underline animado */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#433bff]"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeSection === link.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-[#433bff]/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
                </motion.button>
              ))}
            </motion.div>

            {/* CTA + MOBILE TOGGLE */}
            <div className="flex items-center gap-4">
              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="hidden md:flex items-center gap-2"
              >
                <div className="relative">
                  <div className="w-2 h-2 bg-[#4ade80] rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-[#4ade80] rounded-full animate-ping" />
                </div>
                <span className="text-[10px] font-mono text-[#4ade80] tracking-wider">
                  DISPONIBLE
                </span>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate('contacto')}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#433bff] to-[#2f27ce] text-white text-xs font-bold tracking-[0.2em] rounded-lg hover:shadow-[0_0_30px_rgba(67,59,255,0.5)] transition-all duration-300"
              >
                HABLEMOS
                <span className="text-[#4ade80]">→</span>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center bg-[#0a0820]/60 backdrop-blur-md border border-[#2f27ce]/30 rounded-lg"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#050315]/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-20 left-0 right-0 bottom-0 p-6 flex flex-col"
            >
              {/* Mobile links */}
              <div className="flex-1 flex flex-col justify-center gap-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                    className={`text-left p-4 border-l-2 transition-all duration-300 ${
                      activeSection === link.id
                        ? 'border-[#4ade80] bg-[#4ade80]/5'
                        : 'border-[#2f27ce]/30 hover:border-[#433bff] hover:bg-[#433bff]/5'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-mono text-[#433bff]">
                        {link.number}
                      </span>
                      <span className={`text-2xl font-bold tracking-wider ${
                        activeSection === link.id ? 'text-[#4ade80]' : 'text-white'
                      }`}>
                        {link.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6 border-t border-[#2f27ce]/20"
              >
                <button
                  onClick={() => handleNavigate('contacto')}
                  className="w-full py-4 bg-gradient-to-r from-[#433bff] to-[#2f27ce] text-white font-bold tracking-[0.2em] rounded-lg"
                >
                  HABLEMOS →
                </button>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-[#4ade80] tracking-wider">
                    DISPONIBLE PARA PROYECTOS
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};