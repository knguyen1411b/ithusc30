import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#f2f9ff] to-[#e5f1fd] flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/90 border border-prussian-blue-100 rounded-3xl p-8 md:p-10 shadow-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-prussian-blue-600 mb-3">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-prussian-blue-900 mb-4">
          Không tìm thấy trang
        </h1>
        <p className="text-gray-600 mb-7">
          Liên kết bạn truy cập có thể đã thay đổi hoặc không còn tồn tại.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-prussian-blue-800 text-white px-6 py-3 font-semibold hover:bg-prussian-blue-700 transition"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  )
}
