import "./globals.css";
import Navbar from '../components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Education from '../Components/Education';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

const page = () => {
  return (
    <>
      <main className="max-[320px]:hidden">
        <Navbar />
        <Hero/>
        <About/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </main>
      <main className="min-[320px]:hidden flex flex-col items-center justify-center w-svw min-h-svh p-4">
        <p className="text-xl font-semibold">
          Your device resolution is too small to view this page.
        </p>
        <p className="text-xl font-semibold">
          Open this page on device larger than 320px.
        </p>
      </main>
    </>
  )
}

export default page