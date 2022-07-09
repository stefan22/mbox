import { LinkBox, LinkOverlay, List, ListIcon, ListItem } from "@chakra-ui/layout"
import NextLink from "next/link"
import { playSongs } from "./sideMenuRoutes"
const playlists = [
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
    { id: 3, name: "Playlist 3" },
]

const Playlist = () => {
    return (
        <List spacing={2}>
            {playlists?.length > 0 &&
                playlists.map(playlist => (
                    <ListItem
                        paddingX="20px"
                        fontSize="16px"
                        className="sidenav-links"
                        color="gray.600"
                        key={playlist.id}
                    >
                        <LinkBox>
                            <NextLink
                                href={{
                                    pathname: `/playlists/[id]`,
                                    query: { id: playlist.id },
                                }}
                                passHref
                            >
                                <LinkOverlay>
                                    {playSongs().map(play => (
                                        <ListIcon
                                            key={play.name}
                                            as={play.icon}
                                            color="gray.500"
                                            marginRight="20px"
                                        />
                                    ))}
                                    {playlist.name}
                                </LinkOverlay>
                            </NextLink>
                        </LinkBox>
                    </ListItem>
                ))}
        </List>
    )
}

export default Playlist
