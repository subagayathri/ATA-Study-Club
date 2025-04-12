export default function HeroBanner() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">이달의 추천</h2>
            <p className="text-gray-300 mb-6">
              ATA 스터디 클럽에서 엄선한 이달의 추천 학습 자료를 만나보세요. 다양한 분야의 전문 자료를 통해 여러분의
              학습 목표를 달성하세요.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-48 md:h-64">
              <div className="absolute left-0 top-0 w-1/3 h-full">
                <img src="/images/banner-1.jpg" alt="Book cover" className="object-cover h-full w-full rounded-md" />
              </div>
              <div className="absolute left-1/3 top-0 w-1/3 h-full">
                <img src="/images/banner-2.jpg" alt="Book cover" className="object-cover h-full w-full rounded-md" />
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full">
                <img src="/images/banner-3.jpg" alt="Book cover" className="object-cover h-full w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
