import { motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'

const skills = [
  {
    title: 'Social Media Management',
    desc: 'Content strategy, community growth, and a consistent brand voice across every platform.',
    tags: ['Instagram', 'TikTok', 'LinkedIn', 'Analytics'],
  },
  {
    title: 'Video Editing',
    desc: 'Short-form reels, long-form storytelling, motion graphics, and editing that keeps attention.',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci', 'CapCut'],
  },
  {
    title: 'Digital Marketing & Ads',
    desc: 'Paid campaigns, funnel strategy, and A/B testing built around real return on ad spend.',
    tags: ['Meta Ads', 'Google Ads', 'SEO', 'Funnels'],
  },
  {
    title: 'Software Engineering',
    desc: 'Modern, clean, user-friendly web experiences built with performance and polish in mind.',
    tags: ['React', 'Node.js', 'JavaScript', 'Three.js'],
  },
]

const stats = [
  { n: '4', l: 'Core skills' },
  { n: '50+', l: 'Projects' },
  { n: '30+', l: 'Happy clients' },
  { n: '5+', l: 'Years experience' },
]

export default function About() {
  return (
    <PageWrap>
      <div className="page">
        <div className="section-header">
          <p className="eyebrow">About me</p>
          <h2>Creative strategist with a developer&apos;s edge.</h2>
        </div>

        <div className="story-grid">
          <div className="card">
            <p>
              I&apos;m Kerry, a multi-skilled creator who sits at the crossroads of creativity,
              strategy, and code. I can shape the idea, edit the story, run the campaign, and
              build the digital experience it lives on. My work is designed to look sharp, feel
              memorable, and convert attention into action.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="card stat-card" key={stat.l}>
                <strong>{stat.n}</strong>
                <span>{stat.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-header section-spacing">
          <p className="eyebrow">What I do</p>
          <h2>From brand vision to technical execution.</h2>
        </div>

        <div className="grid skills-grid">
          {skills.map((skill, index) => (
            <motion.article
              className="card skill-card"
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>

              <div className="tag-row">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageWrap>
  )
}
