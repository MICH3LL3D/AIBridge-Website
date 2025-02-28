'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Modal from '@/components/Modal'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
  linkedin?: string
}

const currentMembers: TeamMember[] = [
  {
    name: "Prof. Xin Liu",
    role: "Founder & Lead Instructor",
    image: "/img/team/about_me_1.png",
    description: "Xin Liu is a Computer Science professor at UC Davis. She is a co-PI and AI cluster lead of the USDA/NSF AI Institute for Next Generation Food Systems (AIFS), a sponsor of AIBridge. Her research focuses on machine learning in food systems and healthcare for humans and animals. Liu, along with Samuel Ren and Houjun Liu, co-created and taught AIBridge at UC Davis in Summer 2022 and continues to broaden its reach.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Samuel Ren",
    role: "Founder & Instructor",
    image: "/img/team/about_me_2.png",
    description: "Samuel, a senior at Gunn High School, has been programming since 4th grade. He co-developed and taught the first AIBridge bootcamp at UC Davis and has taught at seven sessions. A USAMO Bronze medalist and USA Computing Olympiad finalist, Samuel has won numerous awards in math and computing competitions and has a strong interest in machine learning applications.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Lily Shi",
    role: "Instructor",
    image: "/img/team/about_me_10.jpg",
    description: "Lily Shi, a junior at The Harker School, has been coding since fifth grade and researching AI for the past three years. Her work focuses on deep learning interpretability for diagnosing eye diseases, which she has presented at several conferences, earning multiple awards and becoming a finalist at the Regeneron ISEF. She co-authored a paper with UC Santa Cruz researchers on ECG heartbeat forecasting using machine learning, and the work has been accepted for presentation at an IEEE conference. An accomplished math competitor, she is an AIME and MPFG qualifier. She organizes events for her school's Research Club to support others in conducting research and serves as the News Editor for her school's newspaper. Lily has been teaching and TAing at AIBridge since 2023.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Michelle Dong",
    role: "Instructor",
    image: "/img/team/about_me_8.jpg",
    description: "Michelle, a senior at Monta Vista High School, is the VP of the Monta Vista Girls Who Code club and has taught intermediate Python and machine learning classes at Steel City Codes. She is researching a platform to test autonomous driving using reinforcement learning and has recently co-authored a paper. Michelle joined AIBridge in the summer of 2023 and has taught and TAed at three sessions.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Samuel Lopez",
    role: "Instructor",
    image: "/img/team/placeholder.jpg",
    description: "Samuel Lopez, a high school student at Foothill High School, began coding in 6th grade and has been teaching and TAing at AIBridge events since 2023. He works with AI systems in education and transactions and co-founded his school's Blockchain club. Samuel is currently volunteering in an NSF-funded education program and researching human-AI interfaces on productivity with CMU.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Connor Lee",
    role: "Instructor",
    image: "/img/team/about_me_9.png",
    description: "Connor Lee is a Junior at Palo Alto High School. He has been programming since he was in 7th grade, and has taken many classes to deepen his understanding of computer science/AI. He has also participated in founding several CS clubs and served as a team lead and instructor. During his freshman and sophomore years, he was invited to an Bioengineering internship at UC San Diego where he supported the Biophotonics lab and created programs for faster analysis of a major part of the central nervous system through machine learning. He has learned many algorithms to apply to the real world, and has also won awards and prizes from many hackathons. He has a strong passion towards machine learning and its uses in everyday life.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Swee",
    role: "Instructor",
    image: "/img/team/placeholder.jpg",
    description: "Swee is an instructor with experience in...",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Jack Fan",
    role: "Instructor",
    image: "/img/team/about_me_5.png",
    description: "Jack, a freshman at Harvard, has taught for AIBridge at Cornell, UIUC, and UC Davis for the past year and a half and led events at Bentley University. His research interests include GWAS datasets, LocusZoom for disease-to-gene links, brain like computing in neuroscience modeling, and the impact of large language models on productivity. He recently self-published a quantum computing handbook.",
    linkedin: "https://linkedin.com/in/..."
  },
]

const pastMembers: TeamMember[] = [
    {
        name: "Houjun (Jack) Liu",
        role: "Founder & Former Instructor",
        image: "/img/team/about_me_4.jpg",
        description: "Houjun (Jack) was a 12th grade student at The Nueva School, an independent school in San Mateo, CA. He has worked on research for the past 4 years in machine learning, and has a specific research interest in natural language processing (NLP) and language sample analysis (LSA). His publications surrounding NLP, LSA, and educational pedagogy have been featured in venues including Experimental Biology and AJSLP. He has received early admission and will be attending Stanford in 2023.",
        linkedin: "https://linkedin.com/in/..."
    },
  {
    name: "Jiaming Situ",
    role: "Founder & Former Instructor",
    image: "/img/team/about_me_3.jpg",
    description: "Jiaming Situ was a Senior at Homestead High School who has been coding competitively since 7th grade. He has studied deep learning through programs at New York University and Yale and has written an academic paper focused on generative adversarial neural networks. Jiaming is also vice president of his school's AI club and teaches other students at his school about machine learning.",
    linkedin: "https://linkedin.com/in/..."
  },
  {
    name: "Nate Harris",
    role: "Former Instructor",
    image: "/img/team/about_me_7.jpg",
    description: "Nate Haris was a senior at Lexington High School. He has been studying computer science for 6 years and teaching it for 4. Nate has taught dozens of students in many fields of CS, running his own tutoring business. He also organizes an annual community hackathon and is publishing research in cyber security. Nate always loves to learn and teach others about intricate topics of computer science, such as AI development.",
    linkedin: "https://linkedin.com/in/..."
  },
  // Add more past members as needed
]

const MemberCard = ({ member }: { member: TeamMember }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div 
        className="member-card"
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundColor: 'rgba(10, 11, 26, 0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          width: '210px',
          minWidth: '210px',
          margin: '0 auto'
        }}>
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          <img 
            src={member.image} 
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <h3 style={{
          fontSize: '1.5rem',
          color: 'white',
          marginBottom: '0.5rem',
          background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {member.name}
        </h3>
        <p style={{
          color: 'white',
          marginBottom: '1rem'
        }}>
          {member.role}
        </p>
        {member.linkedin && (
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#60A5FA' }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={member}
      />
    </>
  )
}

export default function TeamPage() {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleMembers(prev => Array.from(new Set([...prev, index])))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    document.querySelectorAll('[data-index]').forEach(element => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      position: 'relative',
      backgroundImage: "url('/img/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar />
      <div style={{
        paddingTop: '100px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '3rem', 
          textAlign: 'center', 
          paddingTop: '5rem',
          marginBottom: '3rem'
        }}>
          Our Team
        </h1>

        <h2 style={{
          color: 'white',
          fontSize: '3rem',
          marginBottom: '2rem',
          marginLeft: '1rem',
          background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Current Members
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {currentMembers.map((member, index) => (
            <div
              key={index}
              data-index={index}
              style={{
                opacity: visibleMembers.includes(index) ? 1 : 0,
                transform: `translateY(${visibleMembers.includes(index) ? 0 : '20px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>

        <h2 style={{
          color: 'white',
          fontSize: '3rem',
          marginBottom: '2rem',
          paddingTop: '2rem',
          marginLeft: '1rem',
          background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Past Members
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {pastMembers.map((member, index) => (
            <div
              key={index}
              data-index={index + currentMembers.length}
              style={{
                opacity: visibleMembers.includes(index + currentMembers.length) ? 1 : 0,
                transform: `translateY(${visibleMembers.includes(index + currentMembers.length) ? 0 : '20px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${(index + currentMembers.length) * 0.1}s`
              }}
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 