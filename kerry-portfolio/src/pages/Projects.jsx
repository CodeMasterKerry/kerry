import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import PageWrap from '../components/PageWrap'

const filters = ['All', 'Social Media', 'Video', 'Ads', 'Software']

const projects = [
  {
    title: 'Brand Growth Campaign',
    cat: 'Social Media',
    desc: 'Grew an account from 2K to 80K followers in six months through content systems and creator strategy.',
    link: '#',
  },
  {
    title: 'Cinematic Brand Film',
    cat: 'Video',
    desc: 'A 90-second brand story with motion graphics, pacing, and sound design built to convert attention.',
    link: '#',
  },
  {
    title: 'Meta Ads Funnel',
    cat: 'Ads',
    desc: 'Scaled a product launch with a 4.2x return on ad spend using audience testing and creative iteration.',
    link: '#',
  },
  {
    title: 'E-commerce Web App',
    cat: 'Software',
    desc: 'Full-stack React and Node storefront with payments, analytics, and a conversion-focused UI.',
    link: '#',
  },
  {
    title: 'Short-Form Reel Series',
    cat: 'Video',
    desc: 'A reel series that surpassed 1M total views through hook-first editing and content testing.',
    link: '#',
  },
  {
    title: 'Content Calendar System',
    cat: 'Social Media',
    desc: 'A repeatable weekly content system that helped a team of five stay consistent and strategic.',
    link: '#',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const shown = projects.filter((project) => active === 'All' || project.cat === active)

  return (
    <PageWrap>
      <div className="page">
        <div className="section-header">
          <p className="eyebrow">My work</p>
          <h2>Selected projects across content, ads, and digital products.</h2>
        </div>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={'btn ' + (active === filter ? '' : 'ghost')}
              onClick={() => setActive(filter)}
              style={{ padding: '10px 22px' }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((project, index) => (
              <motion.article
                key={project.title}
                className="card project-card"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <span className="project-tag">{project.cat}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} className="project-link">
                  View project
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageWrap>
  )
}
