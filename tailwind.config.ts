import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgfooter: "var(--bg-footer)",
      },
      animation: {
        "slide-left-out": "0.2s ease-in forwards slide-left-out",
        "slide-left-in": "0.2s ease-out slide-left-in",
        "slide-right-out": "0.2s ease-in forwards slide-right-out",
        "slide-right-in": "0.2s ease-out slide-right-in",
      },
      keyframes: {
        "slide-left-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-left-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "slide-right-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.skewed-button': {
          position: 'relative',
          padding: '0rem 1rem 0.5rem 1rem',
        },
        '.skewed-button:before': {
          content: '""',
          display: 'block',
          backgroundColor: 'rgb(239 68 68)',
          height: 'calc(100% - 4px)',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          top: '0',
          left: '-2px',
          border: '2px solid var(--code-block-pink)',
          transform: 'skew(0deg, 0)',
          transformOrigin: 'left',
          borderRadius: '10px',
          transition: 'transform 0.3s ease',
        },
      });
    },
  ],
} satisfies Config;
