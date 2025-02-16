import { cookies } from 'next/headers';
import { baseURL } from "@/services/url";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const cookiesStore = await cookies();


        // Chama a API externa para autenticação
        const response = await fetch(`${baseURL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include",

        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.message }, { status: response.status });
        }

        const data = await response.json();
        const token = data.token;

        cookiesStore.set("access_token", token, {
            httpOnly: true,
            sameSite: "lax",
            // secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
        });

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Set-Cookie": `access_token=${token || "teste"}`,
            }
        });

    } catch {
        return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
    }
}
