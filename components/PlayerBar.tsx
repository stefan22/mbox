import { Box, Flex, Text } from "@chakra-ui/layout"
import { useStoreState } from "easy-peasy"
import Player from "./Player"

const PlayerBar = () => {
    const songs = useStoreState((state: any) => state.activeSongs)
    const activeSong = useStoreState((state: any) => state.activeSong)

    return (
        <Box
            className="playerbar-wrapper"
            height="100px"
            width="100vw"
            bg="gray.300"
            color="gray.900"
            padding="10px"
            position="fixed"
            bottom="0"
            left="250px"
        >
            <Flex className="playerbar-container" align="center">
                {activeSong ? (
                    <Box padding="20px" color="gray.900">
                        <Text fontSize="medium">
                            Now playing:&nbsp;
                            {activeSong?.name}
                        </Text>
                        <Text color="gray.900" fontSize="sm">
                            {activeSong?.artist?.name}
                        </Text>
                    </Box>
                ) : (
                    <Box padding="20px" color="gray.900">
                        <Text fontSize="medium" color="gray.900">
                            No song selected
                        </Text>
                    </Box>
                )}
                <Box className="player-wrapper">
                    {activeSong ? (
                        <Player songs={songs} activeSong={activeSong} />
                    ) : (
                        <Player songs={songs} activeSong={activeSong} />
                    )}
                </Box>
                <Box padding="20px">
                    <Text color="gray.900" fontSize="small" textAlign="right">
                        TMX ® Music Player
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default PlayerBar
