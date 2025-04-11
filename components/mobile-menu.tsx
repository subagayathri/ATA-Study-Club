"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { Category } from "@/lib/supabase"

interface MobileMenuProps {
  categories: Category[]
}

export default function MobileMenu({ categories }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const mainCategories = categories.filter((cat) => !cat.parent_id)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-4/5 max-w-sm p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">ATA Study Club</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-4">
              <Link href="/" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                홈페이지
              </Link>
              <Link href="/community" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                커뮤니티
              </Link>
              <Link href="/study" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                스터디
              </Link>
              <Link href="/materials" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                자료실
              </Link>
              <Link href="/login" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                로그인
              </Link>
            </nav>

            <div className="mt-6">
              <h3 className="font-medium mb-2">카테고리</h3>
              <div className="space-y-2 ml-2">
                {mainCategories.map((category) => (
                  <div key={category.id} className="py-1">
                    <Link href={`/category/${category.slug}`} onClick={() => setIsOpen(false)}>
                      {category.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
