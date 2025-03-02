'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface EventCardProps {
  title: string
  date: string
  imagePrefix: string  // Change from images array to prefix
  imageCount: number   // Number of images to loop through
}

const EventCard = ({ title, date, imagePrefix, imageCount }: EventCardProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = Array.from({ length: imageCount }, (_, i) => `${imagePrefix}${i + 1}.jpeg`)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageCount)
    }, 5000)

    return () => clearInterval(timer)
  }, [imageCount])

  return (
    <div style={{
      backgroundColor: '#d2d4d6',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      width: '350px',
      minWidth: '350px',
      margin: '1rem',
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        height: '250px',
        backgroundColor: '#f3f4f6'
      }}>
        <img
          src={images[currentImage]}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }} />
        <button
          onClick={() => setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount)}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem',
            zIndex: 1
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => setCurrentImage((prev) => (prev + 1) % imageCount)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem',
            zIndex: 1
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {/* Image dots */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem'
        }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: currentImage === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>

      <div style={{
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          color: '#1f2937'
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#60A5FA'
        }}>
          {date}
        </p>
      </div>

      {/* Gradient bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, #60A5FA, #A78BFA)'
      }} />
    </div>
  )
}

export default EventCard 