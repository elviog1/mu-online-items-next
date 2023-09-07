import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center py-20  bg-slate-950">
      <div className="flex flex-col gap-3 items-center">
        <img src="https://muplatas2.com/images/logo.png" className="w-20" />
        <span className="text-white">Creado por <Link className="font-bold" href="https://galeanoelvio.vercel.app">Galeano Elvio</Link></span>
        
      </div>
    </div>
  );
}
