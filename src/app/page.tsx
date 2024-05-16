import Card from "@/components/Card";
import Crausal from "@/components/Crausal";
import HErosec from "@/components/HErosec";
import Herosection from "@/components/Herosection";
import Multicard from "@/components/Multicard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      {/* <Crausal/> */}
      {/* <Card/> */}
      {/* <Multicard/> */}
      <Card/>

      
    </main>
  );
}
