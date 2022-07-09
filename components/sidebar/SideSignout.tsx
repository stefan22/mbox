import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout"
import NextLink from "next/link"
import { userAccounts } from "./sideMenuRoutes"

const SideSignout = () => {
    return (
        <ListItem paddingX="20px" fontSize="16px" className="sidenav-links" color="gray.600">
            <LinkBox>
                <NextLink href="/signout" passHref>
                    <LinkOverlay>
                        <ListIcon as={userAccounts()[1].icon} color="gray.500" marginRight="20px" />
                        Signout
                    </LinkOverlay>
                </NextLink>
            </LinkBox>
        </ListItem>
    )
}

export default SideSignout
