import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout"
import NextLink from "next/link"
import { userAccounts } from "./sideMenuRoutes"

const SideSignup = () => {
    return (
        <ListItem paddingX="20px" fontSize="16px" className="sidenav-links" color="gray.600">
            <LinkBox>
                <NextLink href="/signup" passHref>
                    <LinkOverlay>
                        <ListIcon as={userAccounts()[2].icon} color="gray.500" marginRight="20px" />
                        Signup
                    </LinkOverlay>
                </NextLink>
            </LinkBox>
        </ListItem>
    )
}

export default SideSignup
