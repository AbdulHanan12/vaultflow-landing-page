import React from "react";
import dashboardImg from "../../assets/dashboard-preview.jpg"; // Place your image in src/assets/

export const DashboardPreview = () => {
  return (
    <div className="flex justify-center w-full relative mt-8 mb-4">
      {/* Larger, softer purple glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[420px] rounded-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(120,60,255,0.22) 0%, rgba(80,0,180,0.13) 60%, transparent 100%)",
          filter: "blur(64px)",
        }}
      />
      <img
        src={dashboardImg}
        alt="Dashboard Preview"
        className="relative rounded-2xl shadow-2xl max-w-full w-[900px] border border-white/10 bg-black/60 z-10"
        style={{ boxShadow: "0 8px 40px 0 rgba(80, 0, 180, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.18)" }}
      />
    </div>
  );
}; 