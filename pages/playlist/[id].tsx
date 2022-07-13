import { useRouter } from "next/router"
import PlaylistLayout from "../../components/PlaylistLayout"
import SongTable from "../../components/SongTable"
import { randomBgColor } from "../../lib/randomBgColor"
import { usePlaylists } from "../../lib/hooks/usePlaylists"

const PlaylistID = () => {
    const { query } = useRouter()
    const { playlist, loadingPlaylist } = usePlaylists()

    if (loadingPlaylist) {
        return <div>Loading...</div>
    }

    return (
        <PlaylistLayout
            color={randomBgColor()}
            roundImage={false}
            title={`Playlist #${query.id}`}
            subtitle="playlist"
            description={`${playlist?.songs?.length} songs`}
            image={`https://picsum.photos/400?random=${query.id}`}
        >
            <SongTable songs={playlist?.songs} />
        </PlaylistLayout>
    )
}

export default PlaylistID
