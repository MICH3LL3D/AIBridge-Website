'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled more than 50px
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 900) {
        setMenuOpen(false) // Ensure menu is closed on larger screens
      }
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = windowWidth < 900

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
        padding: '0 2rem',
        position: 'relative'
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
        
        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{
            display: 'flex',
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
        )}

        {/* Mobile hamburger icon */}
        {isMobile && (
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#d2d4d6',
              fontSize: '2rem',
              marginLeft: 'auto',
              cursor: 'pointer'
            }}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        )}

        <div style={{
          display: !isMobile ? 'flex' : 'none',
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

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(72, 75, 102, 0.9)',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <Link href="/team" onClick={() => setMenuOpen(false)} style={{
            color: '#d2d4d6',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem',
            fontWeight: '300'
          }}>
            Our Team
          </Link>
          <Link href="/curriculum" onClick={() => setMenuOpen(false)} style={{
            color: '#d2d4d6',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem',
            fontWeight: '300'
          }}>
            Curriculum
          </Link>
          <Link href="/events" onClick={() => setMenuOpen(false)} style={{
            color: '#d2d4d6',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem',
            fontWeight: '300'
          }}>
            Events
          </Link>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '1rem'
          }}>
            <Link href="mailto:aibridgecamp@gmail.com" onClick={() => setMenuOpen(false)} style={{ color: '#e0e0e0' }}>
              <FontAwesomeIcon 
                icon={faEnvelope} 
                size="2x"
              />
            </Link>
            <Link href="https://linkedin.com/your-profile" onClick={() => setMenuOpen(false)} style={{ color: '#e0e0e0' }}>
              <FontAwesomeIcon 
                icon={faLinkedin} 
                size="2x"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
