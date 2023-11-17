import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/FavoritesPage";
import { NotFound } from "./pages/Not-FoundPage";
import { MainPage } from "./pages/MainPage";
import { AppLogin } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { Categories } from "./pages/CategoriesPage";
import { ProtectedRoute } from "./protected-route";



export const AppRoutes = () => {
    

    return (
        <Routes>
            <Route path="/login" element={<AppLogin />} /> 
            <Route path="/registration" element={<RegistrationPage />} /> 
            
            <Route element={<ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />}>
                <Route path="/" element={<MainPage />} /> 
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/categories/:id" element={<Categories />} />
            </Route>
            <Route path="*" element={<NotFound />} />    
        </Routes>
    )
}
