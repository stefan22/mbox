import { Box } from "@chakra-ui/layout"
import Sidebar from "./sidebar/Sidebar"
import PlayerBar from "./PlayerBar"

/*
 * @fn PlayerLayout - PlayerLayout component
 * @param {Component} Component - Component to be wrapped
 * @param {Object} props - Component props
 * @returns {Component} - Wrapped component
 */
const PlayerLayout = ({ children }) => {
    return (
        <Box className="main-wrapper">
            <Box position="fixed" bg="gray.900" top="0" bottom="0" width="250px" left="0">
                <Sidebar />
            </Box>
            <Box width="100%" marginLeft="250px">
                <Box className="main-content">
                    {children}
                    <PlayerBar />
                </Box>
            </Box>
        </Box>
    )
}

export default PlayerLayout
