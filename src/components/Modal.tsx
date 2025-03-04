'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
  linkedin?: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  member: TeamMember
}

const Modal = ({ isOpen, onClose, member }: ModalProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '1rem',
        width: '90%',              // fills 90% of the viewport width
        maxWidth: '90%',           // ensures it scales properly on desktop
        padding: '2rem',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
        <div>
          <h2 style={{ marginBottom: '0.5rem' }}>{member.name}</h2>
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>{member.role}</p>
          <div style={{ marginBottom: '1rem' }}>
            <img 
              src={member.image} 
              alt={member.name} 
              style={{
                width: '100%', 
                height: 'auto', 
                borderRadius: '0.5rem'
              }}
            />
          </div>
          <p style={{ marginBottom: '1rem' }}>{member.description}</p>
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#60A5FA', textDecoration: 'underline' }}
            >
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
