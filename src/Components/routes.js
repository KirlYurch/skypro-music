import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/FavoritesPage.js";
import { NotFound } from "./pages/Not-FoundPage.js";
import { MainPage } from "./pages/MainPage.js";
import { AppLogin } from "./pages/LoginPage.js";
import { RegistrationPage } from "./pages/RegistrationPage.js";
import { Categories } from "./pages/CategoriesPage.js";
import { ProtectedRoute } from "./protected-route.js";



export const AppRoutes = ( user ) => {
    console.log(user);
    return (
        <Routes>
            <Route path="/login" element={<AppLogin />} /> 
            <Route path="*" element={<NotFound />} />     
            <Route path="/registration" element={<RegistrationPage />} /> 
            
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<MainPage />} /> 
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/categories/:id" element={<Categories />} />
            </Route>

        </Routes>
    )
}
