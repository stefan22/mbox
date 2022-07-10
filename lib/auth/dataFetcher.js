/**
 *  @fn Fetcher fn  handles the fetching of data from the server
 * @param url {string} - url of the endpoint
 * @param data {object} - data to be sent to the server
 * @returns {Promise} - promise object with data
 */

const dataFetcher = (url = "", data = undefined) => {
    return fetch(`${window.location.origin}/api/${url}`, {
        method: data ? "POST" : "GET",
        credentials: "include", // jwt session cookie
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(usr => {
            return usr
        })
        .catch(err => {
            // eslint-disable-next-line no-console
            console.log("error in dataFetcher", err)
            return err
        })
}

export default dataFetcher
