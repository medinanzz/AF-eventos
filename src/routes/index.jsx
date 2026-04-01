import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
// import { MainPage } from "../components/main";
import { HomePage } from "../home";

export function RouteApp() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}