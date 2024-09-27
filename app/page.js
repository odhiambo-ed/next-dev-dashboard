'use client';

import { useState, useEffect } from 'react';
import TopNavBar from './components/layout/TopNavBar'
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSection, setSelectedSection] = useState('about');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSectionSelect = (sectionId) => {
    setSelectedSection(sectionId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <TopNavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isMobile={isMobile}
          onSectionSelect={handleSectionSelect}
        />
        <div className="flex-1 overflow-auto">
        <MainContent selectedSection={selectedSection} />
      </div>
    </div>
    </div>
  )
}
