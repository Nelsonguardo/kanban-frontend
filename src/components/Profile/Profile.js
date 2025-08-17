import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import EditProfileModal from "./EditProfileModal";
import { API_URL, getToken, getUserId } from "../../utils/Global";

function Profile() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`${API_URL}/user/${getUserId()}`, {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });
                const data = await response.json();
                if (data.status == "success") {
                    setProfile(data.user);
                } else {
                    setProfile([]);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                setProfile([]);
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, []);

    const handleSave = (updatedProfile) => {
        setProfile(updatedProfile);
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <Navbar />
            <main className="flex flex-col items-center flex-1 py-10">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Perfil</h2>
                {loading ? (
                    <p className="text-gray-600">Cargando...</p>
                ) : Object.keys(profile).length > 0 ? (
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Nombre:</span>
                            <p className="text-gray-800">{profile.name}</p>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Email:</span>
                            <p className="text-gray-800">{profile.email}</p>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Rol:</span>
                            <p className="text-gray-800 capitalize">{profile.role}</p>
                        </div>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Editar Perfil
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-600">No se encontró el perfil.</p>
                )}
            </main>
            <Footer />
            {isModalOpen && (
                <EditProfileModal
                    profile={profile}
                    onSave={handleSave}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Profile;