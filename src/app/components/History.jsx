import React from "react";

export default function History() {
  return (
    <section className="flex flex-col items-center text-slate-100">
      <div className="w-1/2 text-center overflow-hidden">
        <h2 className="text-5xl font-bold pt-10 animate-slide-left">Historia</h2>
      </div>
      <div className="w-1/2 py-10 text-xl overflow-hidden">
        <p className="animate-slide-right">
          Mu Online se desarrolla en un mundo de fantasía medieval donde los
          jugadores se convierten en aventureros en busca de poder y riqueza. El
          juego se centra en la lucha contra monstruos, la exploración de
          mazmorras y la interacción con otros jugadores.
        </p>
      </div>
      
    </section>
  );
}
