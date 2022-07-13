import jwt from "jsonwebtoken"
/*
 * @fn tokenValidation
 * @desc Validates a token and returns the user id
 * @desc This function is used with @next/getServerSideProps
 * @param {string} token - The token to validate
 * @return {object} user - obj props: id, email, time, iat, exp.
 * @return {string} error - error message
 */

export const tokenValidation = token => {
    const user = jwt.verify(token, "SECRET")
    if (typeof user !== "object" && !user.id) {
        return {
            error: "Invalid token",
            path: "/signin",
        }
    }
    return user
}
