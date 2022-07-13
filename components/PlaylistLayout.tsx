import { Box, Flex, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"

const PlaylistLayout = ({ color, children, image, subtitle, title, description, roundImage }) => {
    return (
        <Box
            className="playlist-layout"
            bgGradient={`linear(${color}.400 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
        >
            <Flex
                className="playlist-layout__header"
                borderBottom={`1px solid ${color}.500`}
                bg={`${color}.600`}
                padding="40px 40px 50px"
                align="end"
            >
                <Box padding="20px">
                    <Image
                        boxSize="160px"
                        boxShadow="2xl"
                        src={image}
                        borderRadius={roundImage ? "100%" : "4px"}
                    />
                </Box>
                <Box padding="20px" lineHeight="40px" color="white">
                    <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
                        {subtitle}
                    </Text>
                    <Text fontSize="6xl">{title}</Text>
                    <Text fontSize="x-small">{description}</Text>
                </Box>
            </Flex>
            <Box className="playlist-layout__body" paddingY="50px">
                {children}
            </Box>
        </Box>
    )
}

export default PlaylistLayout
