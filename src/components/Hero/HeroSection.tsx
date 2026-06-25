import { motion } from 'framer-motion';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ArrowDown, Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';


function InteractiveParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const count = 400;

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!particlesRef.current) return;
    
    const posArray = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const mouseX = mouseRef.current.x * 5;
    const mouseY = mouseRef.current.y * 5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const dx = posArray[i3] - mouseX;
      const dy = posArray[i3 + 1] - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 2) {
        const force = (2 - distance) / 2;
        posArray[i3] += dx * force * 0.02;
        posArray[i3 + 1] += dy * force * 0.02;
      }

      posArray[i3] += (positions[i3] - posArray[i3]) * 0.01;
      posArray[i3 + 1] += (positions[i3 + 1] - posArray[i3 + 1]) * 0.01;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#433bff"
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function OptimizedCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      gl={{ 
        alpha: true, 
        antialias: !isMobile,
        powerPreference: 'high-performance'
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <InteractiveParticles />
      </Suspense>
    </Canvas>
  );
}

const socialLinks = [
  { icon: SiGithub, href: 'https://github.com/Sofnx32', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/juan-carlos-ochoa', label: 'LinkedIn' },
  { icon: Mail, href: 'juan.ochoa@tecsup.edu.pe', label: 'Email' },
];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-[#050315] relative overflow-hidden flex items-center justify-center">
      <OptimizedCanvas />

      <motion.div
        animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2f27ce]/20 rounded-full blur-[150px] z-[1]"
      />
      <motion.div
        animate={{ x: mousePos.x * -20, y: mousePos.y * -20 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px] z-[1]"
      />

      <div className="absolute inset-0 opacity-10 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(47, 39, 206, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(47, 39, 206, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Texto */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
              </div>
              <span className="text-green-400 text-xs font-mono tracking-wider">
                DISPONIBLE PARA PROYECTOS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.9] tracking-tight"
            >
              JUAN<br />CARLOS
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9] tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#433bff] to-green-400 bg-clip-text text-transparent">
                OCHOA
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-[#dedcff] mb-8 font-mono tracking-wider"
            >
              FULL STACK DEVELOPER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Construyo experiencias digitales modernas con React, Next.js y MongoDB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#sobre-mi"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#433bff] to-[#2f27ce] text-white font-bold tracking-wider rounded-lg hover:shadow-[0_0_40px_rgba(67,59,255,0.6)] transition-all duration-300"
              >
                CONOCER MÁS
              </motion.a>

              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="w-12 h-12 bg-[#0a0820]/60 backdrop-blur-md border border-[#2f27ce]/30 rounded-lg flex items-center justify-center hover:border-[#433bff] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
            ref={containerRef}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-[#2f27ce]/40 to-green-500/30 rounded-full blur-3xl"
              />

              <motion.div
                animate={{ rotateX: mousePos.y * -5, rotateY: mousePos.x * 5 }}
                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.02, 1], y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <img
                    src="/avatar_juancarlos.png"
                    alt="Juan Carlos Ochoa Díaz"
                    className="w-full h-full object-contain object-bottom"
                    loading="eager"
                  />

                  <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#433bff]/15 to-transparent h-32 pointer-events-none"
                  />

                  <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-tr from-[#2f27ce]/20 via-transparent to-green-500/10 pointer-events-none"
                  />

                  <motion.div
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border-2 border-[#433bff]/50 rounded-2xl pointer-events-none"
                    style={{ boxShadow: '0 0 40px rgba(67, 59, 255, 0.5), inset 0 0 40px rgba(67, 59, 255, 0.3)' }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <QRCodeSVG
                    value="https://github.com/Sofnx32"
                    size={80}
                    level="H"
                    includeMargin={false}
                  />
                </div>
                <div className="text-center mt-1">
                  <div className="text-[9px] font-bold text-gray-800">PROFILE</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}