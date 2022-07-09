/**
 *  @fn Fetcher fn: together  with authFn  handles Auth user data/functionality
 * @param url
 * @param data
 */

const dataFetcher = (url = "", data = {}) => {
    console.log("value of url ", url)
    return fetch(`${window.location.origin}/api/${url}`, {
        method: data ? "POST" : "GET",
        credentials: "include", // jwt session cookie
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            let data = res.json()
            return data
        })
        .then(usr => {
            return usr
        })
        .catch(err => {
            console.log("error in dataFetcher", err)
            return err
        })
}

export default dataFetcher
