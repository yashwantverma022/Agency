import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    let activeEl = null
    let activeHeroEl = null
    let originalStyles = {}

    // Set initial position centered
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })

    const handleMouseMove = (e) => {
      if (activeHeroEl) {
        // Large magnifying lens effect over hero text
        // z-index: 50 ensures the cursor is drawn ON TOP of the text,
        // allowing mix-blend-difference to invert the text to white.
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          width: 120,
          height: 120,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
          zIndex: 50,
          duration: 0.15,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else if (activeEl) {
        const rect = activeEl.getBoundingClientRect()
        // Center position of the hovered element
        const targetX = rect.left + rect.width / 2
        const targetY = rect.top + rect.height / 2
        
        // Magnetic effect: pull the cursor slightly towards the actual mouse position (15%)
        const x = targetX + (e.clientX - targetX) * 0.15
        const y = targetY + (e.clientY - targetY) * 0.15

        const computedStyle = window.getComputedStyle(activeEl)
        let borderRadius = computedStyle.borderRadius

        // Fallback to a nice rounded corner if the element has sharp corners (like standard links)
        if (!borderRadius || borderRadius === '0px' || borderRadius === '0') {
          borderRadius = '12px'
        }

        // Snap and wrap the element (solid black background, no difference blend)
        // z-index: 10 ensures the cursor is drawn BEHIND the elevated button text (z-20)
        gsap.to(cursor, {
          x: x,
          y: y,
          width: rect.width + 16,  // add padding to wrap the button nicely
          height: rect.height + 10,
          borderRadius: borderRadius,
          backgroundColor: '#000000',
          mixBlendMode: 'normal',
          zIndex: 10,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else {
        // Normal cursor state following the mouse pointer
        // z-index: 50 ensures it floats above standard content
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: '#000000',
          mixBlendMode: 'normal',
          zIndex: 50,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      }
    }

    // Restore styles of the previously hovered element
    const restoreElement = (el) => {
      gsap.to(el, {
        color: originalStyles.color || '',
        duration: 0.2,
        overwrite: 'auto',
        onComplete: () => {
          // Only restore positioning if it's still not the active element
          if (el !== activeEl) {
            el.style.position = originalStyles.position || ''
            el.style.zIndex = originalStyles.zIndex || ''
          }
        }
      })

      // Also restore nested spans
      const spans = el.querySelectorAll('span')
      if (spans.length > 0) {
        gsap.to(spans, {
          color: '',
          duration: 0.2,
          overwrite: 'auto'
        })
      }
    }

    const restoreHeroSpans = (el) => {
      const spans = el.querySelectorAll('span')
      gsap.to(spans, {
        color: '', // restore default CSS/Tailwind color
        duration: 0.2,
        overwrite: 'auto'
      })
    }

    // Dynamic event delegation for hovering over interactive elements
    const handleMouseOver = (e) => {
      // Check if we are over the hero text
      const heroTarget = e.target.closest('.hero-text')
      if (heroTarget) {
        if (activeEl) {
          restoreElement(activeEl)
          activeEl = null
        }
        
        if (!activeHeroEl) {
          activeHeroEl = heroTarget
          // Temporarily animate colored spans to black so they invert to pure white
          const spans = heroTarget.querySelectorAll('span')
          gsap.to(spans, {
            color: '#000000',
            duration: 0.2,
            overwrite: 'auto'
          })
        }
        return
      }

      // Check if we are over standard buttons/links
      const target = e.target.closest('a, button, [role="button"], .cursor-pointer')
      
      // If no valid target or already active, do nothing
      if (!target || target === activeEl) return

      // If switching from another element, restore it first
      if (activeEl) {
        restoreElement(activeEl)
      }

      activeEl = target

      if (activeHeroEl) {
        restoreHeroSpans(activeHeroEl)
        activeHeroEl = null
      }

      // Save original styles
      originalStyles = {
        color: target.style.color || window.getComputedStyle(target).color,
        position: target.style.position,
        zIndex: target.style.zIndex
      }

      // Elevate the element z-index so it sits on top of the cursor (which is z-10)
      target.style.position = 'relative'
      target.style.zIndex = '20'

      // Animate text color to white
      gsap.to(target, {
        color: '#ffffff',
        duration: 0.2,
        overwrite: 'auto'
      })

      // Also animate nested spans to white
      const spans = target.querySelectorAll('span')
      if (spans.length > 0) {
        gsap.to(spans, {
          color: '#ffffff',
          duration: 0.2,
          overwrite: 'auto'
        })
      }
    }

    const handleMouseOut = (e) => {
      // If leaving hero text
      if (activeHeroEl) {
        const relatedTarget = e.relatedTarget
        if (!relatedTarget || !activeHeroEl.contains(relatedTarget)) {
          restoreHeroSpans(activeHeroEl)
          activeHeroEl = null
        }
      }

      // If leaving button/link
      const target = e.target.closest('a, button, [role="button"], .cursor-pointer')
      if (target && target === activeEl) {
        // Prevent leaving active state if we're just moving inside child elements (e.g. icon to text inside button)
        const relatedTarget = e.relatedTarget
        if (relatedTarget && activeEl.contains(relatedTarget)) {
          return
        }

        restoreElement(activeEl)
        activeEl = null
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div 
      ref={cursorRef}
      id='cursor'
      className='w-5 h-5 bg-black rounded-full fixed top-0 left-0 pointer-events-none z-50'
    ></div>
  )
}

export default Cursor