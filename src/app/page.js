import Footer from "@/constants/Footer";
import Navbar from "@/constants/Navbar";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Join from "@/sections/Join";
import Partners from "@/sections/Partners";
import Sss from "@/sections/Sss";

export default function Home() {
  return (
    <main className="md:px-10 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Sss />
      <Partners />
      <Features />
      <Join />
      <Footer />
    </main>
  );
}
