import Image from 'next/image'
import h from './home.module.scss'

export default function BackgroundHome() {
  const duration = '20s'
  const images1 = Array.from(
    { length: 10 },
    (_, i) => `/slides/img-${i + 1}.webp`,
  )
  const images2 = Array.from(
    { length: 10 },
    (_, i) => `/slides/img-${i + 11}.webp`,
  )
  const images3 = Array.from(
    { length: 10 },
    (_, i) => `/slides/img-${i * 2 + 1}.webp`,
  )
  return (
    <div className={`${h.tagList}`}>
      {/* Loop slider 1 */}
      <div
        className={`${h.loopSlider}`}
        style={
          {
            '--duration': duration,
            '--direction': 'reverse',
          } as React.CSSProperties
        }
      >
        <div className={`${h.inner}`}>
          {images1.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              width={250}
              height={250}
              className={`${h.tag}`}
              placeholder="empty"
              priority
            />
          ))}
        </div>
      </div>

      {/* Loop slider 2 */}
      <div
        className={`${h.loopSlider}`}
        style={
          {
            '--duration': duration,
            '--direction': 'normal',
          } as React.CSSProperties
        }
      >
        <div className={`${h.inner}`}>
          {images2.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 11}`}
              width={300} // Adjust width as needed
              height={200} // Adjust height as needed
              className={`${h.tag}`}
              placeholder="empty"
            />
          ))}
        </div>
      </div>

      {/* Loop slider 1 */}
      <div
        className={`${h.loopSlider}`}
        style={
          {
            '--duration': duration,
            '--direction': 'reverse',
          } as React.CSSProperties
        }
      >
        <div className={`${h.inner}`}>
          {images3.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              width={300} // Adjust width as needed
              height={200} // Adjust height as needed
              className={`${h.tag}`}
              placeholder="empty"
            />
          ))}
        </div>
      </div>

      {/* Optional Fade Effect */}
      <div className={`${h.fade}`}></div>
    </div>
  )
}
