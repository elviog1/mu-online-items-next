import Link from "next/link";
import React from "react";

export default function SetItems({ item }) {

  return (
    <Link href={`/items/`+item._id}> 
      <img className="w-48 rounded-md border-8 bg-neutral-950 border-double border-neutral-800 hover:scale-105 duration-300" src={item.image[0].url}/>
    </Link>
  );
}
