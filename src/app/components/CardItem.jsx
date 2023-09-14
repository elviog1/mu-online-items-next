"use client";

import { useState } from "react";
export default function CardItem({ item }) {
  //console.log(item.image.filter(i => i.level >= 4).url) 
  const [level, setLevel] = useState(item.level);
  const [defense, setDefense] = useState(item.defense);
  const [str, setStr] = useState(item.str);
  const [agi, setAgi] = useState(item.agi); 
  console.log(level);
  const handlePrev = () => {
    setLevel(level - 1);
    //setDefense(defense - item.upgradeDefense)
    setStr(str - item.upgradeStr);
    setAgi(agi - item.upgradeAgi);
    if (level === 10) {
      setDefense(defense - item.upgradeDefense - 1);
    } else if (level === 11) {
      setDefense(defense - item.upgradeDefense - 2);
    } else if (level === 12) {
      setDefense(defense - item.upgradeDefense - 3);
    } else if (level === 13) {
      setDefense(defense - item.upgradeDefense - 4);
    } else if (level === 14) {
      setDefense(defense - item.upgradeDefense - 5);
    } else if (level === 15) {
      setDefense(defense - item.upgradeDefense - 6);
    } else {
      setDefense(defense - item.upgradeDefense);
    }
  };
  const handleNext = () => {
    setLevel(level + 1);
    setStr(str + item.upgradeStr);
    setAgi(agi + item.upgradeAgi);
    //setDefense(defense + item.upgradeDefense)
    if (level === 9) {
      setDefense(defense + item.upgradeDefense + 1);
    } else if (level === 10) {
      setDefense(defense + item.upgradeDefense + 2);
    } else if (level === 11) {
      setDefense(defense + item.upgradeDefense + 3);
    } else if (level === 12) {
      setDefense(defense + item.upgradeDefense + 4);
    } else if (level === 13) {
      setDefense(defense + item.upgradeDefense + 5);
    } else if (level === 14) {
      setDefense(defense + item.upgradeDefense + 6);
    } else {
      setDefense(defense + item.upgradeDefense);
    }
  };
  return (
    <div className="flex gap-5 items-center">
      <div>
        <button
          type="buton"
          disabled={level === 0 && true}
          onClick={handlePrev}
          className={`${level === 0  && "text-transparent"} text-red-700 text-7xl`}
        >
          -
        </button>
      </div>
      <div className="md:w-80 font-bold rounded-t-md text-white bg-opacity-80 bg-zinc-950 flex gap-5 flex-col text-center">
        <div className="md:w-80">
          <img className="w-full  rounded-md border-8 bg-neutral-900 border-double border-neutral-950" src={item.image.filter(i => i.level >= level)[0].url} />
        </div>
        <div>
          <h3 className="font-bold text-green-500">
            {item.name} {level > 0 ? `+${level}` : ""}
          </h3>
        </div>
        <div className="text-sm">
          <h3 className="text-blue-700">Armor: {defense}</h3>
          <h3>
            Durability: [{item.durability}/{item.durability}]
          </h3>
          <h3>Stregth available: {str}</h3>
          <h3>Agility available: {agi}</h3>
        </div>
        <div>
          {item.class.map((i) => (
            <h3 key={i}>Can be equiped by {i}</h3>
          ))}
        </div>
      </div>
      <div>
        <button
          type="button"
          disabled={level === 15 && true}
          onClick={handleNext}
          className={`${level === 15  && "text-transparent"} text-green-700 text-7xl`}
        >
          +
        </button>
      </div>
    </div>
  );
}
