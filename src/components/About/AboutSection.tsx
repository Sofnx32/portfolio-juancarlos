import { motion } from 'framer-motion';
import { 
  Server, 
  ArrowUpRight,
  Mail,
  Download,
  Zap,
} from 'lucide-react';
import { 
  SiSpringboot, 
  SiLaravel, 
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPostgresql,
  SiGithub
} from 'react-icons/si';
import { FaJava, FaLinkedin, FaDatabase } from 'react-icons/fa';

// Componente de icono flotante
function FloatingIcon({ 
  icon: Icon, 
  color, 
  delay, 
  position 
}: { 
  icon: React.ComponentType<{ size?: number; color?: string }>; 
  color: string;
  delay: number;
  position: { x: number; y: number };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay }
      }}
      className="absolute w-16 h-16 bg-[#12121a]/90 backdrop-blur-sm border rounded-2xl flex items-center justify-center shadow-xl"
      style={{ 
        left: `calc(50% + ${position.x}px)`, 
        top: `calc(50% + ${position.y}px)`,
        borderColor: `${color}40`,
        boxShadow: `0 0 30px ${color}20`
      }}
    >
      <Icon size={32} color={color} />
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-[#0a0a0f] py-24 px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#433bff]/10 via-transparent to-green-500/10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(67, 59, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(67, 59, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Glow effects */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-[#433bff]/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Contenedor Principal - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f172a]/60 backdrop-blur-xl border border-[#1e293b] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Header con badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-xs font-mono flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                DISPONIBLE PARA PRÁCTICAS
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna Izquierda - Contenido */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                SOBRE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#433bff] to-cyan-400">
                  MÍ
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                Soy <span className="text-white font-semibold">Juan Carlos Ochoa Díaz</span>, 
                estudiante de <span className="text-white font-semibold">Diseño y Desarrollo 
                de Software en TECSUP</span>. Me especializo en desarrollo Full Stack con 
                <span className="text-[#433bff]"> Java, PHP y JavaScript</span>, creando 
                aplicaciones empresariales escalables.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 leading-relaxed"
              >
                Domino el stack empresarial: <span className="text-white">Spring Boot, Laravel, React </span> 
                y bases de datos como <span className="text-white">Oracle, SQL Server y PostgreSQL</span>. 
                Busco oportunidades para aplicar mis conocimientos en proyectos reales.
              </motion.p>

              {/* Badges informativos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-3 px-4 py-3 bg-[#1e293b]/60 border border-[#334155] rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                    <img 
                        src="/tecsup-logo.jpg" 
                        alt="TECSUP" 
                        className="w-full h-full object-contain"
                    />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">FORMACIÓN</div>
                        <div className="text-sm font-semibold text-white">Estudiante en Tecsup</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 bg-[#1e293b]/60 border border-[#334155] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center">
                    <Server className="w-5 h-5 text-[#433bff]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">STACK</div>
                    <div className="text-sm font-semibold text-white">Java + PHP + JS</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 bg-[#1e293b]/60 border border-[#334155] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">ACTITUD</div>
                    <div className="text-sm font-semibold text-white">Proactivo</div>
                  </div>
                </div>
              </motion.div>

              {/* Botones de acción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <motion.a
                  href="#proyectos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#433bff] to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#433bff]/30 transition-all flex items-center gap-2"
                >
                  VER PROYECTOS
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>

                <div className="flex gap-2">
                  <motion.a
                    href="https://github.com/Sofnx32"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-[#1e293b] border border-[#334155] rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <SiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/juan-carlos-ochoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-[#1e293b] border border-[#334155] rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="juan.ochoa@tecsup.edu.pe"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-[#1e293b] border border-[#334155] rounded-xl flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Columna Derecha - Avatar con Iconos Flotantes */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Círculos rotativos */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border border-[#433bff]/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] border border-green-500/20 rounded-full"
              />

              {/* Avatar principal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  delay: 0.3,
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10 w-80 h-80 rounded-3xl overflow-hidden border-2 border-[#433bff]/30 shadow-2xl"
                style={{ boxShadow: '0 0 60px rgba(67, 59, 255, 0.3)' }}
              >
                <img
                  src="/avatar_juancarlos.png"
                  alt="Juan Carlos Ochoa"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                
                {/* Badge inferior */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#0f172a]/90 backdrop-blur-sm border border-[#1e293b] rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold text-sm">Juan Carlos Ochoa</div>
                        <div className="text-gray-400 text-xs">Full Stack Developer</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-[#433bff] rounded-lg"
                      >
                        <Download className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Iconos flotantes de tecnologías */}
              <FloatingIcon icon={SiReact} color="#06b6d4" delay={0.5} position={{ x: -140, y: -120 }} />
              <FloatingIcon icon={SiTypescript} color="#3b82f6" delay={0.7} position={{ x: 120, y: -100 }} />
              <FloatingIcon icon={SiSpringboot} color="#66bb6a" delay={0.9} position={{ x: -150, y: 80 }} />
              <FloatingIcon icon={SiLaravel} color="#ef4444" delay={1.1} position={{ x: 130, y: 100 }} />
              <FloatingIcon icon={SiJavascript} color="#fbbf24" delay={0.6} position={{ x: -100, y: -150 }} />
              <FloatingIcon icon={SiPostgresql} color="#3b82f6" delay={0.8} position={{ x: 150, y: -50 }} />
              <FloatingIcon icon={FaDatabase} color="#ef4444" delay={1.0} position={{ x: -130, y: 130 }} />
              <FloatingIcon icon={FaJava} color="#f97316" delay={1.2} position={{ x: 110, y: 140 }} />

              {/* QR Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-4 right-4 bg-white p-2 rounded-xl shadow-xl z-20"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/Sofnx32"
                    alt="QR Profile"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-center mt-1">
                  <div className="text-[8px] font-bold text-gray-800">PROFILE</div>
                </div>
              </motion.div>

              {/* Tech Stack Mini */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-4 left-4 bg-[#0f172a]/90 backdrop-blur-sm border border-[#1e293b] rounded-xl p-4 z-20"
              >
                <div className="text-xs text-gray-400 mb-2">MI PILA TÉCNICA</div>
                <div className="flex gap-2">
                  {[SiHtml5, SiCss, SiJavascript, SiReact].map((Icon, i) => (
                    <div key={i} className="w-8 h-8 bg-[#1e293b] rounded-lg flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  {[SiTypescript, SiSpringboot, SiLaravel, SiPostgresql].map((Icon, i) => (
                    <div key={i} className="w-8 h-8 bg-[#1e293b] rounded-lg flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        

      </div>
    </section>
  );
}