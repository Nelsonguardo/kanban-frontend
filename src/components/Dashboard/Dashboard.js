import React from "react";
import Cookies from "js-cookie";

function Dashboard() {
    // Supongamos que el backend retorna el nombre en la cookie "username"
    const username = Cookies.get("username") || "Usuario";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Bienvenido</h2>
                <p className="text-lg">Hola, <span className="font-semibold">{username}</span></p>
            </div>
        </div>
    );
}

export default Dashboard;