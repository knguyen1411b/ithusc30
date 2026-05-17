'use client'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function DNCB() {
  const data = [
    { number: 26, label: 'Viên chức' },
    { number: 23, label: 'Giảng viên' },
    { number: 6, label: 'Phó giáo sư' },
    { number: 9, label: 'Tiến sĩ' },
    { number: 10, label: 'Thạc sĩ' },
    { number: 2, label: 'Trợ giảng' },
    { number: 1, label: 'Văn thư' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-10 pt-8 text-center">
      {data.map((item, index) => (
        <Card key={index} number={item.number} label={item.label} />
      ))}
    </div>
  )
}

function Card({ number, label }: { number: number; label: string }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })

      // Delay 2 seconds before starting CountUp
      const timer = setTimeout(() => {
        setStartCount(true)
      }, 1500)

      return () => clearTimeout(timer) // Cleanup timeout on unmount
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-36 p-6 rounded-2xl bg-white/95 border border-prussian-blue-100 hover:shadow-2xl transition duration-300 min-h-40 center"
    >
      <p className="text-4xl font-extrabold text-prussian-blue-700">
        {startCount ? <CountUp end={number} duration={5} /> : '0'}
      </p>
      <p className="text-xl font-semibold text-gray-600 mt-2">{label}</p>
    </motion.div>
  )
}
