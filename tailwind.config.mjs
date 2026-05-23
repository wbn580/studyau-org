/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003D7A',
        accent:  '#FBA82C',
        bg:      '#F8FAFC',
        ink:     '#0F172A',
        muted:   '#64748B',
      },
      fontFamily: {
        heading: ['Vesper Libre', 'Georgia', 'serif'],
        body:    ['Asap', 'system-ui', 'sans-serif'],
        mono:    ['Inconsolata', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
      },
    },
  },
  plugins: [],
};
