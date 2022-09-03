import { Box, Center, useColorModeValue, Heading, Text, Stack } from "@chakra-ui/react"
import Image from "next/image"
import bensound from "../public/images/albums/bensound.png"

const ArtistCard = ({ title, icon, src }) => {
    return (
        <Center py={12}>
            <Box
                role={"group"}
                p={6}
                maxW={"240px"}
                w={"full"}
                bg={useColorModeValue("white", "alphaWhite.200")}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
                shadow="md"
                border="1px solid"
                borderRadius={"50px"}
                borderColor={useColorModeValue("gray.800", "gray.500")}
            >
                <Box
                    rounded={"md"}
                    mt={-12}
                    pos={"relative"}
                    height={"200px"}
                    _after={{
                        transition: "all .3s ease",
                        content: '""',
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${bensound})`,
                        filter: "blur(50px)",
                        zIndex: -1
                    }}
                    _groupHover={{
                        _after: {
                            filter: "blur(1.5px)"
                        }
                    }}
                >
                    <Image
                        className="artist-image--cover"
                        rounded={"lg"}
                        width={196}
                        height={196}
                        objectFit={"cover"}
                        src={src}
                    />
                </Box>

                <Stack pt={5} align={"center"}>
                    <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
                        Artist
                    </Text>
                    <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                        {title}
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                        <Text fontWeight={800} fontSize={"xl"}>
                            $57
                        </Text>
                        <Box
                            my="auto"
                            color={useColorModeValue("gray.800", "gray.200")}
                            alignContent="center"
                        >
                            {icon}
                        </Box>
                        <Text textDecoration={"line-through"} color={"gray.600"}>
                            $199
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}

export default ArtistCard
