import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <div className="sm:p-20 p-8 h-[200vh] gap-8 font-[family-name:var(--font-geist-sans)]">
      <Hero /> 
      <Schedule /> 
    </div>
  );
}
