'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled more than 50px
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      backgroundColor: scrolled 
        ? 'rgba(72, 75, 102, 0.7)'  // Semi-transparent blue when scrolled
        : 'transparent',              // Transparent when at top
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      padding: '1rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        padding: '0 2rem'
      }}>
        <Link href="/" style={{ 
          display: 'flex', 
          alignItems: 'center',
          paddingLeft: '0'
        }}>
          <Image 
            src="/img/logo.png" 
            alt="AI Bridge Logo" 
            width={70}
            height={70}
          />
        </Link>
        
        <div style={{
          display: 'none',
          gap: '2rem'
        }} className="nav-links">
          <Link href="/team" style={{
            color: '#d2d4d6',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem',
            fontWeight: '300'
          }} className="nav-link">
            Our Team
          </Link>
          <Link href="/curriculum" style={{
            color: '#d2d4d6',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem',
            fontWeight: '300'
          }} className="nav-link">
            Curriculum
          </Link>
          <Link href="/events" style={{
            color: '#d2d4d6',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem',
            fontWeight: '300'
          }} className="nav-link">
            Events
          </Link>
        </div>

        <div style={{
          display: 'flex',
          gap: '3rem',
          marginLeft: 'auto',
          paddingRight: '3rem'
        }}>
          <Link href="mailto:aibridgecamp@gmail.com" style={{ color: '#e0e0e0' }}>
            <FontAwesomeIcon 
              icon={faEnvelope} 
              size="2x"
            />
          </Link>
          <Link href="https://linkedin.com/your-profile" style={{ color: '#e0e0e0' }}>
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="2x"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 