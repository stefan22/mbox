import {
    MdFavorite,
    MdHome,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdSearch,
    MdFeaturedPlayList,
    MdLogin,
    MdLogout,
    MdAssignmentInd
} from "react-icons/md"

const navMenu = () => [
    {
        name: "Home",
        icon: MdHome,
        route: "/"
    },
    {
        name: "Search",
        icon: MdSearch,
        route: "/search"
    },

    {
        name: "Favorites",
        icon: MdFavorite,
        route: "/favorites"
    },
    {
        name: " Library",
        icon: MdLibraryMusic,
        route: "/library"
    }
]

const musicMenu = () => [
    {
        name: "Create Playlist",
        icon: MdPlaylistAdd,
        route: "/playlist"
    },
    {
        name: "Favorites",
        icon: MdFavorite,
        route: "/favorites"
    }
]

const playSongs = () => [
    {
        name: "Play Songs",
        icon: MdFeaturedPlayList,
        route: "/playlist"
    }
]

const userAccounts = () => [
    {
        name: "Signin",
        icon: MdLogin,
        route: "/signin"
    },
    {
        name: "Signout",
        icon: MdLogout,
        route: "/signout"
    },
    {
        name: "Signup",
        icon: MdAssignmentInd,
        route: "/signup"
    }
]

export { navMenu, musicMenu, playSongs, userAccounts }
