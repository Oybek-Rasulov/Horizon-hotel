import { RegisterDataType } from "../_types/data";
import { supabase } from "./supabase";

export async function registerUser(data: RegisterDataType) {
  const { firstName, lastName, phone, login, password } = data;

  const { error } = await supabase.from("users").insert([
    {
      fname: firstName,
      lname: lastName,
      phone_number: phone,
      email: login,
      password: password,
    },
  ]);

  if (error) {
    throw new Error("User registered already");
  }

  return { message: "User registered succesfully :)" };
}

export async function loginUser(data: { login: string; password: string }) {
  const { login, password } = data;

  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", login)
    .eq("password", password);

  if (error) {
    throw new Error(
      "You are not registered, Please register then try to log in",
    );
  }

  if (!users || users.length === 0) {
    throw new Error("Invalid email or password");
  }

  return users;
}
