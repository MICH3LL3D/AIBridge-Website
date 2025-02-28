'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      position: 'relative',
      backgroundImage: "url('/aibridge-website/img/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'  // This makes the background stay fixed while scrolling
    }}>
      <Navbar />
      <HeroSection />
      <MissionSection />
    </main>
  )
} 