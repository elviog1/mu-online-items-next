import React from "react";

export default function Platform() {
  return (
    <div className="relative bg-cover bg-top bg-no-repeat bg-[url('https://tarisglobal.com/assets/img05.30d96833.jpg')] flex justify-center h-[calc(100vh-3rem)] text-slate-100">
      <div className=" relative">
        <div className="absolute inset-0">
          <div className="h-[calc(100vh-3rem)] bg-gradient-to-b from-transparent to-slate-950"></div>
        </div>
        <div className="w-full pt-4 flex flex-col items-center text-center">
          <h2 className="text-center text-4xl">
            Servidor Cruzado y Plataforma
          </h2>
          <div className="w-1/2">
            <h2 className="text-center text-2xl">
              El juego se puede jugar tanto en PC como en dispositivos móviles.
              El progreso del juego se sincronizará en todas las plataformas y
              los jugadores tendrán acceso a todas las funciones del juego sin
              importar dónde se encuentren.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
