import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "views/pages/DetailPage";
import MainPage from "views/pages/MainPage";
import RegisterPage from "views/pages/RegisterPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/detail' element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
