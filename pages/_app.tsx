import { ChakraProvider } from "@chakra-ui/react"
import PlayerLayout from "../components/PlayerLayout"
import theme from "../components/theme"
import "../styles/global.css"

const App = ({ Component, props }) => {
    return (
        <ChakraProvider theme={theme}>
            {Component.authPage ? (
                <Component {...props} />
            ) : (
                <PlayerLayout>
                    <Component {...props} />
                </PlayerLayout>
            )}
        </ChakraProvider>
    )
}

export default App
