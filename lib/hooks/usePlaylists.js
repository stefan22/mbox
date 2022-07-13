import useSWR from "swr"
import dataFetcher from "../auth/dataFetcher"

export const usePlaylists = () => {
    const { data, error } = useSWR("/playlist", dataFetcher)
    return {
        playlist: data,
        loadingPlaylist: !data && !error,
        isError: error,
    }
}
