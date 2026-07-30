import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';

// Layout
import Background from '@/components/layout/Background';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import GitHub from '@/components/sections/GitHub';
import CodingProfiles from '@/components/sections/CodingProfiles';
import Leadership from '@/components/sections/Leadership';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  useLenis();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#050505' }}>
      <Background />
      <CustomCursor />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Hero />
            <Divider />
            <About />
            <Divider />
            <Education />
            <Divider />
            <Experience />
            <Divider />
            <Skills />
            <Divider />
            <Services />
            <Divider />
            <Projects />
            <Divider />
            <GitHub />
            <Divider />
            <CodingProfiles />
            <Divider />
            <Leadership />
            <Divider />
            <Certifications />
            <Divider />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
