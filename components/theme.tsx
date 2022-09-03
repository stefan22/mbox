import { extendTheme } from "@chakra-ui/react"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/500.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/500.css"

/*
 * @fn Theme - Extend theme component
 * @param {Object} theme - Theme object
 * @returns {Object} - Extended theme object
 */
const theme = extendTheme({
    fonts: {
        heading: `Open Sans, sans-serif`,
        body: `Raleway, sans-serif`
    },
    colors: {
        gray: {
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#757575",
            600: "#616161",
            700: "#424242",
            800: "#363636",
            900: "#212121"
        },
        red: {
            100: "#e63946",
            200: "#9e2a2b",
            300: "#ff7043",
            400: "#ffab91"
        },
        white: {
            100: "#fefae0",
            200: "#f1faee"
        },
        blue: {
            100: "#a8dadc",
            200: "#457b9d",
            300: "#1d3557",
            400: "#001d3d",
            500: "#000814"
        },
        purple: {
            100: "#ba68c8"
        },
        fonts: {
            body: "system-ui, sans-serif",
            heading: "Georgia, serif",
            mono: "Menlo, monospace"
        },
        fontSizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        lineHeights: {
            normal: "normal",
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: "2"
        },
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        breakpoints: {
            sm: "30em",
            md: "48em",
            lg: "62em",
            xl: "80em",
            "2xl": "96em"
        },
        space: {
            px: "1px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem"
        },
        sizes: {
            max: "max-content",
            min: "min-content",
            full: "100%",
            "3xs": "14rem",
            "2xs": "16rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            "8xl": "90rem",
            container: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px"
            }
        },
        components: {
            Button: {
                variants: {
                    link: {
                        ":focus": {
                            outline: "none",
                            boxShadow: "none"
                        }
                    }
                }
            }
        }
    }
})

export default theme
