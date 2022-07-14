import { NextResponse } from "next/server"

const protectedPages = ["/", "/playlist", "/library", "/search", "/favorites"]

/*
 * @fn _middleware - checks to see if a valid token exists
 * @param req - the request object
 * @returns NextResponse - redirects to signin page when no token exists
 */

const _middleware = req => {
    if (protectedPages.find(p => p === req.nextUrl.pathname)) {
        const token = req.cookies.MBOX_ACCESS_TOKEN

        if (!token) {
            return NextResponse.redirect("/signin")
        }
    }
}

export default _middleware
