import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, CSSProperties } from 'react'

interface HeroImageProps {
  src: string
  alt: string
  style?: CSSProperties
}

interface ContentImageProps {
  src: string
  alt: string
  style?: CSSProperties
  hoverZoom?: boolean
  colorOverlay?: boolean
}

// Hero Image Component - Floating + Gradient Glow + Tilt on Scroll
export const HeroImage = ({ src, alt, style }: HeroImageProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Tilt effect based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5])

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.6
        }
      }}
      style={{
        position: 'relative',
        perspective: '1000px',
        ...style
      }}
    >
      {/* Animated Gradient Border Glow */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #1CAFD8, #10B981)',
            'linear-gradient(90deg, #10B981, #1CAFD8)',
            'linear-gradient(135deg, #1CAFD8, #10B981)',
            'linear-gradient(180deg, #10B981, #1CAFD8)',
            'linear-gradient(225deg, #1CAFD8, #10B981)',
            'linear-gradient(270deg, #10B981, #1CAFD8)',
            'linear-gradient(315deg, #1CAFD8, #10B981)',
            'linear-gradient(360deg, #10B981, #1CAFD8)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '-4px',
          left: '-4px',
          right: '-4px',
          bottom: '-4px',
          borderRadius: '24px',
          zIndex: 0,
          filter: 'blur(12px)',
          opacity: 0.7
        }}
      />

      {/* Image Container with Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          border: '6px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(28, 175, 216, 0.3)',
          background: '#ffffff',
          position: 'relative'
        }}>
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </motion.div>

      {/* Floating Shadow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.95, 1, 0.95]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '10%',
          right: '10%',
          height: '30px',
          background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
          filter: 'blur(15px)',
          zIndex: -1
        }}
      />
    </motion.div>
  )
}

// Content Image Component - Glass-morphism + Hover Zoom + Color Overlay
export const ContentImage = ({
  src,
  alt,
  style,
  hoverZoom = true,
  colorOverlay = true
}: ContentImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hoverZoom ? { scale: 1.02 } : {}}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Glass-morphism Frame */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '16px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Inner container for image and overlay */}
      <div style={{
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      }}>
        {/* Image with hover zoom */}
        <motion.img
          src={src}
          alt={alt}
          whileHover={hoverZoom ? { scale: 1.1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Color Accent Overlay */}
        {colorOverlay && (
          <motion.div
            initial={{ opacity: 0.15 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        )}

        {/* Shimmer effect on hover */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        />
      </div>

      {/* Blur Background Effect on Hover */}
      {hoverZoom && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '24px',
            zIndex: -1,
            pointerEvents: 'none'
          }}
        />
      )}
    </motion.div>
  )
}
