import './globals.css'
import '@/styles/fonts.css';
import { ThemeProvider } from './contexts/ThemeContext';

export const metadata = {
  title: 'Your Name - Portfolio Dashboard',
  description: 'A modern, responsive portfolio website using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="font-['Playwrite_NG_Modern',_sans-serif] antialiased">
        {children}
      </body>
      </ThemeProvider>
    </html>
  )
}
