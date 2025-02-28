'use client'
import { useEffect, useState } from 'react'

export const useScrollFade = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold
      }
    )

    const currentElement = document.getElementById('scroll-fade')
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  return isVisible
} 