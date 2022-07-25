import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { useStoreActions } from "easy-peasy"
import { Text } from "@chakra-ui/layout"
import { MdLibraryMusic } from "react-icons/md"
import Profile from "../components/Profile"
import { useAuthUser } from "../lib/hooks/useAuthUser"
import ArtistCard from "../components/ArtistCard"
import glitch from "../public/images/albums/glitch.png"

const Home = () => {
    const { user: userStats, loadingUser } = useAuthUser()
    const setCurrentUser = useStoreActions(store => store.setCurrentUser)
    const setPlaylists = useStoreActions(store => store.setPlaylists)
    const setArtists = useStoreActions(store => store.setArtists)

    if (loadingUser) {
        return <Text>Loading...</Text>
    }
    if (userStats && !loadingUser) {
        const isUser = {
            id: userStats.id,
            email: userStats.email,
            firstName: userStats.firstName,
            lastName: userStats.lastName,
        }
        setCurrentUser(isUser)
        setPlaylists(userStats.playlist)
        setArtists(userStats.artists)
    }

    return (
        <Flex
            className="main-content__user"
            justify="center"
            direction="column"
            align="center"
            margin={"0 25px"}
            width={`calc(100% - 50px)`}
        >
            {!loadingUser && (
                <>
                    <Box
                        className="profile-roundabout"
                        maxW="7xl"
                        mx="auto"
                        height="auto"
                        pt={5}
                        px={{ base: 2, sm: 2, md: 17 }}
                    >
                        <Profile
                            firstName={userStats.firstName}
                            email={userStats.email}
                            playlists={userStats.playlist}
                            artists={userStats.artists}
                        />
                    </Box>
                    <div className="top-artists">
                        <Text fontSize="3xl" py="3rem" width="100%" textAlign="center">
                            Top Artists
                        </Text>
                        <SimpleGrid
                            columns={{ base: 1, sm: "2", md: "4", lg: "5" }}
                            spacing={{ base: "6", md: "9", lg: "7" }}
                        >
                            {userStats?.artists.map(artist => (
                                <ArtistCard
                                    key={artist.id}
                                    title={artist.name}
                                    stat={artist.songs?.length}
                                    src={glitch}
                                    icon={<MdLibraryMusic fontSize="2em" />}
                                />
                            ))}
                        </SimpleGrid>
                    </div>
                </>
            )}
        </Flex>
    )
}

export default Home
