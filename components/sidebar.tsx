"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Category } from "@/lib/supabase"

interface SidebarProps {
  categories: Category[]
}

export default function Sidebar({ categories }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const mainCategories = categories.filter((cat) => !cat.parent_id)
  const subCategories = categories.filter((cat) => cat.parent_id === 4) // Study recruitment subcategories

  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <div className="space-y-4">
        {mainCategories.map((category) => (
          <div
            key={category.id}
            className={`sidebar-item ${selectedCategory === category.slug ? "sidebar-item-active" : ""}`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            <input
              type="checkbox"
              checked={selectedCategory === category.slug}
              onChange={() => {}}
              className="rounded text-gray-500"
            />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between cursor-pointer mb-2" onClick={() => setExpanded(!expanded)}>
          <h3 className="font-medium">스터디모집</h3>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {expanded && (
          <div className="space-y-2 ml-2">
            {subCategories.map((category) => (
              <div
                key={category.id}
                className={`sidebar-item ${selectedCategory === category.slug ? "sidebar-item-active" : ""}`}
                onClick={() => setSelectedCategory(category.slug)}
              >
                <input
                  type="checkbox"
                  checked={selectedCategory === category.slug}
                  onChange={() => {}}
                  className="rounded text-gray-500"
                />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
