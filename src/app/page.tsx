import { CallToAction } from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
