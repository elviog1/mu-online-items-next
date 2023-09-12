import { Suspense } from "react";
import SearchItems from "../components/SearchItems";
async function loadItems() {
  const res = await fetch(process.env.API + "/items");
  const data = await res.json();
  return data;
}

export default async function SetsPage() {
  const items = await loadItems();
  return (
    <section className="">
      <Suspense fallback={<p>cargando</p>}>
        <SearchItems items={items} />
      </Suspense>
    </section>
  );
}
