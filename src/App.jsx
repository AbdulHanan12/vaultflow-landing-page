import React from "react";
import "./App.css";
import { Navbar } from "./components/molecules/Navbar";
import { HeroSection } from "./components/organisms/HeroSection";
import { DashboardPreview } from "./components/organisms/DashboardPreview";
import { TrustedBySection } from "./components/organisms/TrustedBySection";
import { FeaturesSection } from "./components/organisms/FeaturesSection";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-figma-gradient overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <TrustedBySection />
      <FeaturesSection />
    </div>
  );
}

export default App;
