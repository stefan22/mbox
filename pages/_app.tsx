import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import PlayerLayout from '../components/PlayerLayout'
import Theme from '../components/Theme'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={Theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

export default App
