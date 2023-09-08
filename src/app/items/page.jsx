import SearchItems from "../components/SearchItems";

async function loadItems(){
  const res = await fetch('http://localhost:4011/items')
  const data = await res.json()
 return data
}

export default async function SetsPage() {
  const items = await loadItems()
  return (
    <section className="">
      <SearchItems items={items} />
    </section>
  );
}
