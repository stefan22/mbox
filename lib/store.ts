import { createStore, action } from "easy-peasy"

/**
 *  @fn store
 *  @desc A zero configuration state management. An abstraction of the redux store.
 *  Here below are the actions, initial state, middleware, store and reducer.
 *  ATM it just keeps track of the next/prev active song in user's playlists.
 *  State data accessible from within the dev tools redux panel, so long as you have the redux
 *  extension installed in your browser.
 *  See: easy-peasy.dev documentation for more information.
 */
export const store = createStore({
    activeSongs: [],
    activeSong: null,
    currentUser: null,
    playlists: [],
    setCurrentUser: action((state: any, payload) => {
        state.currentUser = payload
    }),
    setPlaylists: action((state: any, payload) => {
        state.playlists = payload
    }),
    setSongs: action((state: any, payload) => {
        state.activeSongs = payload
    }),
    setActiveSong: action((state: any, payload) => {
        state.activeSong = payload
    }),
})
