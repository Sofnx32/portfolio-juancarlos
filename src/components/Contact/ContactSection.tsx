import { motion } from 'framer-motion';
import { Mail, Calendar, Mic, Coffee, ExternalLink, Send, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-[#050510] relative overflow-hidden">
      {/* Background effects */}
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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/30 rounded-sm"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
              CONTACTO
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Estoy listo para escuchar tu próximo gran proyecto. Hablemos.
          </p>
        </motion.div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border-2 border-purple-500 bg-[#0a0a1a] p-6 relative overflow-hidden group"
            style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.15)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <div className="relative mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center"
              >
                <Mail className="w-12 h-12 text-purple-400" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
              <a 
                href="mailto:juan.ochoa@tecsup.edu.pe"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center justify-center gap-1"
              >
                juan.ochoa@tecsup.edu.pe
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Button */}
            <motion.a
              href="mailto:juan.ochoa@tecsup.edu.pe"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              <Send className="w-4 h-4" />
              ENVIAR MENSAJE
            </motion.a>
          </motion.div>

          {/* Card 2: LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border-2 border-cyan-500 bg-[#0a0a1a] p-6 relative overflow-hidden group"
            style={{ boxShadow: '0 0 40px rgba(6, 182, 212, 0.15)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icons */}
            <div className="relative mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center relative"
              >
                <FaLinkedin className="w-12 h-12 text-cyan-400 absolute" />
                <Coffee className="w-6 h-6 text-purple-400 absolute bottom-2 right-2" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-gray-400 text-sm mb-3">Redes Profesionales</p>
              <div className="space-y-1 text-xs">
                <a href="https://linkedin.com/in/jcochoa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors block">
                  LinkedIn.com/in/jcochoa
                </a>
                <a href="https://github.com/Sofnx32" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors block">
                  GitHub.com/jcochoa
                </a>
              </div>
            </div>

            {/* Button */}
            <motion.a
              href="https://linkedin.com/in/jcochoa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <FaLinkedin className="w-4 h-4" />
              CONECTAR EN LINKEDIN
            </motion.a>
          </motion.div>

          {/* Card 3: Meeting */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl border-2 border-pink-500 bg-[#0a0a1a] p-6 relative overflow-hidden group"
            style={{ boxShadow: '0 0 40px rgba(236, 72, 153, 0.15)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icons */}
            <div className="relative mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center relative"
              >
                <Mic className="w-10 h-10 text-pink-400" />
                <Calendar className="w-8 h-8 text-purple-400 absolute bottom-2 right-2" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Reunión</h3>
              <p className="text-gray-400 text-sm">Agenda una llamada de 15 min</p>
            </div>

            {/* Button */}
            <motion.button
              onClick={() => window.open('https://calendly.com/app/scheduling/meeting_types/user/me', '_blank')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20"
            >
              <Calendar className="w-4 h-4" />
              AGENDAR REUNIÓN
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
        >
          {/* Left: Button & Social */}
          <div className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="https://github.com/Sofnx32"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/20"
            >
              VER MÁS PROYECTOS
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <div className="flex gap-2">
              {[SiGithub, FaLinkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={i === 0 ? 'https://github.com/Sofnx32' : i === 1 ? 'https://linkedin.com/in/juan-carlos-ochoa' : 'mailto:juan.ochoa@tecsup.edu.pe'}
                  target="_blank"
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

          {/* Right: QR Code */}
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