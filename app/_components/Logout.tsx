"use client";

import { LogOut } from "lucide-react";
import { createSupabaseClient } from "../_lib/supabase";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/navigation";

export function Logout() {
  const supabase = createSupabaseClient();
  const router = useRouter();
  const user = useUser();

  if (!user) return null;

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    router.refresh();

    if (error) {
      toast.error("Failed to logout!");
    }
    // redirect("/");
  }

  return (
    <>
      <button
        className="bg-white p-3 rounded-full"
        onClick={() => handleLogout()}
      >
        <LogOut color="#333" />
      </button>
    </>
  );
}
