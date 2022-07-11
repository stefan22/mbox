import { NextResponse } from "next/server"

const protectedPages = ["/", "/playlist", "/library", "/search", "/favorites"]

/*
 * @fn Middleware - checks to see if user has a valid token/cookie,
 * and if not, redirects to signin page
 * @param req - the request object
 * @returns NextResponse - redirects to signin page if user is not signed in
 */

const Middleware = req => {
    if (protectedPages.find(p => p === req.nextUrl.pathname)) {
        const token = req.cookies.MBOX_ACCESS_TOKEN

        if (!token) {
            return NextResponse.redirect("/signin")
        }
    }
}

export default Middleware
