'use client'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { ArrowBigUpDash } from 'lucide-react'
import { Tooltip } from '@nextui-org/tooltip'
export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight * 0.25)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (showButton) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 450)
      return () => clearTimeout(timer)
    }
  }, [showButton])

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    })
  }
  // #B474F8, #429DFF
  const classBtn: string =
    'rounded-full text-white fixed bottom-8 right-5 p-3 hover:bottom-10 animate-fadeIn transition-all duration-300 ease-in-out BTN_TO_TOP'

  return (
    <>
      {isVisible && (
        <Tooltip content="Cuộn lên đầu" placement="top">
          <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className={classBtn}
            style={{
              opacity: showButton ? 1 : 0,
              // background: 'linear-gradient(145deg, #429DFF, #B474F8)',
              background: '#429DFF',
            }}
          >
            <ArrowBigUpDash size={20} />
          </button>
        </Tooltip>
      )}
    </>
  )
}
