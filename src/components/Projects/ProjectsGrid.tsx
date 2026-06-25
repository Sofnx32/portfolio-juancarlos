import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { 
  SiGithub, 
  SiLaravel,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiReact,
  SiPostgresql,
  SiTypescript,
  SiBootstrap,
  SiDjango,
  SiAndroidstudio
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const projects = [
  {
    title: 'Reservas Hotel - CRUD Laravel',
    description: 'Sistema completo de gestión hotelera con registro de habitaciones, reservas, clientes y administración. Incluye autenticación y panel de control.',
    tech: [
      { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
      { icon: SiPhp, name: 'PHP', color: '#777BB4' },
      { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
      { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    ],
    borderColor: 'border-red-500',
    gradient: 'from-red-500/20',
    buttonGradient: 'from-red-600 to-orange-600',
    github: 'https://github.com/Sofnx32/Crud-laravel-reservashotel',
    color: '#FF2D20',
  },
  {
    title: 'Tech Haven - Tienda Electrodomésticos',
    description: 'Landing page moderna para tienda de electrodomésticos con diseño responsive, animaciones CSS y experiencia de usuario optimizada.',
    tech: [
      { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
      { icon: SiCss, name: 'CSS3', color: '#1572B6' },
    ],
    borderColor: 'border-orange-500',
    gradient: 'from-orange-500/20',
    buttonGradient: 'from-orange-600 to-yellow-600',
    github: 'https://github.com/Sofnx32/TECH-HAVEN',
    color: '#E34F26',
  },
  {
    title: 'TecVote - Sistema Electoral',
    description: 'Sistema de votación electrónica con arquitectura multiplataforma. Incluye backend con Spring Boot y Django, frontend web con React, y aplicación móvil nativa.',
    tech: [
      { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiAndroidstudio, name: 'Android', color: '#3DDC84' },
    ],
    borderColor: 'border-green-500',
    gradient: 'from-green-500/20',
    buttonGradient: 'from-green-600 to-emerald-600',
    github: 'https://github.com/Sofnx32/TECVOTE-TEAM',
    color: '#6DB33F',
  },
];

function ProjectIllustration({ index }: { index: number }) {
  const illustrations = [
    <svg key={0} viewBox="0 0 400 250" className="w-full h-full">
      <defs>
        <linearGradient id="hotel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF2D20', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FF6B35', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>
      <rect x="120" y="60" width="160" height="160" rx="8" fill="#1e293b" stroke="url(#hotel-grad)" strokeWidth="2" />
      {[...Array(3)].map((_, row) => (
        [...Array(4)].map((_, col) => (
          <rect 
            key={`${row}-${col}`}
            x={140 + col * 35} 
            y={80 + row * 40} 
            width="20" 
            height="25" 
            rx="2" 
            fill="#FF2D20" 
            opacity={0.3 + Math.random() * 0.4} 
          />
        ))
      ))}
      <rect x="180" y="180" width="40" height="40" rx="4" fill="#FF2D20" opacity="0.8" />
      <rect x="140" y="40" width="120" height="20" rx="4" fill="#FF2D20" opacity="0.6" />
      <text x="200" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HOTEL</text>
      <circle cx="320" cy="100" r="25" fill="#FF2D20" />
      <text x="320" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Laravel</text>
      <ellipse cx="80" cy="180" rx="30" ry="15" fill="#4479A1" opacity="0.8" />
      <rect x="50" y="180" width="60" height="30" fill="#4479A1" opacity="0.8" />
      <ellipse cx="80" cy="210" rx="30" ry="15" fill="#4479A1" opacity="0.6" />
      <text x="80" y="200" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">DB</text>
    </svg>,

    <svg key={1} viewBox="0 0 400 250" className="w-full h-full">
      <defs>
        <linearGradient id="shop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#E34F26', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>
      <rect x="60" y="80" width="280" height="140" rx="8" fill="#1e293b" stroke="url(#shop-grad)" strokeWidth="2" />
      <path d="M 60 80 L 340 80 L 320 60 L 80 60 Z" fill="#E34F26" opacity="0.8" />
      <rect x="80" y="100" width="60" height="80" rx="4" fill="#1572B6" opacity="0.6" />
      <rect x="160" y="100" width="60" height="80" rx="4" fill="#E34F26" opacity="0.6" />
      <rect x="240" y="100" width="60" height="80" rx="4" fill="#F59E0B" opacity="0.6" />
      <rect x="95" y="120" width="30" height="40" rx="3" fill="white" opacity="0.8" />
      <rect x="175" y="120" width="30" height="40" rx="3" fill="white" opacity="0.8" />
      <rect x="255" y="120" width="30" height="40" rx="3" fill="white" opacity="0.8" />
      <text x="200" y="50" textAnchor="middle" fill="#E34F26" fontSize="14" fontWeight="bold">TECH HAVEN</text>
      <circle cx="320" cy="200" r="20" fill="#E34F26" />
      <text x="320" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HTML</text>
      <circle cx="80" cy="200" r="20" fill="#1572B6" />
      <text x="80" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CSS</text>
    </svg>,

    <svg key={2} viewBox="0 0 400 250" className="w-full h-full">
      <defs>
        <linearGradient id="vote-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6DB33F', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#3178C6', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>
      <rect x="150" y="100" width="100" height="120" rx="8" fill="#1e293b" stroke="url(#vote-grad)" strokeWidth="2" />
      <rect x="170" y="110" width="60" height="10" rx="2" fill="#6DB33F" opacity="0.6" />
      <rect x="180" y="80" width="40" height="30" rx="2" fill="white" opacity="0.9" transform="rotate(-10 200 95)" />
      <rect x="185" y="85" width="30" height="3" rx="1" fill="#6DB33F" opacity="0.6" transform="rotate(-10 200 95)" />
      <rect x="185" y="92" width="25" height="3" rx="1" fill="#6DB33F" opacity="0.6" transform="rotate(-10 200 95)" />
      <path d="M 195 140 L 205 155 L 225 125" stroke="#6DB33F" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="100" r="25" fill="#6DB33F" />
      <text x="80" y="95" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Spring</text>
      <text x="80" y="108" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Boot</text>
      <circle cx="320" cy="100" r="25" fill="#61DAFB" />
      <circle cx="320" cy="100" r="8" fill="none" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="320" cy="100" rx="18" ry="6" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="320" cy="100" rx="18" ry="6" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 320 100)" />
      <ellipse cx="320" cy="100" rx="18" ry="6" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 320 100)" />
      <ellipse cx="200" cy="230" rx="40" ry="12" fill="#336791" opacity="0.8" />
      <rect x="160" y="220" width="80" height="20" fill="#336791" opacity="0.8" />
      <text x="200" y="235" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">PostgreSQL</text>
      <line x1="105" y1="100" x2="150" y2="140" stroke="#6DB33F" strokeWidth="2" strokeDasharray="4" />
      <line x1="295" y1="100" x2="250" y2="140" stroke="#61DAFB" strokeWidth="2" strokeDasharray="4" />
    </svg>,
  ];
  return illustrations[index] || illustrations[0];
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`rounded-2xl border-2 ${project.borderColor} bg-[#0a0a1a] p-6 relative overflow-hidden group`}
      style={{
        boxShadow: `0 0 40px ${project.color}26`,
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative mb-6 rounded-xl overflow-hidden bg-[#12122a] border border-white/5 aspect-video">
        <ProjectIllustration index={index} />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e293b]/80 border border-white/10"
          >
            <tech.icon size={16} color={tech.color} />
            <span className="text-xs font-medium text-gray-300">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Botones de acción - VERSIÓN FUNCIONAL */}
      <div className="flex items-center gap-3">
        {/* Botón GitHub */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.buttonGradient} text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg cursor-pointer`}
        >
          <SiGithub className="w-4 h-4" />
          Ver en GitHub
        </motion.a>
        
        {/* Iconos sociales CON ENLACES */}
        <div className="flex gap-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-[#1e293b] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          >
            <SiGithub className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/juan-carlos-ochoa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-[#1e293b] border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-colors cursor-pointer"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href="mailto:contacto@juancarlos.dev"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-[#1e293b] border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400/30 transition-colors cursor-pointer"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-[#050510] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-500/30 rounded-sm"
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.6 }}
            style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%` }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
              PROYECTOS
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Una selección de mis proyectos más recientes y destacados.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="https://github.com/Sofnx32"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/20"
            >
              VER TODOS EN GITHUB
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <div className="flex gap-2">
              {[SiGithub, FaLinkedin, SiTypescript, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={i === 0 ? 'https://github.com/Sofnx32' : i === 1 ? 'https://linkedin.com/in/juan-carlos-ochoa' : i === 3 ? 'mailto:contacto@juancarlos.dev' : '#'}
                  target={i !== 3 ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-[#1e293b] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
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