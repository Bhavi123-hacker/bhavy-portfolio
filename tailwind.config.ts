import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#0a0a0a',
          elevated: '#111111',
          card: '#0d0d0d',
        },
        accent: {
          green: '#00FF88',
          'green-dim': '#00cc6a',
          'green-glow': 'rgba(0,255,136,0.15)',
          'green-border': 'rgba(0,255,136,0.3)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
          muted: '#71717a',
          subtle: '#3f3f46',
        },
        border: {
          default: 'rgba(255,255,255,0.08)',
          accent: 'rgba(0,255,136,0.3)',
          hover: 'rgba(0,255,136,0.5)',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['80px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-sm': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['52px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-sm': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body': ['18px', { lineHeight: '1.7' }],
        'small': ['15px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
      },
      spacing: {
        'section-y': '120px',
        'section-y-sm': '80px',
        'card-p': '32px',
        'card-p-sm': '24px',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '24px',
        'btn': '10px',
        'chip': '6px',
        'badge': '6px',
      },
      boxShadow: {
        'green-glow': '0 0 30px rgba(0,255,136,0.2)',
        'green-glow-lg': '0 0 60px rgba(0,255,136,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,255,136,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scan-line': 'scanLine 2s linear infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '25%': { transform: 'translateY(-30px) translateX(15px)', opacity: '0.8' },
          '75%': { transform: 'translateY(-15px) translateX(-10px)', opacity: '0.5' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
      backdropBlur: {
        xs: '4px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
