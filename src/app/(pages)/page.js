import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import HeroFooter from "@/components/home/hero-footer";
import OnAir from "@/components/home/onair";
import Popular from "@/components/home/popular";
import BreakingNews from "@/components/home/breaking-news";

export default function Home() {
  return (
    <div className='mb-[5rem]'>
      <Navbar />
      <Hero />
      <HeroFooter />
      <OnAir />
      <Popular />
      <BreakingNews />
    </div>
  );
}
