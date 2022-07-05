import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar/Sidebar'

const PlayerLayout = ({ children }) => {
   return (
      <Box className="main-wrapper" width="100vw" height="100vh">
         <Box position="fixed" bg="gray.900" top="0" bottom="0" width="250px" left="0">
            <Sidebar />
         </Box>
         <Box marginLeft="250px">
            <Box className="main-content">{children}</Box>
         </Box>
      </Box>
   )
}

export default PlayerLayout
