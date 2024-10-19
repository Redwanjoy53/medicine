import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Help } from "./help-section/Help.jsx";
import HelpBox from "./components/HelpBox.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Navbar />
        <Hero />
        <Help />
        <HelpBox />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
