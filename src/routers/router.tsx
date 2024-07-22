import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "views/pages/MainPage";
import RegisterPage from "views/pages/RegisterPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
