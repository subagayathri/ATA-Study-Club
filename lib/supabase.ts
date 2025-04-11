import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*").order("id")

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  return data || []
}

export async function getStudyMaterials(featured?: boolean): Promise<StudyMaterial[]> {
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
}
