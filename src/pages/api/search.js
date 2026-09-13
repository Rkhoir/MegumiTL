import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET({ url }) {
  const query = url.searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return new Response(JSON.stringify({ results: [] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data, error } = await supabase
    .from("Game")
    .select("*")
    .ilike("title", `%${query}%`)
    .limit(10);

  if (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({ results: [], error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ results: data ?? [] }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}