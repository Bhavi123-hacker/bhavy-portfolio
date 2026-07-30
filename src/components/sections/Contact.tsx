import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionTitle from '@/components/ui/SectionTitle';
import { PERSONAL_INFO } from '@/lib/constants';
import { Mail, Phone, MapPin, Send, Copy, CheckCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

const EMAILJS_SERVICE_ID  = 'service_qvg0iaf';
const EMAILJS_TEMPLATE_ID = 'template_y6jx1bt';
const EMAILJS_PUBLIC_KEY  = 'S4bZRQKAziLmnUgpf';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setError(`Failed to send (${err?.text || err?.message || 'unknown error'}). Email me directly at ${PERSONAL_INFO.email}`);
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    {
      key: 'email',
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`,
      copyValue: PERSONAL_INFO.email,
    },
    {
      key: 'phone',
      icon: Phone,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone}`,
      copyValue: PERSONAL_INFO.phone,
    },
    {
      key: 'location',
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      link: null,
      copyValue: null,
    },
  ];

  const socialItems = [
    { icon: GithubIcon, label: 'GitHub', href: PERSONAL_INFO.github, handle: '@Bhavi123-hacker' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: PERSONAL_INFO.linkedin, handle: 'bhavy-garg' },
    { icon: Mail, label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, handle: PERSONAL_INFO.email },
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Contact"
          title={<>Let's <span className="text-gradient-green">Connect</span></>}
          subtitle="Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you."
          align="center"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: '32px', alignItems: 'start' }}>
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Contact details */}
            {contactItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(0,255,136,0.25)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '20px 24px',
                  background: 'rgba(13,13,13,0.85)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '12px',
                  background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <item.icon size={18} style={{ color: '#00FF88' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#52525b', fontSize: '12px', marginBottom: '3px', fontWeight: 500 }}>{item.label}</p>
                  {item.link ? (
                    <a href={item.link} style={{ color: '#a1a1aa', fontSize: '15px', textDecoration: 'none', fontWeight: 500 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: '#a1a1aa', fontSize: '15px', fontWeight: 500 }}>{item.value}</p>
                  )}
                </div>
                {item.copyValue && (
                  <motion.button
                    onClick={() => copyToClipboard(item.copyValue!, item.key)}
                    style={{
                      width: 34, height: 34, borderRadius: '8px', flexShrink: 0,
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: copied === item.key ? '#00FF88' : '#52525b',
                      transition: 'all 0.2s ease',
                    }}
                    whileHover={{ background: 'rgba(0,255,136,0.08)', borderColor: 'rgba(0,255,136,0.2)' }}
                    whileTap={{ scale: 0.9 }}
                    title="Copy to clipboard"
                  >
                    {copied === item.key ? <CheckCheck size={14} /> : <Copy size={14} />}
                  </motion.button>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}
            >
              {socialItems.map(({ icon: Icon, label, href, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1, minWidth: '140px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '14px 16px',
                    background: 'rgba(13,13,13,0.85)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ borderColor: 'rgba(0,255,136,0.25)', y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} style={{ color: '#00FF88' }} />
                  </div>
                  <div>
                    <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: 600 }}>{label}</p>
                    <p style={{ color: '#52525b', fontSize: '11px' }}>{handle}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '36px',
              background: 'rgba(13,13,13,0.85)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '48px', marginBottom: '16px' }}
                  >✅</motion.div>
                  <h3 className="font-heading" style={{ fontSize: '22px', fontWeight: 700, color: '#00FF88', marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ color: '#71717a', fontSize: '15px' }}>Thank you for reaching out. I'll get back to you soon.</p>
                  <motion.button
                    onClick={() => setSent(false)}
                    style={{ marginTop: '24px', padding: '10px 24px', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)', borderRadius: '10px', color: '#00FF88', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}
                    whileHover={{ background: 'rgba(0,255,136,0.15)' }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <h3 className="font-heading" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>Send a Message</h3>
                  <p style={{ color: '#52525b', fontSize: '13px', marginBottom: '8px' }}>Fill in the form below and I'll respond within 24 hours.</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#71717a', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>Name</label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#71717a', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>Email</label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#71717a', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project inquiry / Collaboration / Hello"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#71717a', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  {error && (
                    <p style={{ color: '#ff6b6b', fontSize: '13px', lineHeight: 1.5 }}>{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={sending}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      padding: '14px 28px',
                      background: sending ? 'rgba(0,255,136,0.06)' : '#00FF88',
                      border: '1px solid rgba(0,255,136,0.4)',
                      borderRadius: '12px',
                      color: sending ? '#00FF88' : '#050505',
                      fontSize: '15px',
                      fontWeight: 700,
                      cursor: sending ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={!sending ? { boxShadow: '0 0 30px rgba(0,255,136,0.4)', scale: 1.02 } : {}}
                    whileTap={!sending ? { scale: 0.98 } : {}}
                  >
                    {sending ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 18, height: 18, border: '2px solid rgba(0,255,136,0.3)', borderTopColor: '#00FF88', borderRadius: '50%' }} />
                    ) : (
                      <Send size={16} />
                    )}
                    {sending ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
