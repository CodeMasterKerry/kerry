import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x050507, 1)

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x050507, 8, 22)

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
    camera.position.z = 8

    const particleCount = 2500
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 1) {
      positions[i] = (Math.random() - 0.5) * 24
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.04,
        color: 0xa78bfa,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    )
    scene.add(points)

    const defs = [
      [new THREE.IcosahedronGeometry(1.3, 0), 0x8b5cf6, -5, 2, -2],
      [new THREE.TorusKnotGeometry(0.9, 0.28, 120, 16), 0x22d3ee, 5.5, -2, -3],
      [new THREE.OctahedronGeometry(1, 0), 0xf472b6, 4, 3.5, -5],
      [new THREE.TorusGeometry(0.9, 0.25, 16, 48), 0x34d399, -4.5, -3.2, -4],
    ]

    const shapes = defs.map(([shapeGeometry, color, x, y, z]) => {
      const material = new THREE.MeshBasicMaterial({ color, wireframe: true })
      const mesh = new THREE.Mesh(shapeGeometry, material)
      mesh.position.set(x, y, z)
      mesh.userData = { baseY: y, index: Math.random() }
      scene.add(mesh)
      return mesh
    })

    let mouseX = 0
    let mouseY = 0

    const onPointerMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', resize)
    resize()

    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = (now - startTime) / 1000

      points.rotation.y = elapsed * 0.03
      points.rotation.x = elapsed * 0.012

      shapes.forEach((mesh, index) => {
        mesh.rotation.x = elapsed * 0.3 + index * 0.4
        mesh.rotation.y = elapsed * 0.4 + index * 0.7
        mesh.position.y = mesh.userData.baseY + Math.sin(elapsed * 1.2 + mesh.userData.index * 1.7) * 0.4
      })

      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.04
      camera.position.y += (mouseY - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    const frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      points.material.dispose()
      shapes.forEach((mesh) => {
        mesh.geometry.dispose()
        mesh.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return <canvas id="bg" ref={canvasRef} />
}
