'use client'
import ProgressBar from '@/components/progress-bar'
import ScrollToTop from '@/components/scroll-to-top'
import { useAOS } from '@/utils/aos'
import { motion, useInView } from 'framer-motion'
import ReactLenis from 'lenis/react'
import { useEffect, useRef, useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Section from './section'
import AboutSection from './section/About'
import EventSection from './section/Event'
import HomeSection from './section/Home'
import ItinerarySection from './section/Itinerary'

export default function MainLayout() {
  useAOS()

  const [isActi, setIsActi] = useState(0)

  const HomeRef = useRef(null)
  const AboutRef = useRef(null)
  const ItineraryRef = useRef(null)
  const EventRef = useRef(null)
  const OutRef = useRef(null)

  const HomeInView = useInView(HomeRef, { once: false })
  const AboutInView = useInView(AboutRef, { once: false })
  const ItineraryInView = useInView(ItineraryRef, { once: false })
  const EventInView = useInView(EventRef, { once: false })
  const OutInView = useInView(OutRef, { once: false })

  useEffect(() => {
    if (HomeInView) {
      setIsActi(1)
    }
    if (AboutInView) {
      setIsActi(2)
    }
    if (ItineraryInView) {
      setIsActi(3)
    }
    if (EventInView) {
      setIsActi(4)
    }
    if (OutInView) {
      setIsActi(0)
    }
  }, [HomeInView, AboutInView, ItineraryInView, EventInView, OutInView])

  return (
    <>
      {/* Header */}
      <Navbar inView={isActi} />

      <ReactLenis root>
        {/* Home section */}
        <Section id="Home" ref={HomeRef}>
          <HomeSection />
        </Section>

        {/* About section */}
        <Section id="About" ref={AboutRef}>
          <AboutSection />
        </Section>

        {/* Itinerary section */}
        <Section id="Itinerary" ref={ItineraryRef}>
          <ItinerarySection />
        </Section>

        {/* Event section */}
        <Section id="Event" ref={EventRef}>
          <EventSection />
        </Section>

        {/* Out section */}
        <motion.section id="OutSection" ref={OutRef} />

        {/* Footer section */}
        <Footer />
      </ReactLenis>

      {/* Extend section */}
      <ProgressBar />
      <ScrollToTop />
    </>
  )
}
