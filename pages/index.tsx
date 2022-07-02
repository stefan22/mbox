import { Box, Text, Flex } from '@chakra-ui/layout'
import Image from 'next/image'
import bart from '../images/bart.png'

const Home = () => {
  return (
    <Box
      color="white"
      paddingX="40px"
    >
      <Box marginBottom="40px">
        <Text
          fontSize="2xl"
          fontWeight="bold"
        >
          Top artist this month
        </Text>
        <Text fontSize="md">Artist</Text>
      </Box>
      <Flex>
        <Box
          paddingX="10px"
          width="20%"
        >
          <Box
            bg="gray.900"
            borderRadius="4px"
            padding="15px"
            width="100%"
          >
            <Image
              src={bart}
              alt="Bart"
            />
            <Box marginTop="20px">
              <Text fontSize="large">Artist name</Text>
              <Text fontSize="x-small">Bart Simpson</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Home
