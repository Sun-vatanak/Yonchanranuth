import { PortfolioNav } from "./components/PortfolioNav";
import { PortfolioHero } from "./components/PortfolioHero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { PortfolioFooter } from "./components/PortfolioFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <PortfolioNav />
      <PortfolioHero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <PortfolioFooter />
    </div>
  );
}
