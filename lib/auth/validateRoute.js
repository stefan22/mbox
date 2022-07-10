import jwt from "jsonwebtoken"
import prisma from "../db"

/*
 * @fn validateUserRoute
 * @desc Validates a user route
 * @param {Object} - request object
 * @param {function} - callback function called with user object
 * @returns {Promise} - resolves with user object when token id matches user id in database
 */
export const validateRoute = handlerFn => async (req, res) => {
    // Get the token from the header
    const token = req.cookies.MBOX_ACCESS_TOKEN
    if (token) {
        let user
        try {
            // match the token to the user
            const { id } = jwt.verify(token, "SECRET")
            user = await prisma.user.findUnique({
                where: {
                    id,
                },
            })
            // if the user is not found, return a 401
            if (!user) {
                res.status(401)
                res.json({ error: "User not found" })
                return
            }
            // pass the user to the handler function
            if (user) {
                return handlerFn(req, res, user)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err)
        }
    }

    // if the user is not found, return a 401
    res.status(401)
    res.json({ error: "You are not authorized" })
}
