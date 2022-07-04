import NextImage from 'next/image'
import NextLink from 'next/link'
import { Box, List, ListItem, LinkOverlay, LinkBox, ListIcon, Divider, Text, Flex } from '@chakra-ui/layout'
import bart from '../../public/images/bart.png'
import { navMenu, musicMenu } from './sideMenuRoutes'

const playlists = new Array(10).fill(1).map((_, i) => {
   return (
      <Text
         key={i}
         color="gray.500"
         align="left"
         paddingX="3rem">
         {`Playlist ${i + 1}`}
      </Text>
   )
})

const Sidebar = () => {
   return (
      <Box className="side-wrapper">
         <Box className="side_inner-wrapper">
            <Box className="logo">
               <Flex
                  display="flex"
                  justifyContent="flex-start"
                  width="100%">
                  <NextImage
                     src={bart}
                     height={38}
                     width={30}
                     alt="Bart"
                  />{' '}
                  <Text
                     ml={2}
                     textTransform="uppercase"
                     fontSize="sm"
                     marginLeft="0.5rem"
                     lineHeight="260%"
                     fontWeight="bold"
                     color="red.500">
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
                     key={menu.name}>
                     <LinkBox>
                        <NextLink
                           href={menu.route}
                           passHref>
                           <LinkOverlay>
                              <ListIcon
                                 as={menu.icon}
                                 color="gray.500"
                                 marginRight="20px"
                              />
                              {menu.name}
                           </LinkOverlay>
                        </NextLink>
                     </LinkBox>
                  </ListItem>
               ))}
            </List>
            <Divider
               className="side-divider"
               color="gray.500"
            />
            <List spacing={2}>
               {musicMenu().map(menu => (
                  <ListItem
                     paddingX="20px"
                     fontSize="16px"
                     className="sidenav-links"
                     color="gray.600"
                     key={menu.name}>
                     <LinkBox>
                        <NextLink
                           href={menu.route}
                           passHref>
                           <LinkOverlay>
                              <ListIcon
                                 as={menu.icon}
                                 color="gray.500"
                                 marginRight="20px"
                              />
                              {menu.name}
                           </LinkOverlay>
                        </NextLink>
                     </LinkBox>
                  </ListItem>
               ))}
            </List>
            <Divider
               className="side-divider"
               color="gray.500"
            />
            <List spacing={2}>
               {musicMenu().map(menu => (
                  <ListItem
                     paddingX="20px"
                     fontSize="16px"
                     className="sidenav-links"
                     color="gray.600"
                     key={menu.name}>
                     <LinkBox>
                        <NextLink
                           href={menu.route}
                           passHref>
                           <LinkOverlay>
                              <ListIcon
                                 as={menu.icon}
                                 color="gray.500"
                                 marginRight="20px"
                              />
                              {menu.name}
                           </LinkOverlay>
                        </NextLink>
                     </LinkBox>
                  </ListItem>
               ))}
            </List>
            <Divider
               className="side-divider"
               color="gray.500"
            />
            <List spacing={2}>{playlists}</List>
         </Box>
      </Box>
   )
}

export default Sidebar
