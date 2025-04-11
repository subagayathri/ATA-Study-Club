import type { StudyMaterial } from "@/lib/supabase"
import { formatDistanceToNow } from "date-fns"
import { ko } from "date-fns/locale"

interface MaterialCardProps {
  material: StudyMaterial
  index: number
}

export default function MaterialCard({ material, index }: MaterialCardProps) {
  const formattedDate = formatDistanceToNow(new Date(material.created_at), {
    addSuffix: true,
    locale: ko,
  })

  return (
    <div className="bg-gray-100 rounded-md p-4 relative">
      <div className="absolute top-2 left-2 bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
        {index + 1}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-1 text-xs text-blue-600 mb-1">
          <span className="bg-blue-100 px-1 rounded">스터디자료</span>
          <span>|</span>
          <span>자료공유</span>
        </div>

        <h3 className="font-medium text-sm mb-2 line-clamp-2">{material.title}</h3>

        <div className="flex justify-between text-xs text-gray-500">
          <span>조회수 {material.views}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}
