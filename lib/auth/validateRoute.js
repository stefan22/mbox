import prisma from "../db"
import { tokenValidation } from "./tokenValidation"

/*
 * @fn validateUserRoute
 * @desc Validates a user route
 * @param {Object} - request object
 * @param {function} - callback function to return the user object
 * @returns {Promise} - resolves with the user object  or rejects with an error message
 */
export const validateRoute = handlerFn => {
    return async (req, res) => {
        let user = {}
        const token = await tokenValidation(req.cookies.MBOX_ACCESS_TOKEN, "SECRET")
        try {
            // match token to db user
            const { id } = token
            user = await prisma.user.findUnique({
                where: {
                    id,
                },
            })
            // if user not found, return error
            if (!user) {
                res.status(401).json({
                    error: "Unauthorized",
                })
                return res.redirect("/signin")
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            return console.error(`Error: ${error}`)
        }
        // pass the user to the handler function
        return handlerFn(req, res, user)
    }
}
