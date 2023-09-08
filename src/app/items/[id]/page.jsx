import SetItems from "@/app/components/SetItems";
import UpgradeItem from "@/app/components/UpgradeItem";

async function loadItem(id) {
  const res = await fetch(`http://localhost:4011/items/${id}`);
  const data = await res.json();
  return data;
}

async function loadSetItem() {
  const res = await fetch(`http://localhost:4011/items/`);
  const data = await res.json();
  return data;
}

export default async function ItemPage({ params }) {
  //objeto de un item {item}
  const item = await loadItem(params.id);
  //nombre del set
  const setName = item.set;
  // todos los items
  const allItems = await loadSetItem();
  //set completo de SETNAME
  const allSetByItem = allItems.filter((item) => item.set === setName);

  return (
    <div className="bg-gradient-to-b from-slate-800  to-slate-950 pt-20">
      <div className="container mx-auto ">
        <h1 className="text-center py-5 text-3xl font-bold text-slate-300">Set {setName}</h1>
        <div className="flex justify-around">
          {allSetByItem.map((set) => (
            <SetItems key={set.name} item={set} />
          ))}
        </div>
        <UpgradeItem item={item} />
      </div>
    </div>
  );
}
