'use client';

import { useState } from 'react';
import TopNavBar from './components/layout/TopNavBar'
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <TopNavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <MainContent />
      </div>
    </div>
  )
}
