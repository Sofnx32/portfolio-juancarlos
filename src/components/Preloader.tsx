import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_MESSAGES = [
  { text: 'INICIALIZANDO SISTEMA', code: 'SYS.INIT' },
  { text: 'CARGANDO MÓDULOS', code: 'MOD.LOAD' },
  { text: 'COMPILANDO EXPERIENCIA', code: 'EXP.COMP' },
  { text: 'SINCRONIZANDO ASSETS', code: 'AST.SYNC' },
  { text: 'PREPARANDO INTERFAZ', code: 'UI.PREP' },
  { text: 'LISTO', code: 'SYS.READY' },
];

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [typedText, setTypedText] = useState('');

  // Progreso simulado
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setIsVisible(false), 800);
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Cambiar mensaje según progreso
  useEffect(() => {
    const msgIndex = Math.min(
      Math.floor(progress / (100 / LOADING_MESSAGES.length)),
      LOADING_MESSAGES.length - 1
    );
    setCurrentMessage(msgIndex);
  }, [progress]);

  // Efecto typing en el mensaje
  useEffect(() => {
    const text = LOADING_MESSAGES[currentMessage].text;
    let index = 0;
    setTypedText('');
    
    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(20px)',
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="fixed inset-0 z-[9999] bg-[#050315] overflow-hidden"
        >
          {/* Grid background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(47, 39, 206, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(47, 39, 206, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glow effects */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2f27ce]/20 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#433bff]/20 rounded-full blur-[150px]"
          />

          {/* Contenido central */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
            
            {/* LOGO ANIMADO */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: 'spring',
                stiffness: 100
              }}
              className="relative mb-12"
            >
              {/* Hexágono exterior girando */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px]"
              >
                <div className="w-full h-full border border-[#433bff]/30 rotate-45" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-40px]"
              >
                <div className="w-full h-full border border-[#2f27ce]/20 rotate-12" />
              </motion.div>

              {/* Logo mark */}
              <div className="relative w-24 h-24">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 30px rgba(67, 59, 255, 0.5)',
                      '0 0 60px rgba(67, 59, 255, 0.8)',
                      '0 0 30px rgba(67, 59, 255, 0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-[#433bff] to-[#2f27ce] rounded-xl rotate-45"
                />
                <div className="absolute inset-[4px] bg-[#050315] rounded-lg rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl -rotate-45">JC</span>
                </div>
              </div>
            </motion.div>

            {/* NOMBRE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-12"
            >
              <div className="text-[10px] font-mono text-[#433bff] tracking-[0.5em] mb-2">
                PORTAFOLIO
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                JUAN CARLOS
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-[#dedcff] tracking-wider">
                OCHOA DÍAZ
              </h2>
            </motion.div>

            {/* TERMINAL OUTPUT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full max-w-md mb-8"
            >
              <div className="bg-[#0a0820]/80 backdrop-blur-md border border-[#2f27ce]/30 rounded-lg p-4 font-mono text-xs">
                {/* Header terminal */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2f27ce]/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[#dedcff]/60 text-[10px]">
                    juancarlos@portfolio:~$
                  </span>
                </div>

                {/* Mensaje con typing effect */}
                <div className="flex items-center gap-2 text-[#4ade80] mb-2">
                  <span className="text-[#433bff]">&gt;</span>
                  <span>{typedText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-[#4ade80]"
                  />
                </div>

                {/* Código del sistema */}
                <div className="text-[#dedcff]/40 text-[10px]">
                  [{LOADING_MESSAGES[currentMessage].code}] 
                  <span className="ml-2 text-[#433bff]">
                    {progress}%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* BARRA DE PROGRESO */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.9 }}
              className="w-full max-w-md"
            >
              <div className="relative h-[2px] bg-[#0a0820] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#2f27ce] via-[#433bff] to-[#4ade80] relative"
                >
                  {/* Glow en la punta */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#4ade80] rounded-full blur-md" />
                </motion.div>
              </div>

              {/* Info below progress */}
              <div className="flex justify-between items-center mt-3 text-[10px] font-mono">
                <span className="text-[#dedcff]/60 tracking-wider">
                  CARGANDO EXPERIENCIA
                </span>
                <span className="text-[#433bff] font-bold">
                  {progress.toString().padStart(3, '0')}%
                </span>
              </div>
            </motion.div>

            {/* Tech stack indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex items-center gap-4 text-[10px] font-mono text-[#dedcff]/40 tracking-widest"
            >
              <span>REACT</span>
              <span className="w-1 h-1 bg-[#433bff] rounded-full" />
              <span>THREE.JS</span>
              <span className="w-1 h-1 bg-[#433bff] rounded-full" />
              <span>TYPESCRIPT</span>
              <span className="w-1 h-1 bg-[#433bff] rounded-full" />
              <span>TAILWIND</span>
            </motion.div>
          </div>

          {/* Scan line effect */}
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#433bff]/5 to-transparent pointer-events-none"
          />

          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#dedcff]/40">
              © 2026 JUAN CARLOS OCHOA
            </span>
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#dedcff]/40">
              SOFNX32
            </span>
            <div className="w-8 h-[1px] bg-[#dedcff]/40" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};