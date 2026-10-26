import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="nav" aria-label="Main navigation">
      {links.map((link) => {
        const isActive = pathname === link.to

        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive: navActive }) =>
              'nav-link' + (navActive ? ' active' : '')
            }
          >
            {isActive && (
              <motion.span
                className="nav-pill"
                layoutId="nav-pill"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span>{link.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
