"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("최신순")

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
      <div className="flex items-center bg-gray-100 rounded-md p-1 text-sm">
        <button
          className={`px-3 py-1 rounded-md ${sortOrder === "인기순" ? "bg-purple-600 text-white" : ""}`}
          onClick={() => setSortOrder("인기순")}
        >
          인기순
        </button>
        <button
          className={`px-3 py-1 rounded-md ${sortOrder === "최신순" ? "bg-purple-600 text-white" : ""}`}
          onClick={() => setSortOrder("최신순")}
        >
          최신순
        </button>
      </div>

      <div className="flex-1 w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="원하는 자료를 검색해보세요"
            className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>정렬:</span>
        <select className="border border-gray-300 rounded-md py-1 px-2">
          <option>최신순</option>
          <option>인기순</option>
          <option>조회순</option>
        </select>
      </div>
    </div>
  )
}
