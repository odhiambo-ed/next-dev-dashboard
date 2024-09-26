'use client';

import TopNavBar from './components/layout/TopNavBar'
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopNavBar />
        <MainContent />
      </div>
    </div>
  )
}
