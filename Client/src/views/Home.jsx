import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);

  // Actualiza la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Simula obtener el clima
  useEffect(() => {
    // Reemplazar con fetch real si tenés API de clima
    setTimeout(() => {
      setWeather({ temp: 22, condition: "Soleado" });
    }, 1000);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("es-AR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const formatTime = (date) =>
    date.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
      <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        {formatDate(time)}
      </div>
      <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        {formatTime(time)}
      </div>

      {weather ? (
        <div className="text-xl md:text-2xl text-gray-700 mb-6">
          Clima: {weather.condition}, {weather.temp}°C
        </div>
      ) : (
        <div className="text-lg text-gray-500 mb-6">Cargando clima...</div>
      )}

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button className="bg-green-500 hover:bg-green-600 text-white text-2xl py-4 rounded-2xl shadow-lg">
          📅 Agenda
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-2xl py-4 rounded-2xl shadow-lg">
          ⏰ Recordatorio
        </button>
      </div>
    </div>
  );
}
