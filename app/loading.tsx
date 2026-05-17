export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#f2f9ff] to-[#e4f0fb]">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 border-[6px] animate-spin border-sky-100 border-t-prussian-blue-700 rounded-full"></div>
        <p className="text-prussian-blue-800 font-semibold tracking-wide">
          Đang tải dữ liệu...
        </p>
      </div>
    </div>
  )
}
