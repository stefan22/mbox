import { LinkBox, LinkOverlay, List, ListIcon, ListItem } from "@chakra-ui/layout"
import NextLink from "next/link"
import { playSongs } from "./sideMenuRoutes"
import { useAuthUser } from "../../lib/hooks/useAuthUser"

const Playlist = () => {
    const { user } = useAuthUser()
    const playlists = user?.playlist
    return (
        <List spacing={2}>
            {user &&
                playlists?.length > 0 &&
                playlists.map(playlist =>
                    user.id === playlist.userId ? (
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
                                        pathname: `/playlist/[id]`,
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
                    ) : null
                )}
        </List>
    )
}

export default Playlist
