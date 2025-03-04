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

  if (!isOpen) return null

  return (
    // Overlay covers the entire screen
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999 // ensure it's on top of everything
      }}
    >
      {/* Inner container is 90% of the viewport width, up to 90% of the viewport height */}
      <div
        style={{
          position: 'relative',
          width: '90vw',
          maxWidth: '90vw',       // ensure it can't exceed 90vw
          maxHeight: '90vh',      // if content is taller than screen, scroll
          overflowY: 'auto',
          backgroundColor: '#fff',
          borderRadius: '1rem',
          padding: '2rem'
        }}
      >
        {/* Close button */}
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

        {/* Content */}
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
