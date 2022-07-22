import { Box } from "@chakra-ui/layout"
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from "@chakra-ui/react"
import { useStoreActions } from "easy-peasy"
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai"
import { formatDate, formatTime } from "../lib/songFormat"

const SongTable = ({ songs }) => {
    const playSongs = useStoreActions((store: any) => store.setSongs)
    const setActiveSong = useStoreActions((store: any) => store.setActiveSong)

    const handlePlay = (activeSong?) => {
        setActiveSong(activeSong || songs[0])
        playSongs(songs)
    }
    return (
        <Box bg="transparent" color="white">
            <Box padding="10px" marginBottom="20px">
                <Box marginBottom="30px">
                    <IconButton
                        icon={<BsFillPlayFill fontSize="30px" />}
                        aria-label="play"
                        colorScheme="blackAlpha"
                        size="lg"
                        isRound
                        onClick={() => handlePlay()}
                    />
                </Box>
                <Table variant="unstyled">
                    <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
                        <Tr borderBottom="1px solid rgba(255,255,255,0.75)">
                            <Th>#</Th>
                            <Th color="white">Title</Th>
                            <Th color="white">Date Added</Th>
                            <Th color="white">
                                <AiOutlineClockCircle fontSize="16px" />
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody fontSize="sm" color="whiteAlpha.900">
                        {songs?.map((song, i) => (
                            <Tr
                                sx={{
                                    transition: "all .3s ",
                                    "&:hover": {
                                        bg: "rgba(255,255,255, 0.1)",
                                    },
                                }}
                                key={song.id}
                                cursor="pointer"
                                onClick={() => handlePlay(song)}
                                paddingY="5"
                                borderBottom={`1px solid rgba(255,255,255,0.2)`}
                            >
                                <Td>{i + 1}</Td>
                                <Td>{song.name}</Td>
                                <Td>{formatDate(song.createdAt.toString())}</Td>
                                <Td>{formatTime(song.duration)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    )
}

export default SongTable
