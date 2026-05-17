import logodhhue from '@a/imgs/logo-dhh.png'
import logohusc from '@a/imgs/logo-husc.png'
import logoit from '@a/imgs/logo_it.png'
import Image from 'next/image'
import FacebookIframe from '@/components/fb-iframe'
import { PhoneIcon, LocateIcon, HomeIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-prussian-blue-950 text-white">
      <div className="py-10 md:py-12 bg-gradient-to-r from-prussian-blue-950 via-[#0a3c66] to-prussian-blue-950">
        <div className="container flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="font-semibold text-xl uppercase tracking-wide">
              Theo dõi chúng tôi
            </h2>
            <hr className="mt-2 mb-4 opacity-60" />
            <div className="rounded-2xl overflow-hidden border border-white/20 w-fit">
              <FacebookIframe />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-xl uppercase tracking-wide">
              Liên hệ
            </h2>
            <hr className="mt-2 mb-4 opacity-60" />
            <ul>
              <li className="mb-3 flex items-center text-white/90">
                <PhoneIcon size={20} className=" mr-2" />
                0234 382 6767
              </li>
              <li className="mb-3 flex items-center text-white/90">
                <LocateIcon size={20} className=" mr-2" />
                77 Nguyễn Huệ, thành phố Huế
              </li>
              <li className="mb-3 flex items-center text-white/90">
                <HomeIcon size={20} className=" mr-2" />
                Trường Đại học Khoa học.
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-xl uppercase tracking-wide">
              Kết nối
            </h2>
            <hr className="mt-2 mb-4 opacity-60" />
            <ul>
              <li
                className="flex items-center mb-3 hover:text-sky-300 transition-all duration-250 cursor-pointer"
                onClick={() => {
                  window.open('https://hueuni.edu.vn/portal/vi/', '_blank')
                }}
              >
                <Image src={logodhhue} alt="logo dhhue" style={{ width: 35 }} />
                <p className="ps-2 pb-2">Đại học Huế</p>
              </li>
              <li
                className="flex items-center mb-3 hover:text-sky-300 transition-all duration-250 cursor-pointer"
                onClick={() => {
                  window.open('http://husc.hueuni.edu.vn/news.php', '_blank')
                }}
              >
                <Image src={logohusc} alt="logo husc" style={{ width: 33 }} />
                <p className="ps-2 pb-2">Trường Đại học Khoa học</p>
              </li>
              <li
                className="flex items-center mb-3 hover:text-sky-300 transition-all duration-250 cursor-pointer"
                onClick={() => {
                  window.open('https://it.husc.edu.vn/', '_blank')
                }}
              >
                <Image
                  src={logoit}
                  alt="logo it"
                  style={{
                    width: 37,
                  }}
                  className="logo-vien-trang"
                />
                <p className="ps-2 pb-2">Khoa công nghệ thông tin</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-gray-200 border-t border-white/15">
        <div className="container">
          <p className="text-sm mb-1 text-white/80">
            Copyright © 2023. Khoa Công nghệ Thông tin - Trường Đại học Khoa
            học, Đại học Huế.
          </p>
          <p className="text-sm mb-1 text-white/80">
            Địa chỉ: Tầng 2 nhà G, Trường Đại học Khoa học, Đại học Huế, 77
            Nguyễn Huệ, thành phố Huế, tỉnh Thừa Thiên Huế.
          </p>
          <p className="text-sm mb-1 text-white/80">
            Số điện thoại: 0234 382 6767
          </p>
        </div>
      </div>
    </footer>
  )
}
