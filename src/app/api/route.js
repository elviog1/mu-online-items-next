import { NextResponse } from "next/server";

export async function GET(){
   const res = await fetch('http://localhost:4000/items')
   const data = await res.json()
   console.log(data)
    return NextResponse.json(data)
}