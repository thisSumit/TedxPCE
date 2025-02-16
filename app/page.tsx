import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="sm:p-20 p-8 h-[200vh] gap-8 font-[family-name:var(--font-geist-sans)]">
      <Hero />  
    </div>
  );
}
