import ai from '@a/imgs/ai.png'
import banner from '@a/imgs/banner2.png'
import gv from '@a/imgs/cntt.jpg'
import img from '@a/imgs/img-8.webp'
import mang from '@a/imgs/mang.png'
import pm from '@a/imgs/pm.png'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import DNCB from './dncb'

export default function AboutSection() {
  return (
    <>
      <div className="container py-14 md:py-20" data-aos="fade-up">
        <h1 className="text-prussian-blue-800 font-bold text-4xl md:text-5xl montserrat">
          Giới thiệu
        </h1>
        <div className="flex items-center mb-10 mt-5">
          <h2 className="text-gray-700 font-semibold text-xl md:text-2xl mr-5">
            Quyết định thành lập
          </h2>
          <hr className="flex-1 border-none mt-1 h-[2px] bg-prussian-blue-200 rounded-lg" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-white/85 rounded-3xl border border-prussian-blue-100 shadow-lg p-6 md:p-9">
          <div>
            <Image
              src={banner}
              alt="banner"
              className="rounded-[2rem] object-cover w-full max-w-[340px] h-[340px] mx-auto md:mx-0 shadow-xl"
              style={{ width: '340px', height: '340px' }}
            />
          </div>
          <div className="center flex-1">
            <p className="text-justify text-lg md:text-xl text-gray-700 leading-relaxed">
              Ngày 13/12/1994 Bộ Giáo dục và Đào tạo ký quyết định thành lập
              khoa Công nghệ thông tin (CNTT) thuộc trường Đại học Khoa học -
              Đại học Huế, một trong sáu khoa CNTT trọng điểm trên toàn quốc.
              Tuy nhiên, khoa CNTT chính thức hoạt động từ ngày 01/06/1995 với 6
              thành viên chuyển từ Bộ môn Toán ứng dụng của Khoa Toán – Cơ – Tin
              học.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-prussian-blue-100 via-sky-50 to-prussian-blue-100 py-12 mb-8">
        <div className="container">
          <div className="flex items-center">
            <hr className="flex-1 border-none h-[2px] bg-prussian-blue-300 rounded-lg" />
            <h1 className="text-prussian-blue-800 font-semibold text-2xl mx-5">
              Đội ngũ cán bộ
            </h1>
            <hr className="flex-1 border-none h-[2px] bg-prussian-blue-300 rounded-lg" />
          </div>
          <DNCB />
        </div>
      </div>
      <div
        className="container pt-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="relative about__img--hover">
          <Image
            src={gv}
            alt="gv"
            className="rounded-3xl object-cover"
            style={{ height: 400, objectPosition: 'center x' }}
          />
          <div className="ovl flex justify-center absolute bottom-0">
            <Button
              size="lg"
              className="absolute hover:opacity-100 font-bold bg-prussian-blue-800 text-white px-7"
              onPress={() => {
                window.open('https://it.husc.edu.vn/giang-vien', '_blank')
              }}
            >
              Xem đội ngũ cán bộ
            </Button>
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <div className="flex items-center">
          <hr className="flex-1 border-none h-[2px] bg-prussian-blue-300 rounded-lg" />
          <h1 className="text-prussian-blue-800 font-semibold text-2xl mx-5">
            Bộ môn
          </h1>
          <hr className="flex-1 border-none h-[2px] bg-prussian-blue-300 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Card
            data-aos="zoom-in"
            className="group relative overflow-hidden min-h-60 cursor-pointer border border-prussian-blue-100 bg-gradient-to-br from-[#f7fbff] to-[#e5f1ff] hover:shadow-2xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <div className="absolute -right-5 -top-8 text-[90px] font-black text-prussian-blue-100 group-hover:text-prussian-blue-200 transition">
              01
            </div>
            <CardBody className="center">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-prussian-blue-100">
                <Image src={ai} alt="AI" width={90} height={90} />
              </div>
            </CardBody>
            <hr />
            <CardFooter className="center text-prussian-blue-800 text-xl font-bold">
              Khoa học máy tính
            </CardFooter>
          </Card>
          <Card
            data-aos="zoom-in"
            className="group relative overflow-hidden min-h-60 cursor-pointer border border-prussian-blue-100 bg-gradient-to-br from-[#f1f9ff] to-[#dcf0ff] hover:shadow-2xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <div className="absolute -right-5 -top-8 text-[90px] font-black text-prussian-blue-100 group-hover:text-prussian-blue-200 transition">
              02
            </div>
            <CardBody className="center">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-prussian-blue-100">
                <Image src={pm} alt="pm" width={90} height={90} />
              </div>
            </CardBody>
            <hr />
            <CardFooter className="center text-prussian-blue-800 text-xl font-bold">
              Công nghệ phần mềm
            </CardFooter>
          </Card>
          <Card
            data-aos="zoom-in"
            className="group relative overflow-hidden min-h-60 cursor-pointer border border-prussian-blue-100 bg-gradient-to-br from-[#f7fbff] to-[#e5f1ff] hover:shadow-2xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <div className="absolute -right-5 -top-8 text-[90px] font-black text-prussian-blue-100 group-hover:text-prussian-blue-200 transition">
              03
            </div>
            <CardBody className="center">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-prussian-blue-100">
                <Image src={mang} alt="mang" width={90} height={90} />
              </div>
            </CardBody>
            <hr />
            <CardFooter className="center text-prussian-blue-800 text-xl font-bold">
              Mạng máy tính
            </CardFooter>
          </Card>
        </div>
      </div>
      <div
        className="w-full bg-prussian-blue-100 pt-12 pb-12 mt-8"
        data-aos="fade-in"
      >
        <div className="container">
          <div className="flex items-center">
            <hr className="flex-1 border-none h-[2px] bg-prussian-blue-300 rounded-lg" />
            <h1 className="text-prussian-blue-800 font-semibold text-2xl mx-5">
              Đào tạo
            </h1>
            <hr className="flex-1 border-none h-[2px] bg-prussian-blue-300 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card
              data-aos="zoom-in"
              className="relative overflow-hidden min-h-60 cursor-pointer border border-prussian-blue-100 bg-white/95 hover:shadow-2xl rounded-3xl"
              style={{ transition: 'all 0.3s ease' }}
            >
              <div className="h-3 bg-gradient-to-r from-sky-400 to-prussian-blue-700" />
              <CardHeader className="py-5 px-6 block">
                <p className="text-sm uppercase tracking-[0.18em] text-prussian-blue-500 mb-2">
                  Chương trình
                </p>
                <h2 className="text-2xl font-bold text-prussian-blue-800">
                  Bậc Đại học
                </h2>
              </CardHeader>
              <CardBody className="pb-8 px-6">
                <p className="text-gray-500 mb-4">2 chuyên ngành đào tạo</p>
                <div className="space-y-3">
                  <p className="text-lg text-gray-700 font-semibold flex items-center">
                    <CheckCircle2
                      size={18}
                      className="mr-2 text-prussian-blue-600 shrink-0"
                    />
                    Công nghệ thông tin
                  </p>
                  <p className="text-lg text-gray-700 font-semibold flex items-center">
                    <CheckCircle2
                      size={18}
                      className="mr-2 text-prussian-blue-600 shrink-0"
                    />
                    Kỹ thuật phần mềm
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card
              data-aos="zoom-in"
              className="relative overflow-hidden min-h-60 cursor-pointer border border-prussian-blue-100 bg-white/95 hover:shadow-2xl rounded-3xl"
              style={{ transition: 'all 0.3s ease' }}
            >
              <div className="h-3 bg-gradient-to-r from-cyan-400 to-blue-700" />
              <CardHeader className="py-5 px-6 block">
                <p className="text-sm uppercase tracking-[0.18em] text-prussian-blue-500 mb-2">
                  Chuyên sâu
                </p>
                <h2 className="text-2xl font-bold text-prussian-blue-800">
                  Bậc Thạc sĩ
                </h2>
              </CardHeader>
              <CardBody className="pb-8 px-6">
                <p className="text-gray-500 mb-4">2 định hướng nghiên cứu</p>
                <div className="space-y-3">
                  <p className="text-lg text-gray-700 font-semibold flex items-center">
                    <CheckCircle2
                      size={18}
                      className="mr-2 text-prussian-blue-600 shrink-0"
                    />
                    Khoa học máy tính
                  </p>
                  <p className="text-lg text-gray-700 font-semibold flex items-center">
                    <CheckCircle2
                      size={18}
                      className="mr-2 text-prussian-blue-600 shrink-0"
                    />
                    Quản lí công nghệ
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card
              data-aos="zoom-in"
              className="relative overflow-hidden min-h-60 cursor-pointer border border-prussian-blue-100 bg-white/95 hover:shadow-2xl rounded-3xl"
              style={{ transition: 'all 0.3s ease' }}
            >
              <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-700" />
              <CardHeader className="py-5 px-6 block">
                <p className="text-sm uppercase tracking-[0.18em] text-prussian-blue-500 mb-2">
                  Hàn lâm
                </p>
                <h2 className="text-2xl font-bold text-prussian-blue-800">
                  Bậc Tiến sĩ
                </h2>
              </CardHeader>
              <CardBody className="pb-8 px-6">
                <p className="text-gray-500 mb-4">1 chương trình đào tạo</p>
                <div className="space-y-3">
                  <p className="text-lg text-gray-700 font-semibold flex items-center">
                    <CheckCircle2
                      size={18}
                      className="mr-2 text-prussian-blue-600 shrink-0"
                    />
                    Khoa học máy tính
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full bg-prussian-blue-200">
        <Image
          src={img}
          alt=""
          className="w-full opacity-80 h-[250px] object-cover object-center"
        />
      </div>
      <div
        className="container flex items-center py-12 flex-col md:flex-row gap-5"
        data-aos="zoom-in"
      >
        <div className="flex mr-5 items-center">
          <h1
            className="font-bold tomorrow text-prussian-blue-900 opacity-80"
            style={{ fontSize: 150 }}
          >
            30
          </h1>
          <p className="text-3xl font-bold mb-20 text-prussian-blue-900 opacity-80">
            năm
          </p>
        </div>
        <div>
          <p className="text-xl text-gray-700 text-justify">
            Xây dựng và phát triển, khoa đã đào tạo được số lượng lớn các cử
            nhân, thạc sĩ, tiến sĩ đang công tác trên mọi miền tổ quốc và thế
            giới, hướng tới đóng góp cho sự phát triển của đất nước và hội nhập
            quốc tế tích cực, sâu rộng.
          </p>
        </div>
      </div>
    </>
  )
}
