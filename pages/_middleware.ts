import { NextResponse } from "next/server"

const protectedPages = ["/", "/playlist", "/library", "/search", "/favorites"]

const Middleware = req => {
    if (protectedPages.find(p => p === req.nextUrl.pathname)) {
        const token = req.cookies.MBOX_ACCESS_TOKEN

        if (!token) {
            return NextResponse.redirect("/signin")
        }
    }
}

export default Middleware
