import { Routes, Route } from "react-router-dom";
import Login from "../User/Login";
import Register from "../User/Register";
import Dashboard from "../Dashboard/Dashboard";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AppRouter;