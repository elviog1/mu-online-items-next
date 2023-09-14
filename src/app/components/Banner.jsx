import React from "react";

export default function Banner() {
  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp2445596.jpg')] bg-no-repeat flex items-center justify-center h-[calc(100vh)] bg-cover ">
      <div className="flex flex-col items-center">
        <img className="w-96 opacity-0 animate-fade-in" src="https://muplatas2.com/images/logo.png" />
        <h2 className="text-slate-100 font-bold pt-10 text-3xl text-center">¡Forja tu leyenda en un mundo de aventuras y batallas épicas en Mu Online!</h2>
      </div>
    </div>
  );
}
