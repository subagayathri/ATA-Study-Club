import Link from "next/link"
import { Search } from "lucide-react"
import MobileMenu from "./mobile-menu"
import { getCategories } from "@/lib/supabase"

export default async function Header() {
  const categories = await getCategories()

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-2 text-sm text-gray-400 border-b border-gray-800">
          <p>커뮤니티_오픈_최신순</p>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <MobileMenu categories={categories} />
            <Link href="/" className="text-xl font-bold">
              ATA Study Club
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">
              홈페이지
            </Link>
            <Link href="/community" className="hover:text-gray-300">
              커뮤니티
            </Link>
            <Link href="/study" className="hover:text-gray-300">
              스터디
            </Link>
            <Link href="/materials" className="hover:text-gray-300">
              자료실
            </Link>
            <Link href="/login" className="hover:text-gray-300">
              로그인
            </Link>
          </nav>
          <button className="md:hidden">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
