import Link from "next/link";
import React from "react";

export default function SetItems({ item }) {

  return (
    <Link href={`/items/`+item._id}> 
      <img className="w-48 rounded-lg hover:scale-105 duration-300" src={item.image[0].url}/>
    </Link>
  );
}
