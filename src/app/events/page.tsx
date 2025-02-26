'use client'
import React from 'react'
import Navbar from '@/components/Navbar'

export default function EventsPage() {
  return (
    <main style={{
      minHeight: '100vh',      margin: 0,
      padding: 0,
      position: 'relative',
      backgroundImage: "url('/img/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar />
      <div style={{
        paddingTop: '100px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{ color: 'white', fontSize: '3rem', textAlign: 'center', paddingTop: '5rem' }}>Events</h1>
        {/* Add your events content here */}
      </div>
    </main>
  )
} 