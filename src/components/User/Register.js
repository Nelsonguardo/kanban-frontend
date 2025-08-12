import React, { useState } from "react";
import { API_URL } from "../../utils/Global";
import { useNavigate } from "react-router-dom";

function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'viewer' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const res = await fetch(`${API_URL}/user/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (!res.ok) throw new Error('Error al registrar usuario');
            setSuccess('Usuario registrado con éxito');
            setForm({ name: '', email: '', password: '', role: 'viewer' });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-8 text-center">Registro</h2>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                {success && <div className="text-green-500 mb-2">{success}</div>}
                <label className="block mb-1 font-semibold">Nombre:<span className="text-red-500">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Ingresa tu nombre" className="block w-full mb-4 p-2 border rounded" required />
                <label className="block mb-1 font-semibold">Email:<span className="text-red-500">*</span></label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="Ingresa tu email" type="email" className="block w-full mb-4 p-2 border rounded" required />
                <label className="block mb-1 font-semibold">Contraseña:<span className="text-red-500">*</span></label>
                <input name="password" value={form.password} onChange={handleChange} placeholder="Ingresa tu contraseña" type="password" className="block w-full mb-4 p-2 border rounded" required />
                <label className="block mb-1 font-semibold">Rol:<span className="text-red-500">*</span></label>
                <select name="role" value={form.role} onChange={handleChange} className="block w-full mb-6 p-2 border rounded">
                    <option value="admin">Administrador</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded font-semibold mb-4 hover:from-blue-600 hover:to-purple-600 transition"
                >
                    Registrarse
                </button>
                <div className="text-center">
                    ¿Ya tienes una cuenta?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        Inicia sesión aquí
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;