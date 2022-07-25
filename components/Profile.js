import React from "react"
import NextImage from "next/image"
import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { ImSoundcloud } from "react-icons/im"
import { GiMusicalScore } from "react-icons/gi"
import { MdLibraryMusic } from "react-icons/md"
import homer from "../public/images/homer2_small.png"

const Profile = ({ email, firstName, playlists, artists }) => {
    const mainText = useColorModeValue("gray.800", "white")
    const secondaryText = useColorModeValue("gray.400", "gray.400")

    return (
        <>
            {email && (
                <Flex
                    borderRadius="50%"
                    filter="drop-shadow(2px 4px 6px #757575)"
                    border="3px solid #121212"
                    bg="#252522"
                    p="20px"
                    h="345px"
                    marginX="auto"
                    alignContent="center"
                    py="30px"
                    w={{ base: "310px", md: "325px" }}
                    alignItems="center"
                    direction="column"
                >
                    <NextImage id="mbox-homer" width="84" height="71" bg={"coral"} src={homer} alt="Bart" />{" "}
                    <Flex flexDirection="column" mb="30px">
                        <Text fontWeight="600" color={mainText} textAlign="center" fontSize="xl">
                            User Stats
                        </Text>
                        <Text color={secondaryText} textAlign="center" fontSize="sm" fontWeight="500">
                            Username: {firstName || " Loading..."}
                        </Text>
                        <Text color={secondaryText} textAlign="center" fontSize="xs" fontWeight="500">
                            Email: {email || "We got it"}
                        </Text>
                    </Flex>
                    <Flex justify="space-between" w="100%" px="36px">
                        <Flex className="user-stats" flexDirection="column">
                            <Text fontWeight="600" color="red.300" fontSize="xl" textAlign="center">
                                {artists?.length || 0} <ImSoundcloud width="24" size="1.15em" />
                            </Text>
                            <Text py="10px" fontSize="sm" color={secondaryText} fontWeight="500">
                                Artists
                            </Text>
                        </Flex>
                        <Flex className="user-stats" flexDirection="column">
                            <Text fontWeight="600" color="red.50" fontSize="xl" textAlign="center">
                                {playlists?.length || 0} <GiMusicalScore size="1.15em" />
                            </Text>
                            <Text py="10px" fontSize="sm" color={secondaryText} fontWeight="500">
                                Playlists
                            </Text>
                        </Flex>
                        <Flex className="user-stats" flexDirection="column">
                            <Text fontWeight="600" color="yellow.200" fontSize="xl" textAlign="center">
                                {36 || 0} <MdLibraryMusic size="1.10em" />
                            </Text>
                            <Text py="10px" fontSize="sm" color={secondaryText} fontWeight="500">
                                Songs
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </>
    )
}

export default Profile
