const itineraryData = [
  {
    year: '1994',
    description:
      'Ngày 13 tháng 12 năm 1994, Bộ Giáo dục và Đào tạo ra quyết định thành lập khoa Công nghệ thông tin tại Đại học Huế.',
  },
  {
    year: '1995',
    description:
      'Ngày 01 tháng 06 năm 1995, chính thức đào tạo cử nhân ngành Công nghệ thông tin, trở thành 1 trong 6 khoa Công nghệ thông tin trọng điểm trên toàn quốc.',
  },
  {
    year: '2000',
    description:
      'Năm 2000, đào tạo thạc sĩ chuyên ngành Khoa học máy tính được đưa vào hoạt động.',
  },
  {
    year: '2010',
    description:
      'Năm 2010, khoa Công nghệ thông tin được giao trọng trách đào tạo tiến sĩ chuyên ngành Khoa học máy tính.',
  },
  {
    year: '2018',
    description:
      'Năm 2018, mở ngành đào tạo cử nhân Kỹ thuật phần mềm (cơ chế đặc thù).',
  },
  {
    year: '2020',
    description: 'Năm 2020, đào tạo thạc sĩ ngành Quản lí công nghệ thông tin.',
  },
]

export default function ItinerarySection() {
  return (
    <div className="bg-gradient-to-b from-[#f5fbff] via-[#e6f2ff] to-[#f3f8ff] py-16 md:py-20 overflow-hidden">
      <div className="container">
        <h1
          className="text-prussian-blue-800 font-bold text-4xl md:text-5xl montserrat text-center mb-4"
          data-aos="fade-in"
        >
          Hành trình 30 năm phát triển
        </h1>
        <p className="text-center text-prussian-blue-700 text-lg mb-12">
          Những cột mốc nổi bật trong hành trình hình thành và phát triển của
          khoa
        </p>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 h-full w-[3px] bg-gradient-to-b from-prussian-blue-300 via-sky-300 to-prussian-blue-500 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-8 md:space-y-10">
            {itineraryData.map((item, index) => {
              const isRight = index % 2 !== 0
              return (
                <div
                  key={item.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${isRight ? '' : ''}`}
                  data-aos="fade-up"
                >
                  <div
                    className={`${isRight ? 'md:order-2' : 'md:order-1'} pl-14 md:pl-0`}
                  >
                    <article className="rounded-3xl border border-prussian-blue-100 bg-white/95 p-6 md:p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-prussian-blue-900 mb-3">
                        {item.year}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {item.description}
                      </p>
                    </article>
                  </div>
                  <div
                    className={`${isRight ? 'md:order-1' : 'md:order-2'} hidden md:block`}
                  />
                  <div className="absolute left-5 top-8 h-4 w-4 rounded-full bg-prussian-blue-700 ring-4 ring-sky-100 md:left-1/2 md:-translate-x-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
