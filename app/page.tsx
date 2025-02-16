import { Bento } from "@/components/Bento";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <div className="sm:p-20 p-4 h-full gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero /> 
      <Schedule /> 
      <Bento />
    </div>
  );
}
