import type { StudyMaterial } from "@/lib/supabase"

interface FeaturedSectionProps {
  materials: (StudyMaterial & { imageUrl?: string })[]
}

export default function FeaturedSection({ materials }: FeaturedSectionProps) {
  return (
    <div className="bg-gray-600 p-6 rounded-md text-white">
      <h2 className="text-xl font-bold mb-4">베스트 추천</h2>
      <div className="grid grid-cols-1 gap-4">
        {materials.slice(0, 1).map((material, index) => (
          <div key={material.id} className="bg-gray-700 p-4 rounded-md">
            {/* Add image */}
            <div className="w-full h-32 mb-3 overflow-hidden rounded-md">
              <img
                src={material.imageUrl || "/images/default-featured.jpg"}
                alt={material.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-2">{material.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{material.description}</p>
            <div className="flex justify-between text-xs text-gray-400">
              <span>조회수 {material.views}</span>
              <span>다운로드 {material.downloads}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
