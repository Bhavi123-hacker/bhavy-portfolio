import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { PERSONAL_INFO } from '@/lib/constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

// ─── Platform SVG icons ──────────────────────────────────────────────────────

function GithubSVG() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
    </svg>
  );
}

function LeetCodeSVG() {
  return (
    <svg viewBox="0 0 50 50" width="22" height="22" fill="currentColor">
      <path d="M35.001 46.8c-.19 0-.383-.026-.576-.082l-10.09-2.94a1.45 1.45 0 01-1.01-1.385V36.63a1.45 1.45 0 011.578-1.443c.218.018.433.079.63.183L34.76 39.5a.5.5 0 00.483-.007l7.02-4.133a.47.47 0 00.237-.409V23.05a.47.47 0 00-.237-.409l-14.5-8.534a.47.47 0 00-.486 0l-8.33 4.9a1.45 1.45 0 01-1.454-2.51l8.33-4.9a3.37 3.37 0 013.394 0l14.5 8.534a3.37 3.37 0 011.683 2.919v11.9a3.37 3.37 0 01-1.683 2.919l-7.02 4.133a1.45 1.45 0 01-.696.178z"/>
      <path d="M14.999 46.8a1.45 1.45 0 01-.696-.178l-7.02-4.133a3.37 3.37 0 01-1.683-2.919V27.67a3.37 3.37 0 011.683-2.919l14.5-8.534a3.37 3.37 0 013.394 0l8.33 4.9a1.45 1.45 0 11-1.454 2.51l-8.33-4.9a.47.47 0 00-.486 0l-14.5 8.534a.47.47 0 00-.237.409V39.55a.47.47 0 00.237.409l7.02 4.133a.5.5 0 00.483.007l9.227-4.13a1.45 1.45 0 011.208 2.632l-9.227 4.13a1.45 1.45 0 01-.45.069z"/>
    </svg>
  );
}

function CodeforcesSVG() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z"/>
    </svg>
  );
}

function CodeChefSVG() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M11.257.004C5.487.252.364 4.887.023 10.649c-.198 3.354.95 6.33 3.058 8.563v.001l.18.192c.401.42.836.815 1.3 1.18v-.001c1.656 1.29 3.716 2.12 6.005 2.28a.74.74 0 00.428-.04v-3.014a7.26 7.26 0 01-3.07-1.16 7.17 7.17 0 01-1.044-.844L6.72 17.66a7.5 7.5 0 01-1.978-5.11 7.5 7.5 0 017.5-7.5 7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-1.978 5.11l-.16.166a7.17 7.17 0 01-1.044.844 7.26 7.26 0 01-3.07 1.16v3.014a.74.74 0 00.428.04c2.289-.16 4.349-.99 6.005-2.28v.001a12.5 12.5 0 001.3-1.18l.18-.192v-.001C23.412 17.5 24.56 14 24.012 10.649 23.636 4.887 18.512.252 12.743.004a12.5 12.5 0 00-1.486 0z"/>
    </svg>
  );
}

function GFGSVG() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 01-2.387.837h-.099a3.69 3.69 0 01-2.387-.837 3.69 3.69 0 01-.565-.745L12 10.677l-3.447 3.638a3.691 3.691 0 01-.565.745 3.69 3.69 0 01-2.387.837h-.099a3.69 3.69 0 01-2.387-.837 3.691 3.691 0 01-.565-.745C2.044 13.606 2 13.466 2 13.32c0-.428.22-.809.553-1.027L4.18 11.25a3.691 3.691 0 012.387-.837h.099a3.69 3.69 0 012.387.837c.05.042.1.085.147.13L12 14.323l2.8-2.943c.047-.045.097-.088.147-.13a3.69 3.69 0 012.387-.837h.099a3.691 3.691 0 012.387.837l1.627 1.043c.333.218.553.6.553 1.027 0 .146-.044.286-.55.995z"/>
    </svg>
  );
}

// ─── Static platform data ─────────────────────────────────────────────────────

const STATIC_PLATFORMS = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    handle: 'bhavygarg6969',
    url: 'https://leetcode.com/u/bhavygarg6969/',
    Icon: LeetCodeSVG,
    color: '#FFA116',
    description: 'Actively solving algorithmic problems across Easy, Medium, and Hard difficulty levels.',
    stats: [
      { label: 'Contest Rating', value: '1490', highlighted: true },
      { label: 'Problems Solved', value: '170+', highlighted: false },
    ],
  },
  {
    id: 'codeforces',
    platform: 'Codeforces',
    handle: 'bhaviiii',
    url: 'https://codeforces.com/profile/bhaviiii',
    Icon: CodeforcesSVG,
    color: '#1F8ACB',
    description: 'Participating in rated contests and developing algorithmic problem-solving depth.',
    stats: [
      { label: 'Current Rating', value: '940', highlighted: true },
      { label: 'Rank', value: 'Newbie', highlighted: false },
    ],
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    handle: 'bhavygarg',
    url: 'https://www.codechef.com/users/bhavygarg',
    Icon: CodeChefSVG,
    color: '#7B4F2E',
    description: 'Practicing long challenges, timed contests, and competitive programming problems.',
    stats: [
      { label: 'Division', value: 'Div 4', highlighted: true },
      { label: 'Status', value: 'Active', highlighted: false },
    ],
  },
  {
    id: 'gfg',
    platform: 'GeeksforGeeks',
    handle: 'bhavygarg',
    url: 'https://auth.geeksforgeeks.org/user/bhavygarg',
    Icon: GFGSVG,
    color: '#2F8D46',
    description: 'Mastering core DSA concepts, algorithm implementations, and interview preparation.',
    stats: [
      { label: 'Focus', value: 'DSA + CP', highlighted: true },
      { label: 'Practice', value: 'Active', highlighted: false },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatItem { label: string; value: string; highlighted: boolean }
interface Platform {
  id: string; platform: string; handle: string; url: string;
  Icon: React.FC; color: string; description: string; stats: StatItem[];
}

// ─── ProfileCard ─────────────────────────────────────────────────────────────

function ProfileCard({ item, delay }: { item: Platform; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ height: '100%' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '28px',
          background: 'rgba(13,13,13,0.88)',
          border: `1px solid ${hovered ? 'rgba(0,255,136,0.28)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: '20px',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          transform: hovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: hovered
            ? '0 28px 60px rgba(0,0,0,0.55), 0 0 40px rgba(0,255,136,0.08)'
            : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'transform 0.38s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.38s ease',
        }}
      >
        {/* Cursor-following radial spotlight */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: 0,
          background: `radial-gradient(380px circle at ${mouse.x}% ${mouse.y}%, rgba(0,255,136,0.07), transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }} />

        {/* Top animated border glow (follows cursor X) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.85) ${mouse.x}%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none', zIndex: 1,
          borderRadius: '20px 20px 0 0',
        }} />

        {/* Card content */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>

          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              {/* Platform icon */}
              <div style={{
                width: 46, height: 46, borderRadius: '13px', flexShrink: 0,
                background: 'rgba(0,255,136,0.07)',
                border: '1px solid rgba(0,255,136,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00FF88',
                transition: 'all 0.3s ease',
                boxShadow: hovered ? '0 0 18px rgba(0,255,136,0.12)' : 'none',
              }}>
                <item.Icon />
              </div>
              <div>
                <h3 className="font-heading" style={{
                  fontSize: '18px', fontWeight: 700, color: '#ffffff',
                  lineHeight: 1.2, letterSpacing: '-0.01em',
                }}>
                  {item.platform}
                </h3>
                <p style={{
                  color: '#00FF88', fontSize: '11.5px',
                  fontFamily: 'JetBrains Mono, monospace',
                  marginTop: '3px', letterSpacing: '0.02em',
                }}>
                  @{item.handle}
                </p>
              </div>
            </div>

            {/* External link chip */}
            <div style={{
              width: 32, height: 32, borderRadius: '9px',
              background: hovered ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${hovered ? 'rgba(0,255,136,0.25)' : 'rgba(255,255,255,0.08)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: hovered ? '#00FF88' : '#52525b',
              transform: hovered ? 'translate(2px,-2px) rotate(10deg)' : 'none',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}>
              <ExternalLink size={13} />
            </div>
          </div>

          {/* Description */}
          <p style={{
            color: '#71717a', fontSize: '13.5px', lineHeight: 1.7,
            marginBottom: '20px', flex: 1,
          }}>
            {item.description}
          </p>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
            {item.stats.map((stat) => (
              <div key={stat.label} style={{
                padding: '13px 10px',
                background: stat.highlighted ? 'rgba(0,255,136,0.05)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${stat.highlighted ? 'rgba(0,255,136,0.16)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '11px',
                textAlign: 'center',
              }}>
                <div style={{
                  color: '#3f3f46', fontSize: '10px', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  fontFamily: 'JetBrains Mono, monospace', marginBottom: '5px',
                }}>
                  {stat.label}
                </div>
                <div className="font-heading" style={{
                  fontSize: '20px', fontWeight: 700,
                  color: stat.highlighted ? '#00FF88' : '#e4e4e7',
                  letterSpacing: '-0.01em',
                }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* View Profile button */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
              padding: '11px 16px',
              background: hovered ? 'rgba(0,255,136,0.10)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${hovered ? 'rgba(0,255,136,0.28)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '11px',
              color: hovered ? '#00FF88' : '#a1a1aa',
              fontSize: '13px', fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            View Profile
            <ArrowRight
              size={13}
              style={{
                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── GitHub live card ────────────────────────────────────────────────────────

function GitHubCard({ delay }: { delay: number }) {
  const [data, setData] = useState<{ repos: number; followers: number; following: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`)
      .then((r) => r.json())
      .then((d) => setData({ repos: d.public_repos, followers: d.followers, following: d.following }))
      .catch(() => setData({ repos: 8, followers: 0, following: 0 }))
      .finally(() => setLoading(false));
  }, []);

  const ghItem: Platform = {
    id: 'github',
    platform: 'GitHub',
    handle: PERSONAL_INFO.githubUsername,
    url: PERSONAL_INFO.github,
    Icon: GithubSVG,
    color: '#ffffff',
    description: 'Open source developer with repositories in ML pipelines, ETL systems, and full-stack web applications.',
    stats: loading
      ? [
          { label: 'Public Repos', value: '—', highlighted: true },
          { label: 'Followers', value: '—', highlighted: false },
        ]
      : [
          { label: 'Public Repos', value: String(data?.repos ?? '—'), highlighted: true },
          { label: 'Followers', value: String(data?.followers ?? '—'), highlighted: false },
        ],
  };

  return <ProfileCard item={ghItem} delay={delay} />;
}

// ─── Skeleton ────────────────────────────────────────────────────────────────

function Skeleton() {
  return (
    <div style={{
      padding: '28px', background: 'rgba(13,13,13,0.88)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '20px', height: '100%', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        <div className="skeleton" style={{ width: 46, height: 46, borderRadius: 13 }} />
        <div style={{ flex: 1 }}>
          <div className="skeleton" style={{ height: 16, width: '55%', marginBottom: 8, borderRadius: 4 }} />
          <div className="skeleton" style={{ height: 11, width: '38%', borderRadius: 4 }} />
        </div>
      </div>
      <div className="skeleton" style={{ height: 13, width: '92%', marginBottom: 7, borderRadius: 4 }} />
      <div className="skeleton" style={{ height: 13, width: '78%', marginBottom: 24, borderRadius: 4 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
        <div className="skeleton" style={{ height: 56, borderRadius: 11 }} />
        <div className="skeleton" style={{ height: 56, borderRadius: 11 }} />
      </div>
      <div className="skeleton" style={{ height: 40, borderRadius: 11 }} />
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function CodingProfiles() {
  return (
    <section id="coding" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Competitive Programming"
          title={<>Coding <span className="text-gradient-green">Profiles</span></>}
          subtitle="Building problem-solving velocity across competitive programming platforms and open source. Real data, no decoration."
        />

        {/* Responsive 3-col → 2-col → 1-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
          className="coding-grid"
        >
          {/* GitHub — live data */}
          <GitHubCard delay={0} />

          {/* Static platforms */}
          {STATIC_PLATFORMS.map((item, i) => (
            <ProfileCard key={item.id} item={item} delay={(i + 1) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
