import { Navigate, Route, Routes } from "react-router-dom"  
import { DonadoresCreate } from "../view/DonadoresCreate"
import { DonadoresPage } from "../pages/DonadoresPage"


export const DonorsRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={ <DonadoresPage /> } /> */}
        <Route path="/marcas" element={ <DonadoresPage /> } /> 

        <Route path="/*" element={ <Navigate to="/marcas" /> } />
    </Routes>
  )
}
