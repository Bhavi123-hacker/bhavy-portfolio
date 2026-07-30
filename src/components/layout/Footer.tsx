import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(5,5,5,0.9)',
      backdropFilter: 'blur(20px)',
    }}>
      <div className="section-container" style={{ padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <div className="font-heading font-bold" style={{ fontSize: '28px', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#00FF88' }}>B</span>havy<span style={{ color: '#00FF88' }}>.</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, maxWidth: '260px' }}>
              Software Engineer & ML Engineer. Building intelligent, scalable, and impactful software solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { icon: GithubIcon, href: PERSONAL_INFO.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 38, height: 38,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    color: '#71717a',
                    transition: 'all 0.2s ease',
                  }}
                  whileHover={{ color: '#00FF88', borderColor: 'rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.06)', y: -3 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.slice(0, 5).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{ color: '#71717a', fontSize: '14px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', transition: 'color 0.2s ease', width: 'fit-content' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FF88')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#71717a')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>More</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.slice(5).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{ color: '#71717a', fontSize: '14px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', transition: 'color 0.2s ease', width: 'fit-content' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FF88')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#71717a')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get In Touch</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: '#71717a', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FF88')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#71717a')}>
                {PERSONAL_INFO.email}
              </a>
              <span style={{ color: '#71717a', fontSize: '14px' }}>{PERSONAL_INFO.location}</span>
              <motion.a
                href={PERSONAL_INFO.resume}
                download
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4,
                  padding: '8px 16px', background: 'rgba(0,255,136,0.08)',
                  border: '1px solid rgba(0,255,136,0.25)', borderRadius: '8px',
                  color: '#00FF88', fontSize: '13px', fontWeight: 600, textDecoration: 'none', width: 'fit-content',
                }}
                whileHover={{ background: 'rgba(0,255,136,0.15)', boxShadow: '0 0 16px rgba(0,255,136,0.2)' }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#52525b', fontSize: '13px' }}>
            © {new Date().getFullYear()} Bhavy Garg. All rights reserved.
          </p>
          <p style={{ color: '#52525b', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Designed & developed with <Heart size={13} fill="#00FF88" style={{ color: '#00FF88' }} /> by Bhavy Garg
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
