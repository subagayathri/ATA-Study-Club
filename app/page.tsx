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
  // Add try/catch for error handling
  try {
    const categories = await getCategories()
    const allMaterials = await getStudyMaterials()
    const featuredMaterials = await getStudyMaterials(true)

    // Add image URLs to materials
    const materialsWithImages = allMaterials.map((material, index) => ({
      ...material,
      imageUrl: `/images/material-${(index % 10) + 1}.jpg`,
    }))

    const featuredWithImages = featuredMaterials.map((material, index) => ({
      ...material,
      imageUrl: `/images/featured-${(index % 1) + 1}.jpg`,
    }))

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
              <MaterialsGrid materials={materialsWithImages} />
              <Pagination />
            </div>

            {/* Featured Section - Below content on mobile, side on desktop */}
            <div className="mt-8 md:mt-0 md:w-1/4 lg:w-1/5">
              <FeaturedSection materials={featuredWithImages} />
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
  } catch (error) {
    console.error("Error rendering home page:", error)
    return (
      <main>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load content</h1>
          <p className="mb-8">
            There was an error connecting to the database. Please check your environment variables and try again.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-left text-sm overflow-auto max-w-2xl mx-auto">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </pre>
        </div>
        <Footer />
      </main>
    )
  }
}
