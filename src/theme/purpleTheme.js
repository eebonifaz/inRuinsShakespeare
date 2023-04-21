import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { zhCN, esES } from '@mui/material/locale';


export const purpleTheme = createTheme(
    {    
        palette: {
            primary: {
                main: "#262254"
            },
            secondary: {
                main: "#543884"
            },
            error: {
                main: red.A400
            }
        }
    },
    esES
    )