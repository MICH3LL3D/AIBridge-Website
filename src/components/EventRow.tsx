'use client'
import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'

interface EventRowProps {
  events: Array<{
    title: string
    date: string
    imagePrefix: string
    imageCount: number
  }>
  rowIndex: number
}

const EventRow = ({ events, rowIndex }: EventRowProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const element = document.getElementById(`event-row-${rowIndex}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [rowIndex])

  return (
    <div
      id={`event-row-${rowIndex}`}
      style={{
        display: 'flex',
        gap: '2rem',
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${rowIndex * 0.2}s`
      }}
    >
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          imagePrefix={event.imagePrefix}
          imageCount={event.imageCount}
        />
      ))}
    </div>
  )
}

export default EventRow 