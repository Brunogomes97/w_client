"use server";
import { cookies } from "next/headers";
import { fetchAPI } from "../services/api";
import { cache } from "react";
import { AuthSessionResponse, UserProps } from "@/lib/types";

interface LocalSessionProps {
  user: UserProps | null;
}

export async function authenticate(clientURL: string, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(`${clientURL}/login/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Erro ao autenticar");
  }

  return response.json(); // Retorna os dados do usuário
}
export async function logout() {
  try {
    //Remover cookie
    await deleteSessionTokenCookie();

  } catch (error) {
    console.log(error);

  }
}


///Session Functions
export async function getValidatedSessionToken(): Promise<AuthSessionResponse | null> {

  try {
    const { user } = await fetchAPI<AuthSessionResponse>("auth/session", {
      method: "GET",
      credentials: "include",
    })

    return { user }
  } catch (error) {
    console.log(error)
    return null
  }
}


export const getCurrentSession = cache(async (): Promise<LocalSessionProps> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value ?? null;
  if (token === null) {
    return { user: null };
  }

  const result = await getValidatedSessionToken();

  if (!result) {

    return { user: null };

  }
  return result;
});

export async function setSessionTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("access_token", token, {
    httpOnly: true,
    sameSite: "lax",
    // secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //30 dias
    path: "/"
  });
}

export async function deleteSessionTokenCookie(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set("access_token", "", {
    httpOnly: true,
    sameSite: "lax",
    // secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/"
  });
}




