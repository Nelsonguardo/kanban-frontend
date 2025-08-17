import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../User/Login";
import Register from "../User/Register";
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRoute from "../../utils/ProtectedRoute";
import Profile from "../Profile/Profile";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path="/profile" element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            } />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AppRouter;