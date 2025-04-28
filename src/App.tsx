import { siteConfig } from "@/config/site.config";
import { ArrowRight } from "lucide-react";
import { TeamDrawer } from "@/components/team-drawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalMarketing from "./pages/digitalmarketing";

function Home() {
  return (
    <main className="app px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8 items-center min-h-[calc(100vh-4rem)]">
        {/* Left Column - Title */}
        <div className="w-full md:w-1/2 flex">
          <h1 className="head-text text-center text-4xl md:text-6xl">
            <span className="purple-gradient">TekNok</span>{" "}
            <span className="blue-gradient">Services</span>
          </h1>
        </div>

        {/* Vertical Divider - Visible only on desktop */}
        <div className="hidden md:block w-px h-[400px] bg-border mx-4 self-center"></div>

        {/* Right Column - Cards */}
        <div className="w-full md:w-1/2 flex">
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card 
              title="Twitter" 
              description="Give me a follow on twitter." 
              url={siteConfig.links.twitter} 
            />
            <Card 
              title="Digital Marketing" 
              description="Explore our digital marketing services." 
              url={siteConfig.links.digitalMarketing} 
            />
          </div>
        </div>
      </div>
      <TeamDrawer />
    </main>
  );
}

const Card = ({ title, description, url }: { title: string, description: string, url: string }) => {
  return (
    <a href={url} target="_blank" className="group w-full h-full hover:bg-accent/30 transition-all duration-75 rounded-lg border p-4 md:p-3">
      <div className="flex items-center w-full gap-2">
        <h1 className="text-xl md:text-2xl">{title}</h1>
        <ArrowRight size={20} className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200" />
      </div>
      <p className="mt-4 md:mt-6 max-w-sm text-sm md:text-base">{description}</p>
    </a>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
      </Routes>
    </Router>
  );
}