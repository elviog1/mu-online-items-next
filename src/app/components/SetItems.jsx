import Link from "next/link";
import React from "react";

export default function SetItems({ item }) {

  return (
    <Link href={`/items/`+item._id}> 
      <img className="md:w-48 w-32 rounded-md border-8 bg-neutral-900 border-double border-neutral-950 hover:scale-105 duration-300" src={item.image[0].url}/>
    </Link>
  );
}
