/**
 *  @fn Fetcher fn  handles the fetching of data from the server
 * @param url {string} - url of the endpoint
 * @param data {object} - data to be sent to the server
 * @returns {Promise} - promise object with data
 */

const dataFetcher = (url = "", data = {}) => {
    return fetch(`${window.location.origin}/api/${url}`, {
        method: data ? "POST" : "GET",
        credentials: "include", // jwt session cookie
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => {
        if (res.status !== 200) {
            return { error: new Error("Wrong credentials") }
        }
        return res.json()
    })
}

export default dataFetcher
