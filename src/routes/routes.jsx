import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/layout/Dashboard/Dashboard"
import Areas from "../components/Areas/Areas"

const ApplicationRouter = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route path="/Dashboard" element={<Areas />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>)
}

export { ApplicationRouter }