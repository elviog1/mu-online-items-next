"use client";

import { useEffect, useState } from "react";

export default function CharactersCard({ characters }) {
  const [characterInfo, setCharacterInfo] = useState(characters[0]);
  const [animateClass, setAnimateClass] = useState("animate-slide-left-champ");

  useEffect(() => {
    setAnimateClass("animate-slide-left-champ");
  }, [characterInfo]);
  const handleCharacter = (char) => {
    setCharacterInfo(char);
    setAnimateClass("");
  };
  return (
    <div className="md:flex justify-center py-5">
      <div className="flex gap-3 md:w-1/3 justify-center flex-wrap">
        {characters.map((char) => (
          <button
            className="w-32 h-32"
            key={char.name}
            onClick={() => handleCharacter(char)}
            value={char.name}
          >
            <img
              src={char.avatar}
              className="w-32 opacity-30 hover:opacity-100 h-32 hover:scale-110 duration-300 cursor-pointer focus:opacity-100 square"
            />
          </button>
        ))}
      </div>

      <div className="md:w-1/3 flex flex-col gap-5 overflow-hidden">
        <h2 className="text-2xl md:pt-0 md:text-start text-center pt-5">{characterInfo.name}</h2>
        <p className="text-xl z-10">{characterInfo.description}</p>
        <div className="flex justify-center">
          <img
            src={characterInfo.image}
            className={`w-96 h-96 relative  bottom-48 left-36 z-0 opacity-40 ${animateClass}`}
          />
        </div>
        </div>
    </div>
  );
}
