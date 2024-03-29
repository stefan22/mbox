import jwt from "jsonwebtoken"
/*
 * @fn tokenValidation
 * @desc Validates a token and returns the user id
 * @desc This function is used with @next/getServerSideProps
 * @param {string} token - The token to validate
 * @param {string} secret - The secret to validate the token with
 * @return {object} user - obj props: id, email, time, iat, exp.
 * @return {string} error - error message
 */

export const tokenValidation = (token, secret) => jwt.verify(token, secret)
