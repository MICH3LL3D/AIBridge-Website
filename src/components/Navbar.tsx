'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      backgroundColor: 'transparent',
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
            width={100}
            height={100}
          />
        </Link>
        
        <div style={{
          display: 'none',
          gap: '2rem'
        }} className="nav-links">
          <Link href="/team" style={{
            color: 'white',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem'
          }} className="nav-link">
            Our Team
          </Link>
          <Link href="/curriculum" style={{
            color: 'white',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem'
          }} className="nav-link">
            Curriculum
          </Link>
          <Link href="/events" style={{
            color: 'white',
            textDecoration: 'none',
            transition: 'color 0.3s',
            fontSize: '1.2rem'
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
          <Link href="mailto:aibridgecamp@gmail.com" style={{ color: 'white' }}>
            <FontAwesomeIcon 
              icon={faEnvelope} 
              size="2x"
            />
          </Link>
          <Link href="https://linkedin.com/your-profile" style={{ color: 'white' }}>
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