import { Box, chakra, SimpleGrid } from "@chakra-ui/react"
import { ImSoundcloud } from "react-icons/im"
import { GiMusicalScore } from "react-icons/gi"
import { MdLibraryMusic } from "react-icons/md"
import StatsCard from "../components/StatsCard"

const UserStats = () => {
    return (
        <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
                User Stats
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title="Artists" stat="50" icon={<ImSoundcloud size="3em" />} />
                <StatsCard title="Playlists" stat="1,000" icon={<GiMusicalScore size="3em" />} />
                <StatsCard title="Top Rated" stat="7" icon={<MdLibraryMusic size="3em" />} />
            </SimpleGrid>
        </Box>
    )
}

export default UserStats
