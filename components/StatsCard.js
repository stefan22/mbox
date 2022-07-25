import { Box, Flex, Image, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react"

/*
 * @fn StatsCard: stats card component
 * @param {object}  props passed from the parent component
 * @returns {JSX} - JSX  component
 */
const StatsCard = props => {
    const { title, stat, icon, cover, bg = "white", image = "" } = props
    let isImage = `${cover.trim().replace(" ", "").toLowerCase()}`
    isImage = `${isImage}.jpg`
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py="5"
            bg={bg}
            shadow="xl"
            border="1px solid"
            borderColor={useColorModeValue("gray.800", "gray.500")}
            rounded="lg"
        >
            <Flex justifyContent="space-between">
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight="medium">{title}</StatLabel>
                    <Image src={image} borderRadius="100%" />
                    <StatNumber fontSize="2xl" fontWeight="medium">
                        {stat}
                    </StatNumber>
                </Box>
                <Image src={`/public/images/${isImage}`} />
                <Box my="auto" color={useColorModeValue("gray.800", "gray.200")} alignContent="center">
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}

export default StatsCard
