import { useEffect, useRef, useState } from 'react'
import './App.css'

// EDIT EVERYTHING HERE IN ONE PLACE
const SITE_CONFIG = {
  profile: {
    name: 'Kerry',
    email: 'keriyaabdellah2@gmail.com',
    intro:
      'I create content, edit stories, run campaigns, and build software. One person, four crafts, all focused on making brands impossible to ignore.',
    about:
      'I’m Kerry, a multi-skilled creator who sits at the crossroads of creativity, strategy, and code. I can shoot the idea, edit the video, run the ads, and build the website it all lives on.',
  },
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/queen_kerry_outlook', icon: 'instagram' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mamacitababy22', icon: 'tiktok' },
    { name: 'LinkedIn', url: 'www.linkedin.com/in/keriyaabdellah', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com/@keriyaabdellah1042', icon: 'youtube' },
    { name: 'GitHub', url: 'https://github.com/CodeMasterKerry', icon: 'github' },
  ],
  roles: [
    'Social Media Manager',
    'Video Editor',
    'Digital Marketer & Ads Specialist',
    'Software Engineer',
  ],
  marqueeSkills: [
    'Social Media',
    'Video Editing',
    'Meta Ads',
    'Google Ads',
    'React',
    'Motion Graphics',
    'SEO',
    'Content Strategy',
    'Three.js',
    'Branding',
  ],
  projects: [
    {
      title: 'Brand Growth Campaign',
      category: 'Social Media',
      desc: 'Grew an account from 2K to 80K followers in six months with a daily content system.',
      result: '+78K followers',
    },
    {
      title: 'Cinematic Brand Film',
      category: 'Video',
      desc: 'A 90 second story-driven brand video with motion graphics and custom sound design.',
      result: '500K views',
    },
    {
      title: 'Meta Ads Funnel',
      category: 'Ads',
      desc: 'Scaled a product launch with creative testing and retargeting.',
      result: '4.2x ROAS',
    },
    {
      title: 'E-commerce Web App',
      category: 'Software',
      desc: 'Full-stack React and Node store with payments, admin dashboard, and analytics.',
      result: 'Live in 6 weeks',
    },
    {
      title: 'Short-Form Reel Series',
      category: 'Video',
      desc: 'A reel series with fast cuts, captions, and trending audio.',
      result: '1M+ views',
    },
    {
      title: 'Content Calendar System',
      category: 'Social Media',
      desc: 'A repeatable weekly content system for a team of five.',
      result: '3x output',
    },
    {
      title: 'Google Ads Search Campaign',
      category: 'Ads',
      desc: 'Keyword research, ad copy, and landing page testing for a local service business.',
      result: '-40% cost per lead',
    },
    {
      title: 'Interactive 3D Portfolio',
      category: 'Software',
      desc: 'This very site, built with React, Three.js, and Framer Motion.',
      result: 'You are here',
    },
  ],
}

function SocialIcon({ type }) {
  const style = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'instagram') {
    return (
      <svg {...style}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (type === 'tiktok') {
    return (
      <svg {...style}>
        <path d="M14 4c.7 2.4 2.4 4 5 4v2.9c-1.6 0-3-.5-4.3-1.3V14a5 5 0 1 1-5-5v2.9a2.1 2.1 0 1 0 1.7 2.1V4h2.6Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg {...style}>
        <path d="M7 9.5V18" />
        <path d="M7 6.5h.01" />
        <path d="M12 18v-5.3a2.4 2.4 0 0 1 4.8 0V18" />
        <path d="M12 9.5v8.5" />
      </svg>
    )
  }

  if (type === 'youtube') {
    return (
      <svg {...style}>
        <path d="M20 12c0-2.2-.2-4.3-.6-5.8a2.6 2.6 0 0 0-1.8-1.8C16.5 4 12 4 12 4s-4.5 0-5.6.4A2.6 2.6 0 0 0 4.6 6.2C4.2 7.7 4 9.8 4 12s.2 4.3.6 5.8a2.6 2.6 0 0 0 1.8 1.8C7.5 20 12 20 12 20s4.5 0 5.6-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.6-3.6.6-5.8Z" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg {...style}>
        <path d="M9 18c-4 1.3-4-2-5-2" />
        <path d="M15 22v-3.4a3.6 3.6 0 0 0-1-2.8c3.3-.4 6.8-1.6 6.8-7.3A5.6 5.6 0 0 0 20 5.8 5.2 5.2 0 0 0 19.8 2S18.7 1.7 15.8 3.5a13.8 13.8 0 0 0-7.2 0C5.7 1.7 4.6 2 4.6 2A5.2 5.2 0 0 0 4.4 5.8 5.6 5.6 0 0 0 3 10.5c0 5.7 3.5 6.9 6.8 7.3a3.6 3.6 0 0 0-1 2.8V22" />
      </svg>
    )
  }

  return null
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [filter, setFilter] = useState('All')
  const [roleText, setRoleText] = useState('')
  const [fileImage, setFileImage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const cardRef = useRef(null)
  const fileRef = useRef(null)
  const pillRef = useRef(null)

  useEffect(() => {
    let index = 0
    let deleting = false
    let currentText = ''
    let timerId

    const tick = () => {
      const current = SITE_CONFIG.roles[index]

      if (!deleting) {
        currentText = current.slice(0, currentText.length + 1)
        setRoleText(currentText)

        if (currentText === current) {
          deleting = true
          timerId = setTimeout(tick, 1300)
          return
        }
      } else {
        currentText = current.slice(0, currentText.length - 1)
        setRoleText(currentText)

        if (currentText === '') {
          deleting = false
          index = (index + 1) % roles.length
        }
      }

      timerId = setTimeout(tick, deleting ? 35 : 75)
    }

    timerId = setTimeout(tick, 75)
    return () => clearTimeout(timerId)
  }, [])

  useEffect(() => {
    const movePill = (button) => {
      const pill = pillRef.current
      if (!button || !pill) return
      pill.style.width = `${button.offsetWidth}px`
      pill.style.transform = `translateX(${button.offsetLeft}px)`
    }

    const activeButton = document.querySelector(`.nav button[data-p="${activePage}"]`)
    if (activeButton) {
      movePill(activeButton)
      document.querySelectorAll('.nav button').forEach((button) => {
        button.classList.toggle('on', button.dataset.p === activePage)
      })
    }
  }, [activePage])

  useEffect(() => {
    const saved = localStorage.getItem('kerry-portfolio-photo')
    if (saved) setFileImage(saved)
  }, [])

  useEffect(() => {
    if (fileImage) {
      localStorage.setItem('kerry-portfolio-photo', fileImage)
    }
  }, [fileImage])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    document.querySelectorAll('.sec').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const count = (element) => {
      const to = Number(element.dataset.n)
      const suffix = element.dataset.s || ''
      const start = performance.now()

      const tick = (time) => {
        const progress = Math.min((time - start) / 1500, 1)
        element.textContent = `${Math.round(to * (1 - Math.pow(1 - progress, 3)))}${suffix}`

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            entry.target.querySelectorAll('[data-n]').forEach(count)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -80px 0px' },
    )

    document.querySelectorAll('.rv').forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const bar = document.getElementById('bar')
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (!bar) return
      bar.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const initBackground = () => {
      const canvas = document.getElementById('bg')
      if (!canvas || !window.THREE) return

      const renderer = new window.THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x050507, 1)

      const scene = new window.THREE.Scene()
      scene.fog = new window.THREE.Fog(0x050507, 8, 22)

      const camera = new window.THREE.PerspectiveCamera(60, 1, 0.1, 100)
      camera.position.z = 8

      const particleCount = 2500
      const positions = new Float32Array(particleCount * 3)
      for (let i = 0; i < particleCount * 3; i += 1) {
        positions[i] = (Math.random() - 0.5) * 24
      }

      const geometry = new window.THREE.BufferGeometry()
      geometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3))
      const points = new window.THREE.Points(
        geometry,
        new window.THREE.PointsMaterial({
          size: 0.04,
          color: 0xa78bfa,
          transparent: true,
          opacity: 0.85,
          depthWrite: false,
          blending: window.THREE.AdditiveBlending,
        }),
      )
      scene.add(points)

      const defs = [
        [new window.THREE.IcosahedronGeometry(1.3, 0), 0x8b5cf6, -5, 2, -2],
        [new window.THREE.TorusKnotGeometry(0.9, 0.28, 120, 16), 0x22d3ee, 5.5, -2, -3],
        [new window.THREE.OctahedronGeometry(1, 0), 0xf472b6, 4, 3.5, -5],
        [new window.THREE.TorusGeometry(0.9, 0.25, 16, 48), 0x34d399, -4.5, -3.2, -4],
      ]

      const shapes = defs.map(([shape, color, x, y, z]) => {
        const material = new window.THREE.MeshBasicMaterial({ color, wireframe: true })
        const mesh = new window.THREE.Mesh(shape, material)
        mesh.position.set(x, y, z)
        mesh.userData = { y }
        scene.add(mesh)
        return mesh
      })

      let pointerX = 0
      let pointerY = 0

      window.addEventListener('pointermove', (event) => {
        pointerX = (event.clientX / window.innerWidth) * 2 - 1
        pointerY = -(event.clientY / window.innerHeight) * 2 + 1
      })

      const resize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight, false)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      }

      window.addEventListener('resize', resize)
      resize()

      const start = performance.now()

      const loop = () => {
        const time = (performance.now() - start) / 1000
        points.rotation.y = time * 0.03
        points.rotation.x = time * 0.012

        shapes.forEach((shape, index) => {
          shape.rotation.x = time * 0.3
          shape.rotation.y = time * 0.4
          shape.position.y = shape.userData.y + Math.sin(time * 1.2 + index * 1.7) * 0.4
        })

        camera.position.x += (pointerX * 1.5 - camera.position.x) * 0.04
        camera.position.y += (pointerY - camera.position.y) * 0.04
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)
        requestAnimationFrame(loop)
      }

      requestAnimationFrame(loop)
    }

    if (!window.THREE) {
      const existing = document.querySelector('script[src*="three.min.js"]')
      if (existing) {
        existing.addEventListener('load', initBackground)
        return () => existing.removeEventListener('load', initBackground)
      }

      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
      script.async = true
      script.onload = initBackground
      document.body.appendChild(script)
      return () => {
        script.onload = null
      }
    }

    initBackground()
  }, [])

  const filteredProjects =
    filter === 'All' ? SITE_CONFIG.projects : SITE_CONFIG.projects.filter((project) => project.category === filter)

  const handlePhotoMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(${(0.5 - y) * 28}deg) rotateY(${(x - 0.5) * 28}deg) scale(1.04)`
      cardRef.current.style.setProperty('--mx', `${x * 100}%`)
      cardRef.current.style.setProperty('--my', `${y * 100}%`)
    }
  }

  const handlePhotoLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = ''
    cardRef.current.style.setProperty('--mx', '50%')
    cardRef.current.style.setProperty('--my', '50%')
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setFileImage(String(reader.result || ''))
    reader.readAsDataURL(file)
  }

  const goToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (page) => {
    setActivePage(page)
    goToSection(page)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <canvas id="bg" />
      <div id="bar" />

      <nav className="nav" id="nav">
        <span ref={pillRef} className="pill" id="pill" />
        <button type="button" data-p="home" className={activePage === 'home' ? 'on' : ''} onClick={() => handleNavClick('home')}>
          Home
        </button>
        <button type="button" data-p="about" className={activePage === 'about' ? 'on' : ''} onClick={() => handleNavClick('about')}>
          About
        </button>
        <button type="button" data-p="process" className={activePage === 'process' ? 'on' : ''} onClick={() => handleNavClick('process')}>
          Process
        </button>
        <button type="button" data-p="projects" className={activePage === 'projects' ? 'on' : ''} onClick={() => handleNavClick('projects')}>
          Projects
        </button>
        <button type="button" data-p="contact" className={activePage === 'contact' ? 'on' : ''} onClick={() => handleNavClick('contact')}>
          Contact
        </button>
      </nav>

      <main>
        <section className="sec" id="home">
          <div className="hero">
            <div>
              <p>Hello, I’m</p>
              <h1 className="gt">{SITE_CONFIG.profile.name}</h1>
              <div className="role">
                <span id="tw">{roleText}</span>
                <span className="cur">|</span>
              </div>
              <p className="lead" style={{ maxWidth: '560px' }}>
                {SITE_CONFIG.profile.intro}
              </p>
              <div className="row">
                <button type="button" className="btn" data-go="projects" onClick={() => handleNavClick('projects')}>
                  View my work
                </button>
                <button type="button" className="btn g" data-go="contact" onClick={() => handleNavClick('contact')}>
                  Let’s talk
                </button>
              </div>
            </div>

            <div className="pw">
              <div
                ref={cardRef}
                className="ph"
                id="ph"
                tabIndex={0}
                role="button"
                aria-label="Upload your photo"
                onMouseMove={handlePhotoMove}
                onMouseLeave={handlePhotoLeave}
                onClick={() => fileRef.current?.click()}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    fileRef.current?.click()
                  }
                }}
              >
                {!fileImage && (
                  <div className="em" id="em">
                    <div style={{ fontSize: '3rem' }}>?</div>
                    <b>Click to upload your photo</b>
                    <span>Move your mouse over this card to see the 3D tilt</span>
                  </div>
                )}
                {fileImage && <img src={fileImage} alt="Kerry" />}
                <div className="glow" />
                <input ref={fileRef} type="file" id="file" accept="image/*" hidden onChange={handleFileChange} />
              </div>
            </div>
          </div>

          <div className="mq">
            <div className="mt" id="mt">
              {[...SITE_CONFIG.marqueeSkills, ...SITE_CONFIG.marqueeSkills].map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item} ✦
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="about">
          <div className="rv">
            <span className="lab">01 / About me</span>
            <h2>
              One creator, <span className="gt">four superpowers</span>
            </h2>
            <p className="lead">{SITE_CONFIG.profile.about}</p>
          </div>

          <div className="stats rv" style={{ marginBottom: '60px' }}>
            <div className="card stat">
              <b className="gt" data-n="4" data-s="">
                0
              </b>
              <p>Core skills</p>
            </div>
            <div className="card stat">
              <b className="gt" data-n="50" data-s="+">
                0
              </b>
              <p>Projects delivered</p>
            </div>
            <div className="card stat">
              <b className="gt" data-n="30" data-s="+">
                0
              </b>
              <p>Happy clients</p>
            </div>
            <div className="card stat">
              <b className="gt" data-n="5" data-s="+">
                0
              </b>
              <p>Years of experience</p>
            </div>
          </div>

          <h3 className="rv" style={{ fontSize: '1.8rem', marginBottom: '22px' }}>
            What I do
          </h3>
          <div className="grid two">
            <div className="card rv">
              <h3>Social Media Management</h3>
              <p>Content strategy, community growth, and a consistent brand voice across every platform.</p>
              <span className="tag">Instagram</span>
              <span className="tag">TikTok</span>
              <span className="tag">LinkedIn</span>
              <span className="tag">YouTube</span>
            </div>
            <div className="card rv">
              <h3>Video Editing</h3>
              <p>Short-form reels, long-form stories, motion graphics, sound design, and color work that holds attention.</p>
              <span className="tag">Premiere Pro</span>
              <span className="tag">After Effects</span>
              <span className="tag">DaVinci</span>
              <span className="tag">CapCut</span>
            </div>
            <div className="card rv">
              <h3>Digital Marketing &amp; Ads</h3>
              <p>Paid campaigns, funnels, and A/B tests built around real return on ad spend.</p>
              <span className="tag">Meta Ads</span>
              <span className="tag">Google Ads</span>
              <span className="tag">SEO</span>
              <span className="tag">Email</span>
            </div>
            <div className="card rv">
              <h3>Software Engineering</h3>
              <p>Modern web apps with clean code, smooth animation, and polished interfaces.</p>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">Three.js</span>
              <span className="tag">Git</span>
            </div>
          </div>
        </section>

        <section className="sec" id="process">
          <div className="rv">
            <span className="lab">02 / Process</span>
            <h2>
              How I <span className="gt">work</span>
            </h2>
            <p className="lead">
              A simple, repeatable process that takes an idea from the first conversation to measurable results.
            </p>
          </div>

          <div className="steps">
            <div className="step rv">
              <div className="num">01</div>
              <div className="card">
                <h3>Discover</h3>
                <p>We start with a call to understand your brand, your audience, your goals, and what success looks like.</p>
              </div>
            </div>
            <div className="step rv">
              <div className="num">02</div>
              <div className="card">
                <h3>Strategy</h3>
                <p>I build a clear plan: content pillars, ad structure, funnel, or technical architecture, with a timeline and budget.</p>
              </div>
            </div>
            <div className="step rv">
              <div className="num">03</div>
              <div className="card">
                <h3>Create</h3>
                <p>Scripts, shoots, edits, designs, and code come together. You see drafts early and often.</p>
              </div>
            </div>
            <div className="step rv">
              <div className="num">04</div>
              <div className="card">
                <h3>Launch</h3>
                <p>Content goes live, campaigns start running, and the product ships, all tracked from day one.</p>
              </div>
            </div>
            <div className="step rv">
              <div className="num">05</div>
              <div className="card">
                <h3>Optimize</h3>
                <p>I study the data, test new angles, and double down on what works so results keep growing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="projects">
          <div className="rv">
            <span className="lab">03 / Projects</span>
            <h2>
              Selected <span className="gt">work</span>
            </h2>
            <p className="lead">A mix of campaigns, videos, and software. Filter by skill to explore.</p>
          </div>

          <div className="f" id="filters">
            {['All', 'Social Media', 'Video', 'Ads', 'Software'].map((entry) => (
              <button
                key={entry}
                type="button"
                className={`btn ${filter === entry ? '' : 'g'}`}
                data-f={entry}
                onClick={() => setFilter(entry)}
              >
                {entry}
              </button>
            ))}
          </div>

          <div className="grid" id="pg">
            {filteredProjects.map((project) => (
              <a key={project.title} className="card" data-c={project.category} href="#projects" onClick={(event) => event.preventDefault()}>
                <span className="tag" style={{ margin: 0 }}>
                  {project.category}
                </span>
                <h3 style={{ marginTop: '14px' }}>{project.title}</h3>
                <p>{project.desc}</p>
                <b className="res gt">{project.result}</b>
              </a>
            ))}
          </div>
        </section>

        <section className="sec" id="contact">
          <div className="rv">
            <span className="lab">04 / Contact</span>
            <h2>
              Let’s <span className="gt">work together</span>
            </h2>
          </div>

          <div className="grid two" style={{ alignItems: 'start', marginTop: '26px' }}>
            <div className="rv">
              <p className="lead">Have a project, a campaign, or an idea? Send me a message and I’ll get back to you soon.</p>
              <div className="card" style={{ marginBottom: '20px' }}>
                <h3>Email</h3>
                <p id="mail">
                  <a href={`mailto:${SITE_CONFIG.profile.email}`} style={{ color: 'inherit' }}>
                    {SITE_CONFIG.profile.email}
                  </a>
                </p>
              </div>
              <div className="card" style={{ marginBottom: '28px' }}>
                <h3>Availability</h3>
                <p>Open for freelance projects and collaborations.</p>
              </div>
              <div id="soc" className="row" style={{ marginTop: '0' }}>
                {SITE_CONFIG.socials.map((social) => (
                  <a
                    key={social.name}
                    className="btn g social-link"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <SocialIcon type={social.icon} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rv">
              {!submitted ? (
                <form className="card" id="form" onSubmit={handleSubmit}>
                  <input placeholder="Your name" required />
                  <input type="email" placeholder="Your email" required />
                  <input placeholder="What do you need? (Social media, video, ads, website)" />
                  <textarea placeholder="Tell me about your project…" required />
                  <button className="btn" type="submit">
                    Send message
                  </button>
                </form>
              ) : (
                <div className="card" id="ok" style={{ display: 'block' }}>
                  <h2 className="gt" style={{ margin: '0 0 8px' }}>
                    Message sent ✨
                  </h2>
                  <p>Thank you! I’ll reply as soon as I can.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Keriya Abdellah. All rights reserved.</p>
      </footer>
    </>
  )
}