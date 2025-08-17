import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { API_URL, getToken } from "../../utils/Global";

function Dashboard() {
  const username = Cookies.get("username") || "Usuario";
  const userId = Cookies.get("userId");
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch(`${API_URL}/board/${userId}/users`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        const data = await response.json();
        if (data.status === "success") {
          setBoards(data.boards.map((board) => board.board));
        } else {
          setBoards([]);
        }
      } catch (error) {
        console.error("Error fetching boards:", error);
        setBoards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBoards();
  }, [userId]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex flex-col items-center justify-start flex-1 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-blue-600">
            Bienvenido, {username}
          </h2>
        </div>
        {loading ? (
          <p className="text-gray-600">Cargando tableros...</p>
        ) : boards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boards.map((board) => (
              <div
                key={board.id}
                className="bg-blue-200 rounded-lg p-6 shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-xl mb-2 text-blue-600">
                  {board.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Creado por: {board.owner.name}
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Ver tablero
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No tienes ningún tablero asignado.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;