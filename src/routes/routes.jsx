import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/layout/Dashboard/Dashboard"
import Areas from "../components/Areas/Areas"
import Requests from "../components/Requests/Requests"

const ApplicationRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="/" element={<Dashboard />}>
                    <Route path="Dashboard" element={<Areas />}></Route>
                    <Route path="Solicitudes" element={<Requests />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>)
}

export { ApplicationRouter }