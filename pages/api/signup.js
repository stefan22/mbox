import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import prisma from "../../lib/db"

/*
 *  @fn signup - handles the signup of a user
 * @param {string} email - user email
 * @param {string} password - user password
 * @param {string} firstName - user firstName
 * @param {string} lastName - user lastName
 * @returns {Promise} - promise object with user data
 */

export default async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    const salt = bcrypt.genSaltSync()

    let user
    try {
        user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, salt),
                firstName,
                lastName,
            },
        })
    } catch (error) {
        res.status(401)
        res.json({ error: "User already exists" })
        return
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            time: Date.now(),
        },
        "SECRET",
        { expiresIn: "4h" }
    )

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("MBOX_ACCESS_TOKEN", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 4,
            sameSite: "lax",
            path: "/",
            secure: process.env.NODE_ENV === "production",
        })
    )
    res.json(user)
}
