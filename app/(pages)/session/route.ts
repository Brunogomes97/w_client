import { AuthSessionResponse } from "@/lib/types";
import { fetchAPI } from "@/services/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";



export async function GET(): Promise<Response> {
    //const token = request.cookies.get("session_token")?.value ?? null;
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value ?? null;
    try {
        if (token === null) {
            return new Response(null, {
                status: 401
            });
        }
        const data = await fetchAPI<AuthSessionResponse>("auth/session")
        const user = data?.user

        if (user === null) {
            return new Response(null, {
                status: 401
            });
        }

        return NextResponse.json({ user });
    } catch {

        cookiesStore.set("access_token", "", {
            httpOnly: true,
            sameSite: "lax",
            // secure: process.env.NODE_ENV === "production",
            maxAge: 0,
            path: "/"
        });

        return new Response(null, {
            status: 401
        });
    }
}

