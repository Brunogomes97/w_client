import { NextResponse, type NextRequest } from "next/server";


export async function middleware(request: NextRequest) {

    //console.log({ requestName: request.nextUrl.pathname, method: request.method });
    const token = request.cookies.get("access_token")?.value ?? null;


    if (request.method === "GET") {
        const response = NextResponse.next();

        if (token !== null) {
            // Only extend cookie expiration on GET requests since we can be sure
            // a new session wasn't set when handling the request.
            response.cookies.set("session_token", token, {
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
                sameSite: "lax",
                httpOnly: true,
                // secure: process.env.NODE_ENV === "production"
            });
        }

        return response
    }



    return NextResponse.next();
}




export const config = {
    matcher: ["/((?!api|public|_next/static|_next/image|.*\\.png$).*)"],
};
