import React, { useState } from "react";
import { Button } from "../atoms/Button";
import { Menu, ChevronDown, X } from "lucide-react";
import logo from "../../assets/logos/logo.png";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-gradient-to-r from-[#18122B] via-[#1a003a] to-[#18122B]">
      <div className="flex items-center justify-between py-4 px-4 md:px-12 gap-2 md:gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Vaultflow" className="h-8 w-auto" />
        </div>
        {/* Nav Links (desktop) - right aligned */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-white/90 hover:text-white transition">Features</a>
          <a href="#" className="text-white/90 hover:text-white transition">Pricing</a>
          <a href="#" className="text-white/90 hover:text-white transition">Blog</a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-white/90 hover:text-white transition">
              About us <ChevronDown size={16} />
            </button>
          </div>
        </nav>
        {/* Buttons (desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <Button variant="outline" className="rounded-full px-6 py-2 border-white text-white text-base font-medium">Talk to an expert</Button>
          <Button variant="default" className="rounded-full px-6 py-2 bg-white text-black text-base font-medium">Download the app</Button>
        </div>
        {/* Mobile menu icon */}
        <button className="md:hidden text-white" onClick={() => setDrawerOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-30 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
          {/* Drawer */}
          <div className="ml-auto w-64 h-full bg-[#1a003a] shadow-lg p-6 flex flex-col gap-6 animate-slide-in">
            <button className="self-end mb-2 text-white" onClick={() => setDrawerOpen(false)}>
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-white/90 hover:text-white transition text-lg">Features</a>
              <a href="#" className="text-white/90 hover:text-white transition text-lg">Pricing</a>
              <a href="#" className="text-white/90 hover:text-white transition text-lg">Blog</a>
              <button className="flex items-center gap-1 text-white/90 hover:text-white transition text-lg">
                About us <ChevronDown size={16} />
              </button>
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="outline" className="rounded-full w-full border-white text-white">Talk to an expert</Button>
              <Button variant="default" className="rounded-full w-full bg-white text-black">Download the app</Button>
            </div>
          </div>
        </div>
      )}
      {/* Drawer animation */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
}; 