import useSWR from "swr"
import dataFetcher from "../auth/dataFetcher"

const usePlaylist = () => {
    const { data, error } = useSWR("/playlists", dataFetcher)
    return {
        playlists: data || [],
        loadingPlaylists: !data && !error,
        isError: error,
    }
}

export default usePlaylist
