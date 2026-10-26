import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function PhotoCard() {
  const [photo, setPhoto] = useState(() => {
    try {
      return localStorage.getItem('kerry-photo') ?? ''
    } catch {
      return ''
    }
  })

  const inputRef = useRef(null)
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), {
    stiffness: 180,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), {
    stiffness: 180,
    damping: 18,
  })

  useEffect(() => {
    if (photo) {
      try {
        localStorage.setItem('kerry-photo', photo)
      } catch {
        // Ignore storage issues
      }
    }
  }, [photo])

  const onMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    x.set(px - 0.5)
    y.set(py - 0.5)

    cardRef.current.style.setProperty('--mx', `${px * 100}%`)
    cardRef.current.style.setProperty('--my', `${py * 100}%`)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const onFile = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setPhoto(String(reader.result || ''))
    reader.readAsDataURL(file)
  }

  return (
    <motion.div
      ref={cardRef}
      className="photo-card"
      style={{
        rotateX,
        rotateY,
        x: x * 18,
        y: y * 18,
        transformPerspective: 1000,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => inputRef.current?.click()}
      initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 90, damping: 12 }}
      whileHover={{ scale: 1.04 }}
    >
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={onFile} />

      {photo ? (
        <img src={photo} alt="Kerry portrait" />
      ) : (
        <div className="photo-placeholder">
          <div className="photo-icon">📸</div>
          <strong>Click to upload your photo</strong>
          <span>It will appear here with a 3D tilt effect</span>
        </div>
      )}

      <div className="photo-glow" />
    </motion.div>
  )
}
