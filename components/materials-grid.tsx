import type { StudyMaterial } from "@/lib/supabase"
import MaterialCard from "./material-card"

interface MaterialsGridProps {
  materials: StudyMaterial[]
}

export default function MaterialsGrid({ materials }: MaterialsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {materials.map((material, index) => (
        <MaterialCard key={material.id} material={material} index={index} />
      ))}
    </div>
  )
}
