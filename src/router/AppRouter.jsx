import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes'; 
import { DonorsRoutes } from '../dashboard/routes/DonorsRoutes';
import { useCheckAuth } from '../hooks';
import { CheckingAuth } from '../ui/components/CheckingAuth';


export const AppRouter = () => {
  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <DonorsRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        } 

        {/* JournalApp */}
        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

    </Routes>
  )
}
