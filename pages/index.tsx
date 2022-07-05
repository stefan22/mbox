import { Box, Text, Flex } from '@chakra-ui/layout'
import Image from 'next/image'
import bart from '../public/images/bart.png'

const Home = () => {
   return (
      <Box className="main-content__section" color="white" paddingX="40px">
         <Box className="section__heading">
            <Text fontSize="3xl" fontWeight="bold" color="gray.900">
               Top artist this month
            </Text>
         </Box>
         <Flex className="section__artists">
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
            <Box className="artist-card">
               <Image src={bart} alt="Bart" />
               <Box className="artist-card__info" marginTop="10px">
                  <Text color="gray.900" fontSize="large">
                     Artist name
                  </Text>
                  <Text color="white" fontSize="small">
                     Bart Simpson
                  </Text>
               </Box>
            </Box>
         </Flex>
      </Box>
   )
}

export default Home
