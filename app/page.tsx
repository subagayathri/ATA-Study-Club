import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroBanner from "@/components/hero-banner"
import Sidebar from "@/components/sidebar"
import SearchBar from "@/components/search-bar"
import MaterialsGrid from "@/components/materials-grid"
import Pagination from "@/components/pagination"
import FeaturedSection from "@/components/featured-section"
import { getCategories, getStudyMaterials } from "@/lib/supabase"

export default async function Home() {
  const categories = await getCategories()
  const allMaterials = await getStudyMaterials()
  const featuredMaterials = await getStudyMaterials(true)

  return (
    <main>
      <Header />
      <HeroBanner />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <Sidebar categories={categories} />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/4 lg:w-3/5">
            <SearchBar />
            <MaterialsGrid materials={allMaterials} />
            <Pagination />
          </div>

          {/* Featured Section - Below content on mobile, side on desktop */}
          <div className="mt-8 md:mt-0 md:w-1/4 lg:w-1/5">
            <FeaturedSection materials={featuredMaterials} />
          </div>
        </div>

        {/* Mobile Sidebar - Only shown on mobile */}
        <div className="md:hidden mt-8">
          <h2 className="font-bold text-lg mb-4">카테고리</h2>
          <Sidebar categories={categories} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
