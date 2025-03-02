'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Review {
  text: string
}

const reviews: Review[] = [
  {
    text: "You guys are great! Very knowledgeable in the topics and and patience in answering my sometimes silly questions :)"
  },
  {
    text: "You guys are really, truly fantastic! Even though you are all brilliant and intimidating in your abilities, you were able to make this a welcoming and very enjoyable experience. Thank you for your time and passion. "
  },
  {
    text: "I thought everyone was truly amazing! We love Jack and Samuel, extremely funny. Prof. Liu's humor and easy-to-approach nature made learning even better :_)"
  },
  {
    text: "The class was put together very well, well organized, and concepts were generally well explained. I think the hands-on activities were crucial and the most helpful part of the course. The part of the course I found to be the most useful was learning about all the different algorithms to start with."
  }
]

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const previousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section style={{
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem'
    }}>
      <h2 style={{
        fontSize: '3rem',
        color: 'white',
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        What Our Students Say
      </h2>

      <div style={{
        maxWidth: '60%',
        position: 'relative',
        padding: '2rem'
      }}>
        <button
          onClick={previousReview}
          style={{
            position: 'absolute',
            left: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#60A5FA',
            cursor: 'pointer',
            padding: '1rem',
            transition: 'color 0.3s ease'
          }}
          className="hover-purple"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>

        <button
          onClick={nextReview}
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#60A5FA',
            cursor: 'pointer',
            padding: '1rem',
            transition: 'color 0.3s ease'
          }}
          className="hover-purple"
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>

        <div style={{
          textAlign: 'center',
          minHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: 1,
          transition: 'opacity 0.5s ease-in-out'
        }}>
          <p style={{
            fontSize: '1.3rem',
            color: '#d2d4d6',
            marginBottom: '2rem',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            "{reviews[currentReview].text}"
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem'
        }}>
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentReview === index ? '#A78BFA' : '#60A5FA',
                opacity: currentReview === index ? 1 : 0.5,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewSection 