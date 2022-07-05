import { MdFavorite, MdHome, MdLibraryMusic, MdPlaylistAdd, MdSearch } from 'react-icons/md'

const navMenu = () => [
   {
      name: 'Home',
      icon: MdHome,
      route: '/',
   },
   {
      name: 'Search',
      icon: MdSearch,
      route: '/search',
   },
   {
      name: 'Your Library',
      icon: MdLibraryMusic,
      route: '/library',
   },
]

const musicMenu = () => [
   {
      name: 'Create Playlist',
      icon: MdPlaylistAdd,
      route: '/',
   },
   {
      name: 'Favorites',
      icon: MdFavorite,
      route: '/favorites',
   },
]

export { navMenu, musicMenu }
