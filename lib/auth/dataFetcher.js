/**
 *  @fn Fetcher fn: together  with authFn  handles Auth user data/functionality
 * @param url
 * @param data
 */

const dataFetcher = (url = '', data = {}) => {
   return fetch(`${window.location.origin}/api/${url}`, {
      method: data ? 'POST' : 'GET',
      credentials: 'include', // jwt session cookie
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   }).then(res => {
      return res.json()
   })
}

export default dataFetcher
