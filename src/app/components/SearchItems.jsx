"use client";

import { useEffect, useState } from "react";
import SetItems from "./SetItems";

export default function SearchItems({ items }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [setImage, setImageSet] = useState("");
  const [allItemsBySet, setAllItemsBySet] = useState([]);

  useEffect(() => {
    if (selectedSet) {
      const selectedImage = items.find((i) => i.set === selectedSet).setImage;
      const allItems = items.filter((i) => i.set === selectedSet);
      setAllItemsBySet(allItems);
      setImageSet(selectedImage);
    }
  }, [selectedSet, setAllItemsBySet]);

  const allCharacters = items.map((item) => item.character);
  const allCharactersNoRepeat = [...new Set(allCharacters)];

  const setsForSelectedCharacter = items
    .filter((item) => item.character === selectedCharacter)
    .map((item) => item.set);

  const uniqueSets = [...new Set(setsForSelectedCharacter)];

  return (
    <div className="md:flex bg-gradient-to-b from-slate-800  to-slate-950">
      <div className="md:w-64 pl-3  pt-20 ">
        <form className="flex md:items-start justify-center items-center gap-5 flex-wrap md:flex-col">
          <h3 className="text-center w-full text-2xl text-slate-300 font-bold">
            Clases
          </h3>

          {allCharactersNoRepeat.map((character) => (
            <label
              key={character}
              className="py-1 text-xl flex gap-2 text-slate-100 hover:text-slate-500 cursor-pointer"
            >
              <input
                type="radio"
                value={character}
                name="selectedCharacter"
                onChange={(e) => setSelectedCharacter(e.target.value)}
                className="w-4"
              />
              {character}
            </label>
          ))}
          {uniqueSets.length > 0 && (
            <h3 className="text-center w-full py-2 text-2xl text-slate-300 font-bold">
              Sets
            </h3>
          )}
          {uniqueSets.map((set) => (
            <label
              key={set}
              className="p-2 text-xl flex gap-2 text-slate-100 hover:text-slate-500 cursor-pointer"
            >
              <input
                type="radio"
                name="setSelected"
                value={set}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-4"
              />
              {set}
            </label>
          ))}
        </form>
      </div>
      <div className=" w-full  pt-10">
        <h2 className="text-center py-5 font-bold text-slate-200 text-4xl">
          {" "}
          {selectedSet && "Set " + selectedSet}
        </h2>
        <div className="flex justify-center">
          {setImage === "" ? (
            <div className="flex justify-center overflow-x-auto  ">
              <img
                className="w-80 h-80 animate-slide-left object-contain"
                src="https://i.imgur.com/0AhoL9c.png"
              />
              <img
                className="w-80 h-80  animate-slide-down object-contain"
                src="https://i.imgur.com/XeFSCcp.png"
              />

              <img
                className="w-80 h-80 animate-slide-down object-contain"
                src="https://i.imgur.com/BYemN8A.png"
              />
              <img
                className="w-80 h-80  animate-slide-right object-contain"
                src="https://i.imgur.com/f4cjfff.png"
              />
            </div>
          ) : (
            <img className="md:w-80 w-40 md:h-80 h-40 square  p-1" src={setImage} />
          )}
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 py-5">
          {allItemsBySet.map((item) => (
            <SetItems item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
