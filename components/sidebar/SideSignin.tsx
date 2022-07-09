import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout"
import NextLink from "next/link"
import { userAccounts } from "./sideMenuRoutes"

const SideSignin = () => {
    return (
        <ListItem paddingX="20px" fontSize="16px" className="sidenav-links" color="gray.600">
            <LinkBox>
                <NextLink href="/signin" passHref>
                    <LinkOverlay>
                        <ListIcon as={userAccounts()[0].icon} color="gray.500" marginRight="20px" />
                        Signin
                    </LinkOverlay>
                </NextLink>
            </LinkBox>
        </ListItem>
    )
}

export default SideSignin
