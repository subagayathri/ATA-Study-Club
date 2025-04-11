export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold mb-2">연락처</h3>
            <p className="text-xs text-gray-400">contact@atastudy.club</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">운영시간</h3>
            <p className="text-xs text-gray-400">월-금: 09:00 - 18:00</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">주소</h3>
            <p className="text-xs text-gray-400">서울특별시 강남구 테헤란로 123</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-500">
          <p>© 2023 ATA Study Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
