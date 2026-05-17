/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a3a5c',
        secondary: '#2e6ca4',
        accent: '#5fa8d3',
        silver: '#8da8bf',
        pale: '#d6eaf8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a3a5c 0%, #2e6ca4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #2e6ca4 0%, #5fa8d3 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(26,58,92,0.2) 0%, rgba(26,58,92,0.85) 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26,58,92,0.08)',
        'card-hover': '0 12px 40px rgba(26,58,92,0.18)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
};
