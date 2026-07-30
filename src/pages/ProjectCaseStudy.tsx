import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS, ProjectItem } from '@/lib/constants';
import Background from '@/components/layout/Background';
import CustomCursor from '@/components/layout/CustomCursor';
import Lightbox from '@/components/ui/Lightbox';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, ExternalLink, Layers, Cpu, Database, CheckCircle2, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function ProjectCaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ffffff', padding: '24px' }}>
        <Background />
        <h1 className="font-heading" style={{ fontSize: '32px', marginBottom: '16px' }}>Project Not Found</h1>
        <p style={{ color: '#71717a', marginBottom: '24px' }}>The requested case study could not be found.</p>
        <Link to="/" style={{ padding: '12px 24px', background: '#00FF88', borderRadius: '10px', color: '#050505', fontWeight: 700, textDecoration: 'none' }}>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#050505', color: '#ffffff', overflowX: 'hidden' }}>
      <Background />
      <CustomCursor />

      {/* Main Case Study Container */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Navigation Bar / Back link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '32px' }}
        >
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 18px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              color: '#a1a1aa',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00FF88';
              e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)';
              e.currentTarget.style.background = 'rgba(0,255,136,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a1a1aa';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            <ArrowLeft size={16} /> Back to portfolio
          </button>
        </motion.div>

        {/* Huge Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '520px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 255, 136, 0.25)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 50px rgba(0, 255, 136, 0.1)',
            marginBottom: '40px',
            position: 'relative',
          }}
        >
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(5,5,5,0.9) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
            <span style={{
              padding: '6px 14px', background: 'rgba(0,255,136,0.15)',
              border: '1px solid rgba(0,255,136,0.3)', borderRadius: '20px',
              color: '#00FF88', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
              fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', backdropFilter: 'blur(8px)',
            }}>
              {project.category} · Engineering Case Study
            </span>
          </div>
        </motion.div>

        {/* Title & Header Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '40px' }}
        >
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '12px' }}>
            {project.title}
          </h1>
          <p style={{ color: '#00FF88', fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace', marginBottom: '24px' }}>
            {project.tagline} — {project.subTagline}
          </p>

          {/* Action links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', background: '#00FF88', borderRadius: '12px',
                color: '#050505', fontSize: '14px', fontWeight: 700, textDecoration: 'none',
              }}
              whileHover={{ boxShadow: '0 0 30px rgba(0,255,136,0.4)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <GithubIcon size={16} color="#050505" /> Repository
            </motion.a>

            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', background: 'rgba(0,255,136,0.12)',
                  border: '1px solid rgba(0,255,136,0.3)', borderRadius: '12px',
                  color: '#00FF88', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
                }}
                whileHover={{ background: 'rgba(0,255,136,0.2)', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={16} /> Live Demo
              </motion.a>
            )}

            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              color: '#a1a1aa', fontSize: '14px', fontFamily: 'JetBrains Mono, monospace',
            }}>
              📅 {cs.timeline}
            </span>

            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              color: '#a1a1aa', fontSize: '14px', fontFamily: 'JetBrains Mono, monospace',
            }}>
              👥 {cs.teamSize}
            </span>
          </div>

          {/* Tech Stack Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech) => (
              <span key={tech} style={{
                padding: '6px 14px', background: 'rgba(0,255,136,0.06)',
                border: '1px solid rgba(0,255,136,0.18)', borderRadius: '8px',
                color: '#00FF88', fontSize: '13px', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace',
              }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content Body Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Overview */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '12px' }}>
              Overview
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.7 }}>{cs.overview}</p>
          </div>

          {/* Problem Statement */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '12px' }}>
              Problem statement
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.7 }}>{cs.problemStatement}</p>
          </div>

          {/* Solution */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '12px' }}>
              Solution
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.7 }}>{cs.solution}</p>
          </div>

          {/* Key Features */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Key features
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cs.keyFeatures.map((feat, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00FF88', fontSize: '16px', marginTop: '1px' }}>▪</span>
                  <span style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.6 }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Architecture
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '16px 20px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#a1a1aa', fontSize: '14px', fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: '#00FF88', fontWeight: 700, marginRight: '10px' }}>01 Client</span> — {cs.architecture.client}
              </div>
              <div style={{ padding: '16px 20px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#a1a1aa', fontSize: '14px', fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: '#00FF88', fontWeight: 700, marginRight: '10px' }}>02 API</span> — {cs.architecture.api}
              </div>
              <div style={{ padding: '16px 20px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#a1a1aa', fontSize: '14px', fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: '#00FF88', fontWeight: 700, marginRight: '10px' }}>03 Data</span> — {cs.architecture.data}
              </div>
            </div>
          </div>

          {/* Database Schema / ML Pipeline */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Database schema & Data flow
            </h2>
            <div style={{ padding: '20px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '12px', color: '#00FF88', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: 1.7, overflowX: 'auto' }}>
              {cs.databaseSchema}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Highlights
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cs.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00FF88', fontSize: '16px', marginTop: '1px' }}>▪</span>
                  <span style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.6 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges faced */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Challenges faced
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cs.challengesFaced.map((item, i) => (
                <div key={i} style={{ padding: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons learned */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Lessons learned
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cs.lessonsLearned.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00FF88', fontSize: '16px', marginTop: '1px' }}>▪</span>
                  <span style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Screenshots Gallery (Click to expand)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                { url: project.image, caption: `${project.title} — Main Dashboard View` },
                { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=90', caption: 'System Metrics & Analytics Visuals' },
                { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90', caption: 'Data Processing & Flow Interface' },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(0,255,136,0.4)' }}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer', background: '#111', position: 'relative',
                  }}
                >
                  <img src={img.url} alt={img.caption} loading="lazy" style={{ width: '100%', height: '170px', objectFit: 'cover' }} />
                  <div style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.8)', color: '#a1a1aa', fontSize: '12px' }}>
                    {img.caption}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future improvements */}
          <div style={{ padding: '28px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', backdropFilter: 'blur(12px)' }}>
            <h2 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#00FF88', marginBottom: '16px' }}>
              Future improvements
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cs.futureImprovements.map((fi, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00FF88', fontSize: '16px', marginTop: '1px' }}>▪</span>
                  <span style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.6 }}>{fi}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Want full walkthrough card */}
          <div style={{
            padding: '40px 32px', textAlign: 'center', background: 'rgba(13,13,13,0.95)',
            border: '1px solid rgba(0,255,136,0.2)', borderRadius: '24px',
            marginTop: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <h2 className="font-heading" style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              Want the full walkthrough?
            </h2>
            <p style={{ color: '#71717a', fontSize: '15px', marginBottom: '24px' }}>
              Screenshots and a demo video will be added as the project evolves.
            </p>

            <motion.button
              onClick={() => navigate('/')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', background: 'rgba(0,255,136,0.12)',
                border: '1px solid rgba(0,255,136,0.3)', borderRadius: '24px',
                color: '#00FF88', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
              }}
              whileHover={{ background: 'rgba(0,255,136,0.2)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore more projects
            </motion.button>
          </div>

        </div>

      </div>

      <Footer />

      {/* Lightbox Modal for gallery photos */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
