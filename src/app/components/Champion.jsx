import React, { Suspense } from "react";
import CharactersCard from "./CharactersCard";


async function loadCharacter() {
  const res = await fetch(process.env.API + "/characters");
  const data = await res.json();
  return data;
}

export default async function Champion() {
  const characters = await loadCharacter();
  return (
    <section className="flex pt-10 flex-col items-center justify-center text-slate-100">
      <div>
        <h2 className="text-center text-2xl">Elegí tu </h2>
        <h2 className="text-center text-5xl py-2">Campeón</h2>
      </div>
      <div className="pt-10">
        <Suspense fallback={<p>cargando</p>}>

        <CharactersCard characters={characters} />
        </Suspense>
      </div>
    </section>
  );
}
