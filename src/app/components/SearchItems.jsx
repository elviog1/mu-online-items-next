"use client";

import { useEffect, useState } from "react";
import SetItems from "./SetItems";

export default function SearchItems({ items }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [setImage, setImageSet] = useState("");
  const mg =
    "https://e7.pngegg.com/pngimages/96/604/png-clipart-mu-origin-mu-online-100-diamonds-video-game-relic-game-computer.png";
  const dk =
    "https://e7.pngegg.com/pngimages/96/604/png-clipart-mu-origin-mu-online-100-diamonds-video-game-relic-game-computer.png";
  const dw =
    "https://e7.pngegg.com/pngimages/96/604/png-clipart-mu-origin-mu-online-100-diamonds-video-game-relic-game-computer.png";
  const dl =
    "https://e7.pngegg.com/pngimages/96/604/png-clipart-mu-origin-mu-online-100-diamonds-video-game-relic-game-computer.png";
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
    <div className="flex overflow-hidden">
      <div className="w-64 pl-3 bg-gradient-to-b from-slate-800  to-slate-950  pt-20 ">
        <form className="flex flex-col">
          <h3 className="text-center text-2xl text-slate-300 font-bold">
            Clases
          </h3>

          {allCharactersNoRepeat.map((character) => (
            <label
              key={character}
              className="py-1 text-xl flex gap-2 hover:text-slate-300 cursor-pointer"
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
            <h3 className="text-center py-2 text-2xl text-slate-300 font-bold">
              Sets
            </h3>
          )}
          {uniqueSets.map((set) => (
            <label
              key={set}
              className="p-2 text-xl flex gap-2 hover:text-slate-300 cursor-pointer"
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
      <div className=" w-full bg-gradient-to-b from-slate-800  to-slate-950 pt-10">
        <h2 className="text-center py-5 font-bold text-slate-200 text-4xl">
          {" "}
          {selectedSet && "Set " + selectedSet}
        </h2>
        <div className="flex justify-center">
          {setImage === "" ? (
            <div className="flex justify-center  ">
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
            <img className="w-80 h-80" src={setImage} />
          )}
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 my-5">
          {allItemsBySet.map((item) => (
            <SetItems item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
