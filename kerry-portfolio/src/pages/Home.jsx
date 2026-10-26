import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import PhotoCard from '../components/PhotoCard'

const roles = [
  'Social Media Manager',
  'Video Editor',
  'Digital Marketer & Ads Specialist',
  'Software Engineer',
]

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = current.slice(0, text.length + 1)
        setText(nextText)

        if (nextText.length === current.length) {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        const nextText = current.slice(0, text.length - 1)
        setText(nextText)

        if (nextText.length === 0) {
          setDeleting(false)
          setIndex((index + 1) % roles.length)
        }
      }
    }, deleting ? 45 : 90)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <div className="roles" aria-live="polite">
      <span className="gradient-text">{text}</span>
      <span className="type-cursor">|</span>
    </div>
  )
}

export default function Home() {
  return (
    <PageWrap>
      <div className="page">
        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>
              Kerry<span className="gradient-text">.</span>
            </h1>
            <Typewriter />
            <p className="lead">
              I create content, edit stories, run campaigns, and build software. One person,
              four crafts, all focused on making brands impossible to ignore.
            </p>

            <div className="cta-row">
              <Link to="/projects" className="btn">
                View my work
              </Link>
              <Link to="/contact" className="btn ghost">
                Let&apos;s talk
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <PhotoCard />
          </div>
        </div>
      </div>
    </PageWrap>
  )
}
