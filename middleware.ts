import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const URL = "http://localhost:3000"
const protectedPages = ["/", "/playlist", "/library", "/search", "/favorites"]

/*
 * @fn middleware - checks to see if a valid token exists
 * @param req - the request object
 * @returns NextResponse - redirects to signin page when no token exists
 */

const middleware = (req: NextRequest) => {
    const response = NextResponse.next()
    if (protectedPages.find(p => p === req.nextUrl.pathname)) {
        const token = req.cookies.get("MBOX_ACCESS_TOKEN")

        if (!token) {
            response.cookies.delete("MBOX_ACCESS_TOKEN")
            return NextResponse.redirect(`${URL}/signin`)
        }
    }
    return response
}

export default middleware
