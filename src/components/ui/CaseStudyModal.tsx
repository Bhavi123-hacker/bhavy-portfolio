import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '@/lib/constants';
import { X, ExternalLink, ArrowLeft, Layers, Code, CheckCircle2, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99995,
          background: 'rgba(5, 5, 5, 0.92)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '24px 16px',
          overflowY: 'auto',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '860px',
            background: '#070707',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '36px 32px',
            boxShadow: '0 30px 100px rgba(0,0,0,0.9), 0 0 50px rgba(0,255,136,0.06)',
            position: 'relative',
            color: '#ffffff',
            margin: 'auto',
          }}
        >
          {/* Back button */}
          <button
            onClick={onClose}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'none', border: 'none', color: '#71717a',
              fontSize: '13px', cursor: 'pointer', marginBottom: '24px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00FF88')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
          >
            <ArrowLeft size={14} /> Back to portfolio
          </button>

          {/* Title Header */}
          <h1 className="font-heading" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '6px' }}>
            {project.title} — {project.tagline}
          </h1>
          <p style={{ color: '#00FF88', fontSize: '15px', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace', marginBottom: '20px' }}>
            {project.subTagline}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
            {project.technologies.map((tech) => (
              <span key={tech} style={{
                padding: '4px 12px', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px',
                color: '#a1a1aa', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace',
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Badges row (Repository, Period, Team) */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '8px 16px', background: '#00FF88', borderRadius: '20px',
                color: '#050505', fontSize: '13px', fontWeight: 700, textDecoration: 'none',
              }}
              whileHover={{ scale: 1.04 }}
            >
              <GithubIcon size={14} color="#050505" /> Repository
            </motion.a>

            <span style={{
              padding: '8px 16px', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px',
              color: '#a1a1aa', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace',
            }}>
              📅 {cs.timeline}
            </span>

            <span style={{
              padding: '8px 16px', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px',
              color: '#a1a1aa', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace',
            }}>
              👥 {cs.teamSize}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Overview */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '10px' }}>
                Overview
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.7 }}>{cs.overview}</p>
            </div>

            {/* Problem statement */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '10px' }}>
                Problem statement
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.7 }}>{cs.problemStatement}</p>
            </div>

            {/* Solution */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '10px' }}>
                Solution
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.7 }}>{cs.solution}</p>
            </div>

            {/* Key features */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Key features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cs.keyFeatures.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00FF88', fontSize: '14px', marginTop: '1px' }}>▪</span>
                    <span style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Architecture
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: '#a1a1aa', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>
                  <span style={{ color: '#00FF88', fontWeight: 700, marginRight: '8px' }}>01</span> {cs.architecture.client}
                </div>
                <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: '#a1a1aa', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>
                  <span style={{ color: '#00FF88', fontWeight: 700, marginRight: '8px' }}>02</span> {cs.architecture.api}
                </div>
                <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: '#a1a1aa', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>
                  <span style={{ color: '#00FF88', fontWeight: 700, marginRight: '8px' }}>03</span> {cs.architecture.data}
                </div>
              </div>
            </div>

            {/* Database schema */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Database schema
              </h3>
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', color: '#a1a1aa', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: 1.6 }}>
                {cs.databaseSchema}
              </div>
            </div>

            {/* Highlights */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Highlights
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cs.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00FF88', fontSize: '14px', marginTop: '1px' }}>▪</span>
                    <span style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges faced */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Challenges faced
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cs.challengesFaced.map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>{item.title}</span>
                    <span style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons learned */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Lessons learned
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cs.lessonsLearned.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00FF88', fontSize: '14px', marginTop: '1px' }}>▪</span>
                    <span style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Future improvements */}
            <div style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}>
              <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#00FF88', marginBottom: '14px' }}>
                Future improvements
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cs.futureImprovements.map((fi, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00FF88', fontSize: '14px', marginTop: '1px' }}>▪</span>
                    <span style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>{fi}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Want full walkthrough card */}
            <div style={{
              padding: '32px', textAlign: 'center', background: 'rgba(13,13,13,0.9)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px',
              marginTop: '12px',
            }}>
              <h3 className="font-heading" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Want the full walkthrough?
              </h3>
              <p style={{ color: '#71717a', fontSize: '14px', marginBottom: '20px' }}>
                Screenshots and a demo video will be added as the project evolves.
              </p>

              <motion.button
                onClick={onClose}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', background: 'rgba(0,255,136,0.12)',
                  border: '1px solid rgba(0,255,136,0.3)', borderRadius: '24px',
                  color: '#00FF88', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                }}
                whileHover={{ background: 'rgba(0,255,136,0.2)', scale: 1.03 }}
              >
                Explore more projects
              </motion.button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
