import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { PROJECTS, ProjectItem } from '@/lib/constants';
import { ExternalLink, ArrowRight, Star, BookOpen } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'rgba(13,13,13,0.9)',
        border: `1px solid ${hovered ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
        boxShadow: hovered ? '0 24px 70px rgba(0,0,0,0.6), 0 0 50px rgba(0,255,136,0.1)' : '0 4px 24px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Mouse spotlight */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: `radial-gradient(500px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,255,136,0.06), transparent 60%)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Project image (16:9 crisp high-res) */}
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
            filter: 'brightness(0.85)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(13,13,13,0.95) 100%)',
        }} />

        {/* Category chip on image */}
        <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
          <span style={{
            padding: '4px 12px',
            background: 'rgba(0,255,136,0.15)',
            border: '1px solid rgba(0,255,136,0.3)',
            borderRadius: '20px',
            color: '#00FF88',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: 'JetBrains Mono, monospace',
            backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </span>
        </div>

        {project.featured && (
          <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
            <span style={{
              padding: '4px 10px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '20px',
              color: '#ffd700',
              fontSize: '11px',
              fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: '4px',
              backdropFilter: 'blur(8px)',
            }}>
              <Star size={11} fill="#ffd700" /> Featured
            </span>
          </div>
        )}

        {/* Top border glow */}
        {hovered && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: `linear-gradient(90deg, transparent, rgba(0,255,136,0.9) ${spotlight.x}%, transparent)`,
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2 }}>
        <h3 className="font-heading" style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
          {project.title}
        </h3>
        <p style={{ color: '#00FF88', fontSize: '13px', fontWeight: 600, marginBottom: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
          {project.tagline}
        </p>
        <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.65, marginBottom: '16px', flex: 1 }}>
          {project.description}
        </p>

        {/* Key Highlights */}
        <div style={{ marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {project.highlights.slice(0, 2).map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: '#00FF88', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>▸</span>
              <span style={{ color: '#a1a1aa', fontSize: '13px', lineHeight: 1.5 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} style={{
              padding: '3px 10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '5px',
              color: '#71717a',
              fontSize: '12px',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span style={{ padding: '3px 10px', color: '#52525b', fontSize: '12px' }}>+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Link
            to={`/project/${project.id}`}
            style={{
              flex: 1.2,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '10px 14px',
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.25)',
              borderRadius: '10px',
              color: '#00FF88',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
          >
            <BookOpen size={14} /> Case Study
          </Link>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '10px 14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              color: '#a1a1aa',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
            whileHover={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon size={14} /> GitHub
          </motion.a>

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#a1a1aa',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
              whileHover={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={14} /> Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Projects"
          title={<>Featured <span className="text-gradient-green">Engineering Projects</span></>}
          subtitle="Click any Case Study for dedicated in-depth architecture diagrams, features, challenges, and database schemas."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px,1fr))', gap: '24px' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <motion.a
            href="https://github.com/Bhavi123-hacker"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              color: '#a1a1aa',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
            whileHover={{ color: '#00FF88', borderColor: 'rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.06)', y: -3 }}
          >
            <GithubIcon size={18} /> View All Projects on GitHub <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
