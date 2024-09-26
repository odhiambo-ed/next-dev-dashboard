import localFont from "next/font/local";
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Your Name - Portfolio Dashboard',
  description: 'A modern, responsive portfolio website using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
      </ThemeProvider>
    </html>
  )
}
