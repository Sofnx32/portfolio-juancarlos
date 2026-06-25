import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete' | 'hidden'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('complete'), 300);
          setTimeout(() => {
            setPhase('hidden');
            onComplete();
          }, 1200);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'hidden' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050315] flex items-center justify-center overflow-hidden"
        >
          {/* Grid de fondo */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(47, 39, 206, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(47, 39, 206, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Orbes de luz */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2f27ce]/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#433bff]/20 rounded-full blur-[120px]"
          />

          {/* Contenido */}
          <div className="relative z-10 text-center px-6 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Logo/Nombre */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                JUAN CARLOS
              </h1>
              <p className="text-sm md:text-base font-mono text-[#dedcff] mb-12 tracking-[0.3em]">
                OCHOA DÍAZ
              </p>

              {/* Barra de progreso */}
              <div className="relative w-full h-0.5 bg-[#0a0820] rounded-full overflow-hidden mb-4">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2f27ce] to-[#433bff]"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ['-100%', '400%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Porcentaje y estado */}
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#dedcff]">
                  {phase === 'complete' ? 'INICIALIZANDO SISTEMA...' : 'CARGANDO EXPERIENCIA...'}
                </span>
                <span className="text-white font-bold">
                  {Math.min(Math.floor(progress), 100).toString().padStart(3, '0')}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Footer del loading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-[10px] md:text-xs font-mono text-[#dedcff]/50 tracking-[0.3em]">
              READY FOR PROGRAMMING // {new Date().getFullYear()}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}