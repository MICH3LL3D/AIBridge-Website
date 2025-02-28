'use client'
import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  member: {
    name: string
    role: string
    image: string
    description: string
    linkedin?: string
  }
}

const Modal = ({ isOpen, onClose, member }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'rgba(10, 11, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '2rem',
        maxWidth: '600px',
        width: '90%',
        position: 'relative',
        boxShadow: '0 0 20px rgba(167, 139, 250, 0.1)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem',
          gap: '2rem'
        }}>
          <img
            src={member.image}
            alt={member.name}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '0.5rem',
              background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {member.name}
            </h3>
            <p style={{ color: 'white', fontSize: '1.2rem' }}>
              {member.role}
            </p>
          </div>
        </div>
        
        <p style={{
          color: 'white',
          lineHeight: '1.6',
          fontSize: '1.1rem'
        }}>
          {member.description}
        </p>
      </div>
    </div>
  )
}

export default Modal 