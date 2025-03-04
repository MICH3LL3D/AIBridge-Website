'use client'
import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    setIsVisible(true)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <h1 style={{
        fontSize: isMobile ? '4.5rem' : '9rem',
        fontWeight: 300,
        marginTop: isMobile ? '5rem' : '13rem',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
        textAlign: 'center'
      }}>
        <span style={{
          background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>AIBridge</span>
      </h1>
      
      <div style={{ marginTop: isMobile ? '-1rem' : '-2rem' }}>
        <button 
          onClick={() => {
            const element = document.getElementById('mission')
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#A78BFA',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'color 0.3s'
          }}
          className="hover-blue"
        >
          <p style={{
            fontWeight: '500',
            fontSize: isMobile ? '1.7rem' : '1.7rem',
            fontFamily: "'Martel', serif",
          }}>See More</p>
          <svg 
            style={{
              width: isMobile ? '1.5rem' : '2rem',
              height: isMobile ? '1.5rem' : '2rem',
              marginTop: '0.5rem',
              animation: 'bounce 1s infinite'
            }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
