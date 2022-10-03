import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"

export const theme = extendTheme({
    colors,
    components: { 
        Text: {
            baseStyle: {
                zIndex:1
            }
        },
        Heading: {
            baseStyle: {
                zIndex:1
            }
        },
        Flex: {
            baseStyle: {
                zIndex:1
            }
        },
        Button: {
            baseStyle: {
                zIndex:1
            }
        }, 
        
    }
})