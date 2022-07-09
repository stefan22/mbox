import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import prisma from "../../lib/db"

/*
 * @fn signin - handles the signin of a user
 * @param {string} email - user email
 * @param {string} password - user password
 * @returns {Promise} - promise object with user data
 */

export default async (req, res) => {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                time: Date.now(),
            },
            "SECRET",
            {
                expiresIn: "4h",
            }
        )

        res.setHeader(
            "Set-Cookie",
            cookie.serialize("MBOX_ACCESS_TOKEN", token, {
                httpOnly: true,
                maxAge: 8 * 60 * 60,
                path: "/",
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
            })
        )

        res.json(user)
    } else {
        res.status(401)
        res.json({ error: "Email or Password is wrong" })
    }
}
