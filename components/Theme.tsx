import { extendTheme } from '@chakra-ui/react'

const Theme = extendTheme({
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
            600: '#616161',
            700: '#424242',
            800: '#363636',
            900: '#212121',
         },
         red: {
            100: '#e63946',
            200: '#9e2a2b',
            300: '#ff7043',
            400: '#ffab91',
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
         purple: {
            100: '#ba68c8',
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

export default Theme
