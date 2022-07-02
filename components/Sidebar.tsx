import Image from 'next/image'
import { Box } from '@chakra-ui/layout'
import bart from '../images/bart.png'

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="lightgray"
      paddingX="5px"
      color="gray"
    >
      <Box
        paddingY="20px"
        height="100%"
      >
        <Box
          width="120px"
          marginBottom="20px"
          paddingX="20px"
        >
          <Image
            src={bart}
            height={50}
            width={40}
            alt="Bart"
          />
          Sidebar
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
