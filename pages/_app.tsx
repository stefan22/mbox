import { ChakraProvider } from "@chakra-ui/react"
import PlayerLayout from "../components/PlayerLayout"
import Theme from "../components/Theme"
import "../styles/global.css"

const App = ({ Component, props }) => {
    return (
        <ChakraProvider theme={Theme}>
            <PlayerLayout>
                <Component {...props} />
            </PlayerLayout>
        </ChakraProvider>
    )
}

export default App
