import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { PERSONAL_INFO } from '@/lib/constants';
import { Star, GitFork, Code, ExternalLink, Users, BookOpen, Activity } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface GHRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface GHUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

const langColors: Record<string, string> = {
  Python: '#3776ab',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Java: '#b07219',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Jupyter: '#da5b0b',
  Shell: '#89e051',
};

function SkeletonCard() {
  return (
    <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="skeleton" style={{ height: 20, width: '60%', marginBottom: 12 }} />
      <div className="skeleton" style={{ height: 14, width: '90%', marginBottom: 8 }} />
      <div className="skeleton" style={{ height: 14, width: '70%', marginBottom: 20 }} />
      <div style={{ display: 'flex', gap: 12 }}>
        <div className="skeleton" style={{ height: 20, width: 60 }} />
        <div className="skeleton" style={{ height: 20, width: 50 }} />
      </div>
    </div>
  );
}

export default function GitHub() {
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [user, setUser] = useState<GHUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=10`),
          fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`),
        ]);
        const reposData = await reposRes.json();
        const userData = await userRes.json();
        setRepos(Array.isArray(reposData) ? reposData : []);
        setUser(userData);
      } catch {
        setUser({ public_repos: 8, followers: 0, following: 0, avatar_url: '' });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalStars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);

  // Compute real top languages dynamically from API repositories data
  const langCounts: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });

  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
  const sortedLangs = Object.entries(langCounts)
    .map(([lang, count]) => ({
      name: lang,
      count,
      pct: Math.round((count / totalLangRepos) * 100),
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <section id="github" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="GitHub Integration"
          title={<>Live Open Source <span className="text-gradient-green">Repositories</span></>}
          subtitle="Real-time repository metrics and code fetched directly from the GitHub REST API."
        />

        {/* Real User Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', marginBottom: '32px' }}
        >
          {[
            { icon: BookOpen, label: 'Public Repositories', value: user?.public_repos ?? 8 },
            { icon: Star, label: 'Total Stars', value: totalStars },
            { icon: Users, label: 'Followers', value: user?.followers ?? 0 },
            { icon: Activity, label: 'Following', value: user?.following ?? 0 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, borderColor: 'rgba(0,255,136,0.3)', boxShadow: '0 12px 30px rgba(0,255,136,0.08)' }}
              style={{
                padding: '20px',
                background: 'rgba(13,13,13,0.85)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <stat.icon size={16} style={{ color: '#00FF88' }} />
              </div>
              <div className="font-heading" style={{ fontSize: '28px', fontWeight: 700, color: '#00FF88' }}>{stat.value}</div>
              <div style={{ color: '#52525b', fontSize: '12px', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Authentic Language Breakdown (Computed strictly from fetched repos) */}
        {sortedLangs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '28px',
              background: 'rgba(13,13,13,0.85)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <GithubIcon size={18} color="#00FF88" />
              <h3 className="font-heading" style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>
                Top Languages Across Repositories
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {sortedLangs.map((lang) => (
                <div key={lang.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', color: '#a1a1aa', fontFamily: 'JetBrains Mono, monospace' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: langColors[lang.name] || '#00FF88', display: 'inline-block' }} />
                      {lang.name}
                    </span>
                    <span style={{ color: '#00FF88', fontWeight: 600 }}>{lang.pct}% ({lang.count} repos)</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ height: '100%', background: langColors[lang.name] || '#00FF88', borderRadius: '3px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Real Repositories Grid */}
        <div style={{ marginBottom: '16px' }}>
          <h3 className="font-heading" style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
            Featured & Pinned Repositories
          </h3>
        </div>

        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '20px' }}>
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '20px' }}>
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -8, borderColor: 'rgba(0,255,136,0.25)', boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,255,136,0.06)' }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  padding: '24px',
                  background: 'rgba(13,13,13,0.85)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.35s ease',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Code size={15} style={{ color: '#00FF88', flexShrink: 0 }} />
                    <span className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
                      {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                    </span>
                  </div>
                  <ExternalLink size={13} style={{ color: '#52525b', flexShrink: 0 }} />
                </div>

                <p style={{ color: '#71717a', fontSize: '13px', lineHeight: 1.6, flex: 1, marginBottom: '16px' }}>
                  {repo.description || 'No description provided.'}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  {repo.language && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#a1a1aa', fontSize: '12px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: langColors[repo.language] || '#00FF88', display: 'inline-block' }} />
                      {repo.language}
                    </span>
                  )}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#71717a', fontSize: '12px' }}>
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#71717a', fontSize: '12px' }}>
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                  <span style={{ color: '#3f3f46', fontSize: '11px', marginLeft: 'auto' }}>
                    {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 28px',
              background: 'rgba(0,255,136,0.06)',
              border: '1px solid rgba(0,255,136,0.2)',
              borderRadius: '12px',
              color: '#00FF88', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
            }}
            whileHover={{ background: 'rgba(0,255,136,0.14)', boxShadow: '0 0 24px rgba(0,255,136,0.18)', scale: 1.02 }}
          >
            View Full GitHub Profile (@{PERSONAL_INFO.githubUsername}) →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
