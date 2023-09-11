import { Suspense } from "react";
import SearchItems from "../components/SearchItems";
async function loadItems() {
  const res = await fetch("http://localhost:4016" + "/items");
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
