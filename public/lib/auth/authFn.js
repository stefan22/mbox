import dataFetcher from "./dataFetcher"
/**
 *  @fn authFn: user authentication function
 * @param {string} email - user email
 * @param {string} password - user password
 * @param mode: {string} - mode of authentication
 * @returns {Promise} - promise object with user data
 */

export const authFn = (mode, body) => dataFetcher(mode, body)
