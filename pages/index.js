import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react"
import { useStoreActions } from "easy-peasy"
import { Text } from "@chakra-ui/layout"
import { ImSoundcloud } from "react-icons/im"
import { GiMusicalScore } from "react-icons/gi"
import { MdLibraryMusic } from "react-icons/md"
import StatsCard from "../components/StatsCard"
import { useAuthUser } from "../lib/hooks/useAuthUser"

const UserStats = () => {
    const { user: userStats, loadingUser, isError } = useAuthUser()
    const playlists = userStats?.playlist
    const artists = userStats?.artists
    const songs = userStats?.songs
    const setCurrentUser = useStoreActions(store => store.setCurrentUser)
    const setPlaylists = useStoreActions(store => store.setPlaylists)

    if (loadingUser) {
        return <Text>Loading...</Text>
    }
    if (userStats && !loadingUser) {
        const isUser = {
            id: userStats?.id,
            email: userStats?.email,
            firstName: userStats?.firstName,
            lastName: userStats?.lastName,
        }
        setCurrentUser(isUser)
        setPlaylists(userStats?.playlist)
    }

    return (
        <Flex justify="center" direction="column" align="center" width="100%">
            {!loadingUser && !isError && (
                <>
                    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                        <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
                            User Stats
                        </chakra.h1>
                        <SimpleGrid marginBottom="2rem">
                            <StatsCard
                                title="User"
                                stat={
                                    <Text py="1" fontSize="0.83rem" color="gray.500">
                                        {userStats?.email || " Loading..."}
                                    </Text>
                                }
                                icon={<ImSoundcloud size="3em" />}
                            />
                        </SimpleGrid>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                            <StatsCard
                                title="Artists"
                                stat={artists?.length || 0}
                                icon={<ImSoundcloud size="3em" />}
                            />
                            <StatsCard
                                title="Playlists"
                                stat={playlists?.length || 0}
                                icon={<GiMusicalScore size="3em" />}
                            />
                            <StatsCard
                                title="Songs"
                                stat={songs?.length || 0}
                                icon={<MdLibraryMusic size="3em" />}
                            />
                        </SimpleGrid>
                    </Box>
                    <div className="top-artists">
                        <Text fontSize="3xl" py="3rem" width="100%" textAlign="center">
                            Top Artists
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 12 }}>
                            {artists?.map(artist => (
                                <StatsCard
                                    bg="whiteAlpha.50"
                                    key={artist.id}
                                    title={artist.name}
                                    stat={artist.songs?.length}
                                    image={"https://placekitten.com/35/35"}
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

export default UserStats
