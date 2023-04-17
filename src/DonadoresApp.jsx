import { Button, CircularProgress } from '@mui/material' 
import { AppTheme } from './theme'
import { DonadoresPage } from './dashboard/pages/DonadoresPage'
import { AppRouter } from './router/AppRouter'

export const DonadoresApp = () => {
  return (
    <AppTheme> 
        <AppRouter /> 
    </AppTheme>
  )
}
