import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import HeroFooter from "@/components/home/hero-footer";

export default function Home() {
  return (
    <div className='bg-[#0C1821]'>
      <Navbar />
      <Hero />
      <HeroFooter />
    </div>
  );
}
