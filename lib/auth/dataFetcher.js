/**
 *  @fn Fetcher fn: together  with authFn  handles Auth user data/functionality
 * @param url
 * @param data
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
            // eslint-disable-next-line no-console
            return new Error(`It cannot authenticate you: ${res.status}`)
        }
        return res.json()
    })
}

export default dataFetcher
