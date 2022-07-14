import { ChakraProvider } from "@chakra-ui/react"
import { StoreProvider } from "easy-peasy"
import PlayerLayout from "../components/PlayerLayout"
import theme from "../components/theme"
import { store } from "../lib/store"
import "../styles/global.css"

const App = ({ Component, props }) => {
    return (
        <ChakraProvider theme={theme}>
            <StoreProvider store={store}>
                {Component.authPage ? (
                    <Component {...props} />
                ) : (
                    <PlayerLayout>
                        <Component {...props} />
                    </PlayerLayout>
                )}
            </StoreProvider>
        </ChakraProvider>
    )
}

export default App
