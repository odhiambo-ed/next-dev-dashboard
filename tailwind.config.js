/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vscode-bg': 'var(--vscode-bg)',
        'vscode-sidebar-bg': 'var(--vscode-sidebar-bg)',
        'vscode-text': 'var(--vscode-text)',
        'vscode-active-tab': 'var(--vscode-active-tab)',
        'vscode-inactive-tab': 'var(--vscode-inactive-tab)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
