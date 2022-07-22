import NextImage from "next/image"
import NextLink from "next/link"
import { Box, List, ListItem, LinkOverlay, LinkBox, ListIcon, Divider, Text, Flex } from "@chakra-ui/layout"
import homer from "../../public/images/homer2_small.png"
import { navMenu, musicMenu } from "./sideMenuRoutes"
import Playlist from "./Playlist"
import SideSignout from "./SideSignout"

const Sidebar = () => {
    return (
        <Box className="side-wrapper">
            <Box className="side_inner-wrapper">
                <Box className="logo">
                    <Flex display="flex" justifyContent="flex-start" width="100%">
                        <NextImage id="mbox-homer" width="58" height="47" src={homer} alt="Bart" />{" "}
                        <Text
                            ml={2}
                            textTransform="uppercase"
                            fontSize="sm"
                            marginLeft="0.5rem"
                            lineHeight="260%"
                            fontWeight="bold"
                            color="red.500"
                        >
                            TMX Media
                        </Text>
                    </Flex>
                </Box>
                <List spacing={2}>
                    {navMenu().map(menu => (
                        <ListItem
                            className="sidenav-links"
                            color="gray.600"
                            paddingX="20px"
                            fontSize="16px"
                            key={menu.name}
                        >
                            <LinkBox>
                                <NextLink href={menu.route} passHref>
                                    <LinkOverlay>
                                        <ListIcon as={menu.icon} color="gray.500" marginRight="20px" />
                                        {menu.name}
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
                <Divider className="side-divider" color="gray.500" />
                <List spacing={2}>
                    {musicMenu().map(menu => (
                        <ListItem
                            paddingX="20px"
                            fontSize="16px"
                            className="sidenav-links"
                            color="gray.600"
                            key={menu.name}
                        >
                            <LinkBox>
                                <NextLink href={menu.route} passHref>
                                    <LinkOverlay>
                                        <ListIcon as={menu.icon} color="gray.500" marginRight="20px" />
                                        {menu.name}
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
                <Divider className="side-divider" color="gray.500" />
                <List spacing={2}>
                    <SideSignout />
                </List>
                <Divider className="side-divider" color="gray.500" />
                <Playlist />
            </Box>
        </Box>
    )
}

export default Sidebar
