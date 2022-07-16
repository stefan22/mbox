import useSWR from "swr"
import dataFetcher from "../auth/dataFetcher"

/*
 *  @fn useAuthUser
 *  @desc Fetches user data from server and returns user object
 *  @desc This function  depends on data at /pages/api/user.js
 *  @param {string} - url of the endpoint
 *  @returns {Promise} - promise object with data
 */

export const useAuthUser = () => {
    const { data, error } = useSWR("user", dataFetcher)
    return {
        user: data,
        loadingUser: !data && !error,
        isError: error,
    }
}
