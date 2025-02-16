import { cookies } from "next/headers";
import { baseURL } from "./url";

export async function fetchAPI<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("access_token");

  console.log(accessToken)

  const response = await fetch(`${baseURL}/${input}`, {
    ...init,
    credentials: "include",
    headers: {
      // Cookie: `access_token=${accessToken?.value}`,
      "Content-Type": "application/json",
    }
  });

  const result = await response.json();
  console.log(result)

  if (!response.ok) {
    throw new Error(`Erro ${result.statusCode || response.status}: ${result.message || "Erro desconhecido"}`);
  }
  return result as T;
}
