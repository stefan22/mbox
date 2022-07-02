import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import PlayerLayout from '../components/PlayerLayout'
import 'reset-css'

const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        backgroundColor: '#fff',
      },
    },
    colors: {
      gray: {
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#757575',
        600: '#424242',
        700: '#212121',
      },
      red: {
        100: '#e63946',
        200: '#9e2a2b',
      },

      white: {
        100: '#fefae0',
        200: '#f1faee',
      },
      blue: {
        100: '#a8dadc',
        200: '#457b9d',
        300: '#1d3557',
        400: '#001d3d',
        500: '#000814',
      },

      components: {
        Button: {
          variants: {
            link: {
              ':focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            },
          },
        },
      },
    },
  },
})

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

export default App
