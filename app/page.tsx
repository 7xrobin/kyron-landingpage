import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="relative">
        <Nav />
        <Hero />
      </div>
    </main>
  );
}
