import { useState } from 'react'
import PageWrap from '../components/PageWrap'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <PageWrap>
      <div className="page contact-page">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s work together</p>
          <h2>Have a project, campaign, or idea? Let&apos;s build something memorable.</h2>
          <p>
            I help brands turn attention into engagement and ideas into experiences that work.
            Send a message and I&apos;ll get back to you soon.
          </p>
        </div>

        {sent ? (
          <div className="card success-box">
            <h3>Message sent ✨</h3>
            <p>Thank you! I&apos;ll reply as soon as I can.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="card contact-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your project..." required />
            </label>

            <button type="submit" className="btn">
              Send message
            </button>
          </form>
        )}

        <div className="social-row">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="btn ghost social-link">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </PageWrap>
  )
}
