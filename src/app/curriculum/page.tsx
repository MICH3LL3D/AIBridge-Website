'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'

interface CurriculumDay {
  day: string
  content: {
    title: string
    links: {
      name: string
      url: string
    }[]
  }[]
}

const fiveDayCurriculum: CurriculumDay[] = [
  {
    day: "Day 1",
    content: [
      {
        title: "Lecture 1:",
        links: [
          { name: "Slides", url: "https://docs.google.com/presentation/d/1DoVpkPIOqLsBN6DKj4gggPr9ZY3QsdpV/edit?usp=drive_link&ouid=103605780252316805733&rtpof=true&sd=true" },
          { name: "Demo", url: "https://colab.research.google.com/drive/1aZ4YRFJe11E-aE1VhVkCG4vSNelSCaJN?usp=sharing" }
        ]
      },
      {
        title: "Lab 1:",
        links: [
          { name: "Template For Demo", url: "https://colab.research.google.com/drive/11GP8qwLdG1XbGU87UvOqTFhuxcuR2gvh?usp=sharing" },
          { name: "Demo", url: "https://colab.research.google.com/drive/1RELwX5xm4eQqmYx0vjSoTG51Z7rwliFo?usp=sharing" },
          { name: "Task", url: "https://docs.google.com/document/d/14nL67X_5hzxMalM3pSmi9LgFH6M6diUaaktm7DUh-cM/edit?usp=drive_link" },
          { name: "Solution", url: "https://colab.research.google.com/drive/1KZAL_udV3fyVgzY5oi2j-mFDZ8DT6L6C?usp=sharing" }
        ]
      },
      {
        title: "Lecture 2:",
        links: [
          { name: "Slides", url: "https://docs.google.com/presentation/d/1VAkgn2hvQSEbdrFN8DJiDR_-4my_mcqs/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" },
          { name: "Demo", url: "https://colab.research.google.com/drive/1gKo1Q4XZsSeblQLeji8SqKpiQnv4mbLp?usp=sharing" }
        ]
      },
      {
        title: "Lab 2:",
        links: [
          { name: "Demo", url: "https://colab.research.google.com/drive/1TiaMfDcEYjii3Yft0p_KXNAsnFfkeWxu?usp=sharing" },
          { name: "Task", url: "https://docs.google.com/document/d/122BBxHK5sLT6RATlc75fqvwz_gL6Hy9exZvxNG_qb8w/edit?usp=sharing" },
          { name: "Solution", url: "https://colab.research.google.com/drive/1hiDOr4pYjARZNXj32ckgW88bKeSxGeDy?usp=sharing" }
        ]
      }
    ]
  },
  {
    day: "Day 2",
    content: [
      {
        title: "Lecture 3:",
        links: [
          { name: "Slides", url: "https://docs.google.com/presentation/d/1jD-boHJG3wEEDI3KJcmzBB61pWnS5aFz/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
        ]
      },
      {
        title: "Lab 3:",
        links: [
          { name: "Demo", url: "https://colab.research.google.com/drive/1cui4PATnXO1_qwxWqoETBE0WsiESz8o2?usp=sharing" },
          { name: "Task", url: "https://docs.google.com/document/d/1E6l4yz4p_ivd_dnZelcE04iE9qHSNlWGb8c30NrJ0y4/edit?usp=sharing" },
          { name: "Solution", url: "https://colab.research.google.com/drive/1FDUvtuLrtT30fynzltjHsn-O9B3_TmpE?usp=sharing" }
        ]
      },
      {
        title: "Lecture 4:",
        links: [
          { name: "Slides", url: "https://docs.google.com/presentation/d/121pl7WLIUSU3xIUWy39bICVD3SUpL2aw/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
        ]
      },
      {
        title: "Lab 4:",
        links: [
          { name: "Demo", url: "https://colab.research.google.com/drive/1hOA53xOZjdGrHX0QXBs9lPmI_yYKQrS5?usp=sharing" },
          { name: "Task", url: "https://docs.google.com/document/d/1SSU7xy-im2D5TjWdisyNBeekrkZ7IWO9TV62Z5tbfq0/edit?usp=sharing" },
          { name: "Solution", url: "https://colab.research.google.com/drive/1-_xSM3ZX6R5Ba2sm096mT-qo-aUyLNKH?usp=sharing" }
        ]
      }
    ]
  },
  {
    day: "Day 3",
    content: [
        {
            title: "Lecture 5:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1T9VVSZZi8hFt1NsJ7aYxKNIHPdAHY2Zx/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Lab 5:",
            links: [
              { name: "Demo", url: "https://colab.research.google.com/drive/18cjZIjzIIfmDhYvdOu2eZD2Uo71Dkc1u?usp=sharing" },
              { name: "Task", url: "https://docs.google.com/document/d/1TixkL9Qvud8jWrnTQRtsIdleKD52Y1LUmZua8PjO_mA/edit?usp=sharing" },
              { name: "Solution", url: "https://colab.research.google.com/drive/1F3EbWjttVuVS98u7D4OJTNw9pkNe2l4O?usp=sharing" }
            ]
          },
          {
            title: "Lecture 6:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1QS9Iqk3WI0Xf9pwysTEU-rIqaPWItnBq/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Lab 6:",
            links: [
              { name: "Demo", url: "https://colab.research.google.com/drive/187lU0VBIdSP711ftFhUQiF8v2tGf8U30?usp=sharing" },
              { name: "Task", url: "https://docs.google.com/document/d/1lgyE35Nw5Tb7-BJjx2QFYSwYRSnn0UwIKm3-iUaWSIA/edit?usp=sharing" },
              { name: "Solution", url: "https://colab.research.google.com/drive/1_-97kR2CVc8J3MIb7WeVsg36kOpqptHl?usp=sharing" }
            ]
          }
    ]
  },
  {
    day: "Day 4",
    content: [
        {
            title: "Lecture 7:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1kIbgumNoYuM-79iN_NmS7ZqdSJX9dG8L/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Lab 7:",
            links: [
              { name: "Demo", url: "https://colab.research.google.com/drive/13c0fM7-yiww5TyaqwYaJTwtScIMvA4n_?usp=sharing" },
              { name: "Task", url: "https://docs.google.com/document/d/1UXihfYgjXss-_nSB9-hOdd4kCnGvI8qhExYjvx-ZAl4/edit?usp=sharing" },
              { name: "Solution", url: "https://colab.research.google.com/drive/1SGWVCB5mazFtc73l788-xlGUctHgqc7r?usp=sharing" }
            ]
          },
          {
            title: "Lecture 8:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1f8T32ez4BUt4hSb6VZQ91ZaUnU_jvo-h/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Lab 8:",
            links: [
              { name: "Task", url: "https://docs.google.com/document/d/1URkkss53gOhbmFDCW2NG-OqiqZFliFnO_HEULYFODxg/edit?usp=sharing" }            
            ]
          }
    ]
  },
  {
    day: "Day 5",
    content: [
        {
            title: "Lecture 9:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1S5bGqXzS_6AdMucDLJCf2F3C40yNroKf/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Closing Notes:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1RbbTyhR4NuKpBfMTUCiFuJpNTES1GOcm/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Jeopardy:",
            links: [
              { name: "Answers", url: "https://docs.google.com/document/d/1pTS-1u8mdpphhf_TNmFJtbHgYWB-SBzxuXjj3pWnZ6E/edit?usp=drive_link" }
            ]
          }
    ]
  }
]

const twoDayCurriculum: CurriculumDay[] = [
    {
        day: "Day 1",
        content: [
        {
        title: "Lecture 1:",
        links: [
            { name: "Slides", url: "https://docs.google.com/presentation/d/1MiKTkLO6OmVWpLe6uNYEQOqJ_dcBOSyU/edit?usp=drive_link&ouid=103605780252316805733&rtpof=true&sd=true" },
            { name: "Demo", url: "https://colab.research.google.com/drive/1TLvuHCZ79DsZIoax5zuKnNu3LukVUcM6?usp=sharing" }
        ]
        },
        {
        title: "Lab 1:",
        links: [
            { name: "Template For Demo", url: "https://colab.research.google.com/drive/1N1_TbaliybHqgqLlXrjxYUf43Gf-XA8C?usp=sharing" },
            { name: "Demo", url: "https://colab.research.google.com/drive/1gI-0GZil9WST2LmSwLQ6Bx1DfTjA3JOi?usp=sharing" },
            { name: "Task", url: "https://docs.google.com/document/d/17QFi44rUMjmN1DLplm_Qp5816ZxcSwlRXyxzo20o1hk/edit?usp=drive_link" },
            { name: "Solution", url: "https://colab.research.google.com/drive/1aqIwcrJIhYGe8zM6dkZtpz8eoXIr-Ijz?usp=sharing" }
        ]
        },
        {
        title: "Lecture 2:",
        links: [
            { name: "Slides", url: "https://docs.google.com/presentation/d/17ZHkzXcyDCQyFIFhJ4GPD07wpmSURox7/edit?usp=sharing&ouid=101791718110152726253&rtpof=true&sd=true" }
        ]
        },
        {
        title: "Lab 2:",
        links: [
            { name: "Demo", url: "https://colab.research.google.com/drive/12ft7dArFsQdch16sxYzLYaE4Pz_NcKQ2?usp=sharing" },
            { name: "Task", url: "https://docs.google.com/document/d/1oe7ECgOTkfYoiKxEwJU_SGCoVBCR4Vp9kQXD9MCA6rc/edit?usp=drive_link" },
            { name: "Solution", url: "https://colab.research.google.com/drive/1HsII6IMx2-EhRV1489p_E0_NO9DMvV9i?usp=drive_link" }
        ]
        }]
      },
      {
        day: "Day 2",
        content: [
          {
            title: "Lecture 3:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1Z5bQq_5LesPpEDPoLzVK420lYj21hxIi/edit?usp=drive_link&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Lab 3:",
            links: [
              { name: "Demo", url: "https://colab.research.google.com/drive/1rkiQevXDVaZd7l4RMw5wCZjmZSIX3dIK#scrollTo=BOvizCfzRifX" },
              { name: "Task", url: "https://docs.google.com/document/d/1kA1941mHsVtTNWzvE2eY1YNvspoIubNl98dqaq1nLAY/edit?usp=sharing" },
              { name: "Solution", url: "https://colab.research.google.com/drive/1ymWMXudSsQyhmNRz7I4H40Tn6M_yQXSR?usp=sharing" }
            ]
          },
          {
            title: "Lecture 4:",
            links: [
              { name: "Slides", url: "https://docs.google.com/presentation/d/1sGb2UZqq1ivoIjj4bTh3AR6KBuReKAfs/edit?usp=sharing&ouid=103605780252316805733&rtpof=true&sd=true" }
            ]
          },
          {
            title: "Lab 4:",
            links: [
              { name: "Demo", url: "https://colab.research.google.com/drive/1xpbHbYHEIDQ9mEzvYj93U7ExXA9qwALR?usp=sharing" },
              { name: "Task", url: "https://docs.google.com/document/d/1FQlN2tGzmt1LCP-T6T4U-CTRzFyHeEHxui8VczXTD88/edit?usp=sharing" },
              { name: "Solution", url: "https://colab.research.google.com/drive/1ZssWrSsuhPWKkAU2m-gZN2PjwzGstzVv?usp=sharing" }
            ]
          }
        ]
      }
]

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState<'2day' | '5day'>('5day')
  const [activeDay, setActiveDay] = useState(0)
  const currentCurriculum = activeTab === '5day' ? fiveDayCurriculum : twoDayCurriculum

  return (
    <main style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      position: 'relative'
    }}>
      <Navbar />
      <div style={{
        paddingTop: '150px',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          color: '#d2d4d6',
          fontSize: '4rem',
          textAlign: 'center',
          marginBottom: '3rem',
          paddingTop: '5rem',
          background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Curriculum
        </h1>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Course Type Tabs */}
          <div style={{
            display: 'flex',
            gap: '1px',
            backgroundColor: 'rgba(10, 11, 26, 0.3)',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            overflow: 'hidden'
          }}>
            {['2day', '5day'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as '2day' | '5day')
                  setActiveDay(0)
                }}
                style={{
                  flex: 1,
                  padding: '1rem',
                  fontSize: '1.2rem',
                  border: 'none',
                  background: activeTab === tab ? 'rgba(10, 11, 26, 0.5)' : 'transparent',
                  color: '#d2d4d6',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderBottom: activeTab === tab ? '2px solid #60A5FA' : 'none',
                  fontWeight: '500',
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {tab === '2day' ? '2-Day Course' : '5-Day Course'}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            backgroundColor: 'rgba(10, 11, 26, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem'
          }}>
            {/* Day Navigation */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minWidth: '150px',
              paddingRight: '2.5rem',
            }}>
              {currentCurriculum.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  style={{
                    padding: '0.9rem',
                    fontSize: '1rem',
                    borderRadius: '0.2rem',
                    border: 'none',
                    background: activeDay === index ? 'rgba(72, 75, 102)' : 'rgba(10, 11, 26, 0.3)',
                    color: '#d2d4d6',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: '500',
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {day.day}
                </button>
              ))}
            </div>

            {/* Day Content */}
            <div style={{
              flex: 1,
              color: 'white'
            }}>
              {currentCurriculum[activeDay].content.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      background: 'linear-gradient(to right, #A78BFA, #60A5FA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {section.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      {section.links.map((link, linkIndex) => (
                        <React.Fragment key={linkIndex}>
                          {linkIndex > 0 && (
                            <span style={{ color: '#60A5FA' }}>|</span>
                          )}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '1.2rem',
                              color: '#60A5FA',
                              textDecoration: 'underline'
                            }}
                            className="hover-purple"
                          >
                            {link.name}
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 