import { createSupabaseClient } from "./supabase";

export async function User() {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.auth.getUser();

  console.log(data?.user);

  if (error) {
    console.log("Supabase getUser error:", error);
    return null;
  }

  return data.user;
}
