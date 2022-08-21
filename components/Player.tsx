import {
    ButtonGroup,
    Box,
    IconButton,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb,
    Center,
    Flex,
    Text
} from "@chakra-ui/react"
import ReactHowler from "react-howler"
import { useEffect, useRef, useState } from "react"
import {
    MdShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat
} from "react-icons/md"
import { useStoreActions } from "easy-peasy"
import { formatTime } from "../lib/songFormat"

const Player = ({ songs, activeSong }) => {
    const [playing, setPlaying] = useState(true)
    const [index, setIndex] = useState(songs?.findIndex(s => s.id === activeSong?.id))
    const [seek, setSeek] = useState(0.0)
    const [isSeeking, setIsSeeking] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [duration, setDuration] = useState(0.0)
    const soundRef = useRef(null)
    const repeatRef = useRef(repeat)
    const setActiveSong = useStoreActions((state: any) => state.setActiveSong)

    useEffect(() => {
        let timerId
        if (playing && !isSeeking) {
            const f = () => {
                setSeek(soundRef.current.seek())
                timerId = requestAnimationFrame(f)
            }
            timerId = requestAnimationFrame(f)
            return () => cancelAnimationFrame(timerId)
        }
        cancelAnimationFrame(timerId)
    }, [playing, isSeeking])

    useEffect(() => {
        setActiveSong(songs[index])
    }, [index, setActiveSong, songs])

    const handlePlayState = val => setPlaying(val)

    const handleShuffle = () => setShuffle(shuf => !shuf)

    const handleRepeat = () => setRepeat(rep => !rep)

    const handlePrevSong = () => setIndex(idx => (idx ? idx - 1 : songs.length - 1))

    const handleNextSong = () => {
        setIndex(idx => {
            if (shuffle) {
                const nextSong = Math.floor(Math.random() * songs.length)
                //  if next song is the same, try again.
                if (nextSong === idx) {
                    return handleNextSong()
                }
                return nextSong
            }
            // if no shuffle, play next song
            return idx === songs.length - 1 ? 0 : idx + 1
        })
    }

    // keeping track of repeat
    useEffect(() => {
        repeatRef.current = repeat
    }, [repeat])

    // howlerjs
    const onEnd = () => {
        if (repeatRef.current) {
            setSeek(0)
            soundRef.current.seek(0)
        } else {
            handleNextSong()
        }
    }

    // howlerjs
    const onLoad = () => {
        const songDuration = soundRef.current.duration()
        setDuration(songDuration)
    }

    const handleOnSeek = e => {
        setSeek(parseFloat(e[0]))
        soundRef.current.seek(e[0])
    }

    return (
        <Box className="player-container">
            <Box>
                <ReactHowler
                    playing={playing}
                    src={activeSong?.url || "hola"}
                    ref={soundRef}
                    onLoad={onLoad}
                    onEnd={onEnd}
                />
            </Box>
            <Center color="gray.600">
                <ButtonGroup>
                    <IconButton
                        outline="none"
                        variant="link"
                        aria-label="shuffle"
                        fontSize="24px"
                        color={shuffle ? "white" : "gray.600"}
                        onClick={handleShuffle}
                        icon={<MdShuffle />}
                    />
                    <IconButton
                        outline="none"
                        variant="link"
                        aria-label="skip"
                        fontSize="24px"
                        icon={<MdSkipPrevious />}
                        onClick={handlePrevSong}
                    />
                    {playing ? (
                        <IconButton
                            outline="none"
                            variant="link"
                            aria-label="pause"
                            bg={shuffle ? "whiteAlpha.400" : "whiteAlpha.50"}
                            fontSize="40px"
                            color="blackAlpha.400"
                            border="1px solid whiteAlpha.900"
                            icon={<MdOutlinePauseCircleFilled />}
                            onClick={() => handlePlayState(false)}
                        />
                    ) : (
                        <IconButton
                            outline="none"
                            variant="link"
                            aria-label="play"
                            fontSize="40px"
                            border="1px solid whiteAlpha.900"
                            color="blackAlpha.400"
                            icon={<MdOutlinePlayCircleFilled />}
                            onClick={() => handlePlayState(true)}
                        />
                    )}

                    <IconButton
                        outline="none"
                        variant="link"
                        aria-label="next"
                        fontSize="24px"
                        icon={<MdSkipNext />}
                        onClick={handleNextSong}
                    />
                    <IconButton
                        outline="none"
                        variant="link"
                        aria-label="repeat"
                        fontSize="24px"
                        color={repeat ? "white" : "gray.600"}
                        onClick={handleRepeat}
                        icon={<MdOutlineRepeat />}
                    />
                </ButtonGroup>
            </Center>

            <Box color="gray.600">
                <Flex justify="center" align="center">
                    <Box width="10%">
                        <Text fontSize="xs">{formatTime(seek)}</Text>
                    </Box>
                    <Box width="80%">
                        <RangeSlider
                            /* eslint-disable-next-line jsx-a11y/aria-proptypes */
                            aria-label={["min", "max"]}
                            step={0.1}
                            min={0}
                            id="player-range"
                            max={duration ? (duration.toFixed(2) as unknown as number) : 0}
                            onChange={handleOnSeek}
                            value={[seek]}
                            onChangeStart={() => setIsSeeking(true)}
                            onChangeEnd={() => setIsSeeking(false)}
                        >
                            <RangeSliderTrack bg="gray.800">
                                <RangeSliderFilledTrack bg="gray.600" />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                        </RangeSlider>
                    </Box>
                    <Box width="10%" textAlign="right">
                        <Text fontSize="xs">{formatTime(duration)}</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Player
