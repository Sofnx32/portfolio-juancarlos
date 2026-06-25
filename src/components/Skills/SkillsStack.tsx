import { motion } from 'framer-motion';
import { Code2, ArrowRight, Mail } from 'lucide-react';
import { 
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiGit,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaLinkedin } from 'react-icons/fa';

// Datos exactos de la imagen
const skillsData = {
  frontend: {
    title: 'Frontend',
    borderColor: 'border-purple-500',
    bgGlow: 'from-purple-500/10',
    badgeColor: 'bg-purple-500',
    largeIcons: [
      { icon: SiReact, color: '#61DAFB' },
      { icon: SiHtml5, color: '#E34F26' },
      { icon: SiCss, color: '#1572B6' },
      { icon: SiJavascript, color: '#F7DF1E' },
    ],
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: '#38BDF8' },
      { name: 'TypeScript', icon: SiTypescript, level: 75, color: '#3178C6' },
      { name: 'Figma', icon: SiFigma, level: 70, color: '#A259FF' },
    ],
  },
  backend: {
    title: 'Backend',
    borderColor: 'border-cyan-500',
    bgGlow: 'from-cyan-500/10',
    badgeColor: 'bg-cyan-500',
    largeIcons: [
      { icon: SiNodedotjs, color: '#339933' },
      { icon: SiPhp, color: '#777BB4' },
      { icon: SiSpringboot, color: '#6DB33F' },
      { icon: SiLaravel, color: '#FF2D20' },
      { icon: FaJava, color: '#007396' },
    ],
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
      { name: 'Spring Boot', icon: SiSpringboot, level: 85, color: '#6DB33F' },
      { name: 'PHP', icon: SiPhp, level: 85, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, level: 80, color: '#FF2D20' },
      { name: 'Java', icon: FaJava, level: 80, color: '#007396' },
    ],
  },
  database: {
    title: 'Database & Tools',
    borderColor: 'border-pink-500',
    bgGlow: 'from-pink-500/10',
    badgeColor: 'bg-pink-500',
    largeIcons: [
      { icon: SiGit, color: '#F05032' },
      { icon: SiGithub, color: '#FFFFFF' },
      { icon: SiMysql, color: '#4479A1' },
      { icon: SiPostgresql, color: '#336791' },
      { icon: FaDatabase, color: '#F00000' },
      { icon: SiMongodb, color: '#47A248' },
    ],
    skills: [
      { name: 'Git & GitHub', icon: SiGithub, level: 85, color: '#FFFFFF' },
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#336791' },
      { name: 'Oracle SQL', icon: FaDatabase, level: 75, color: '#F00000' },
      { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
    ],
  },
};

// Barra de progreso
function ProgressBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="w-full h-1 bg-[#1a1a2e] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

// Skill individual con barra
function SkillRow({ skill, index }: { skill: typeof skillsData.frontend.skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-3 py-2"
    >
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
        <skill.icon size={18} color={skill.color} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-white">{skill.name}</span>
          <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
        </div>
        <ProgressBar level={skill.level} color={skill.color} />
      </div>
    </motion.div>
  );
}

// Tarjeta de categoría
function SkillCard({ 
  data, 
  delay 
}: { 
  data: typeof skillsData.frontend;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`rounded-2xl border-2 ${data.borderColor} bg-[#0a0a1a] p-6 relative overflow-hidden`}
      style={{
        boxShadow: `0 0 30px ${data.borderColor === 'border-purple-500' ? 'rgba(168, 85, 247, 0.15)' : data.borderColor === 'border-cyan-500' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(236, 72, 153, 0.15)'}`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">{data.title}</h3>
        <div className={`w-8 h-8 rounded-lg ${data.badgeColor} flex items-center justify-center`}>
          <Code2 className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Grid de iconos grandes 3x2 */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {data.largeIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="aspect-square rounded-xl bg-[#12122a] border border-white/5 flex items-center justify-center"
          >
            <item.icon size={40} color={item.color} />
          </motion.div>
        ))}
      </div>

      {/* Lista de skills */}
      <div className="space-y-1">
        {data.skills.map((skill, index) => (
          <SkillRow key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// Radar Chart SVG
function RadarChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative w-48 h-48"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Hexágono base */}
        <polygon
          points="100,20 170,60 170,140 100,180 30,140 30,60"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Hexágono medio */}
        <polygon
          points="100,45 145,72 145,128 100,155 55,128 55,72"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        {/* Hexágono interior */}
        <polygon
          points="100,70 120,84 120,116 100,130 80,116 80,84"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        {/* Data polygon */}
        <motion.polygon
          points="100,35 160,70 155,135 100,170 45,135 40,70"
          fill="rgba(168, 85, 247, 0.2)"
          stroke="rgba(168, 85, 247, 0.8)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
        {/* Punto central */}
        <circle cx="100" cy="100" r="4" fill="#A855F7" />
        {/* Labels */}
        <text x="100" y="12" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Front-End</text>
        <text x="185" y="65" textAnchor="start" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Back-End</text>
        <text x="185" y="145" textAnchor="start" fill="#9CA3AF" fontSize="10" fontFamily="monospace">DevOps</text>
        <text x="100" y="198" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Database</text>
        <text x="15" y="145" textAnchor="end" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Design</text>
        <text x="15" y="65" textAnchor="end" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Design</text>
      </svg>
    </motion.div>
  );
}

export default function SkillsStack() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050510] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: i % 2 === 0 ? '#A855F7' : '#06B6D4',
              opacity: 0.3,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header con Radar Chart */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
                SKILLS
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Domino un conjunto diverso de herramientas para construir soluciones integrales.
            </p>
          </motion.div>

          <RadarChart />
        </div>

        {/* 3 Tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <SkillCard data={skillsData.frontend} delay={0.2} />
          <SkillCard data={skillsData.backend} delay={0.4} />
          <SkillCard data={skillsData.database} delay={0.6} />
        </div>

        {/* Footer: Botón + Social + QR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/20"
            >
              CONOCER MÁS PROYECTOS
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {[
                { icon: SiGithub, href: 'https://github.com/Sofnx32' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/juan-carlos-ochoa' },
                { icon: SiFigma, href: '#' },
                { icon: Mail, href: 'mailto:contacto@juancarlos.dev' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.8 }}
            className="bg-white p-2 rounded-xl shadow-2xl"
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/Sofnx32"
                alt="QR Profile"
                className="w-full h-full"
              />
            </div>
            <div className="text-center mt-1">
              <div className="text-[8px] font-bold text-gray-800 tracking-wider">PROFILE</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}