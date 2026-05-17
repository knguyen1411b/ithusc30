'use client'
import TimeLine from '@/layouts/section/Event/time-line'
export default function EventSection() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="container pt-14 pb-16">
        <div className="pb-6">
          <h1
            className="text-prussian-blue-800 font-bold text-4xl md:text-5xl montserrat text-center mb-3"
            data-aos="fade-in"
          >
            Lịch trình sự kiện
          </h1>
          <p className="text-center text-prussian-blue-700 text-lg">
            Hoạt động nổi bật trong khuôn khổ kỷ niệm 30 năm khoa Công nghệ
            thông tin
          </p>
        </div>
        <section
          className="timeline"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <TimeLine />
        </section>
      </div>
    </div>
  )
}
