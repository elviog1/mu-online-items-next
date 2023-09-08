import Banner from "./components/Banner";
import Champion from "./components/Champion";
import History from "./components/History";
import Platform from "./components/Platform";

export default function Home() {
  return (
    <main className="bg-slate-950 font-serif">
      <Banner />
      <History />
      <Champion />
      <Platform />
    </main>
  );
}
