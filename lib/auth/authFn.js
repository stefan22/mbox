import dataFetcher from "./dataFetcher"
/**
 *  @fn authFn
 * @param user signin or signup
 * @param body/data
 */

export const authFn = (mode, body) => dataFetcher(mode, body)
