'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import EventRow from '@/components/EventRow'

const events = [
  {
    title: "Cupertino Library",
    date: "November 2024",
    imagePrefix: "/img/Cupertino Nov 2024/cupertino_novphoto",
    imageCount: 16
  },
  {
    title: "Saratoga Library",
    date: "September 2024",
    imagePrefix: "/img/Saratoga 2024/saratoga_sepphoto",
    imageCount: 4
  },
  {
    title: "UC Davis University",
    date: "June 2024",
    imagePrefix: "/img/Davis 2024/davis_julyphoto",
    imageCount: 7
  },
  {
    title: "Cupertino Library",
    date: "March 2024",
    imagePrefix: "/img/Cupertino March 2024/cupertino_marphoto",
    imageCount: 5
  },
  {
    title: "Saratoga Library",
    date: "August 2023",
    imagePrefix: "/img/Saratoga 2023/saratoga_augphoto",
    imageCount: 5
  },
  {
    title: "UIUC 2023",
    date: "Summer 2023",
    imagePrefix: "/img/UIUC 2023/uiuc_photo",
    imageCount: 4
  },
  {
    title: "Cornell University",
    date: "Summer 2023",
    imagePrefix: "/img/Cornell 2023/cornell_photo",
    imageCount: 6
  },
  {
    title: "Bentley University",
    date: "Summer 2023",
    imagePrefix: "/img/Bentley 2023/bentley_photo",
    imageCount: 5
  },
  {
    title: "Saratoga Library",
    date: "IDK 2022",
    imagePrefix: "/img/Saratoga 2022/saratoga_photo",
    imageCount: 5
  },
  {
    title: "UC Davis University",
    date: "IDK 2022",
    imagePrefix: "/img/Davis 2022/davis_photo",
    imageCount: 6
  },
]

export default function EventsPage() {
  // Group events into rows of 3
  const rows = events.reduce((acc, event, i) => {
    const rowIndex = Math.floor(i / 3)
    if (!acc[rowIndex]) {
      acc[rowIndex] = []
    }
    acc[rowIndex].push(event)
    return acc
  }, [] as Array<typeof events>)

  return (
    <main style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      position: 'relative',
      backgroundImage: "url('/aibridge-website/img/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />
      <div style={{
        paddingTop: '150px',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '3rem',
          paddingTop: '5rem',
          background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Past Events
        </h1>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {rows.map((rowEvents, index) => (
            <EventRow
              key={index}
              events={rowEvents}
              rowIndex={index}
            />
          ))}
        </div>
      </div>
    </main>
  )
} 