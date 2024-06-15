import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Footer from "./(components)/Footer";
import Hero from "./(components)/Hero";
import NavBar from "./(components)/NavBar";
import Projects from "./(components)/Projects";

export default function Home() {
  return (
    <div className="bg-slate-900 w-full h-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
