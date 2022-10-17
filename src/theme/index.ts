import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"

export const theme = extendTheme({
    colors,
    components: {
        Button: {
            defaultProps: {
                colorScheme: "theme",
                rounded:"xs"
            },
            variants: {
                outline: {
                    border: "2px solid",
                    borderColor: "theme.500",
                    color: "theme.500",
                    _hover:{
                        bg: "theme.400",
                        color:"white"
                    },
                    _active: {
                        bg: "theme.500",
                        color: "white",
                        borderColor:"transparent"
                    }
                }
            }
        
        }
    }
});
