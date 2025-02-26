'use client'
import React from 'react'
import ReviewSection from './ReviewSection'

const MissionSection = () => {
  return (
    <>
      <section id="mission" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            color: 'white',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our Mission
          </h2>
          <p style={{
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Bridging the Gap Between AI and Industry
          </p>
          <p style={{
            fontSize: '1.5rem',
            color: 'white',
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}>
              At AIBridge, our goal is to bridge the gap between AI and other disciplines. 
              We accomplish this by teaching AI concepts to graduates, post-graduates, and 
              adults who specialize in non-computer-science related fields or who are interested 
              in applying AI for their own uses.
          </p>
        </div>
      </section>
      <ReviewSection />
    </>
  )
}

export default MissionSection 