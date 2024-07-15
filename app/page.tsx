import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <main
      className="w-full mx-auto"
      style={{
        backgroundImage: `url('/bg-image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="space-y-6">
        <Navbar />
        <Hero />
        <Aboutus />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
