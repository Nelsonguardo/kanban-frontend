import React, { useState } from "react";
import Cookies from "js-cookie";
import { API_URL } from "../../utils/Global";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch(`${API_URL}/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Error al iniciar sesión');
            const data = await res.json();
            Cookies.set('token', data.token, { path: '/' });
            //console.log(data.user);
            Cookies.set('username', data.user.name, { path: '/' });
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-8 text-center">Iniciar Sesión</h2>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <label className="block mb-1 font-semibold">Email: <span className="text-red-500">*</span></label>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ingresa tu email"
                    type="email"
                    className="block w-full mb-4 p-2 border rounded"
                    required
                />
                <label className="block mb-1 font-semibold">Contraseña: <span className="text-red-500">*</span></label>
                <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    className="block w-full mb-4 p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded font-semibold mb-4 hover:from-blue-600 hover:to-purple-600 transition"
                >
                    Iniciar Sesión
                </button>
                <div className="text-center">
                    ¿No tienes una cuenta?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        Regístrate aquí
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;