import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/Hero/HeroSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Juan Carlos Ochoa Díaz | Full Stack Developer</title>
        <meta name="description" content="Portafolio de Juan Carlos Ochoa Díaz - Desarrollador Full Stack especializado en React, Next.js y MongoDB." />
        <meta property="og:title" content="Juan Carlos Ochoa Díaz | Full Stack Developer" />
        <meta property="og:image" content="/og-image.jpg" />
      </Helmet>
      
      {/* Tu contenido */}
      <HeroSection />
    </>
  );
}