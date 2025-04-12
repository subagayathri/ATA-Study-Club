import { createClient } from "@supabase/supabase-js"

// Check if the environment variables are defined
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Please check your .env.local file or environment configuration.",
  )
}

// Create the Supabase client with fallback empty strings to prevent runtime errors
// This will still log errors but won't crash the application
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "")

// Rest of the file remains the same...
export type Category = {
  id: number
  name: string
  slug: string
  parent_id: number | null
}

export type StudyMaterial = {
  id: number
  title: string
  description: string
  category_id: number
  created_at: string
  updated_at: string
  views: number
  downloads: number
  featured: boolean
  imageUrl?: string // Add this line
}

export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase.from("categories").select("*").order("id")

    if (error) {
      console.error("Error fetching categories:", error)
      return []
    }

    return data || []
  } catch (err) {
    console.error("Failed to fetch categories:", err)
    return []
  }
}

export async function getStudyMaterials(featured?: boolean): Promise<StudyMaterial[]> {
  try {
    let query = supabase.from("study_materials").select("*").order("id")

    if (featured !== undefined) {
      query = query.eq("featured", featured)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching study materials:", error)
      return []
    }

    return data || []
  } catch (err) {
    console.error("Failed to fetch study materials:", err)
    return []
  }
}
