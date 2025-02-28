'use client'
import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
        fontSize: '10rem',
        fontWeight: 300,
        marginTop: '13rem',
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
      
      <div style={{ marginTop: '0rem' }}>
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
            fontSize: '1.3rem',
            fontFamily: "'Noto Sans', sans-serif",
          }}>See More</p>
          <svg 
            style={{
              width: '2rem',
              height: '2rem',
              marginTop: '2.5rem',
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