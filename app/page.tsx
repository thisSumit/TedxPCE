import { Bento } from "@/components/Bento";
import FollowUsBanner from "@/components/FollowUsBanner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import SpeakerCarousel from "@/components/Speaker-carousel";

export default function Home() {
  return (
    <div className="sm:p-20 h-full gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero /> 
      <SpeakerCarousel />
      <Schedule /> 
      <Bento />
      <FollowUsBanner />
      <br />
      <Footer />
    </div>
  );
}
