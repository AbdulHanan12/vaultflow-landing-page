import React, { useState } from "react";
import { Button } from "../atoms/Button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "../atoms/Dialog";
import { LearnerSelect } from "../atoms/LearnerSelect";
import { ChevronLeft } from "lucide-react";
import { NotificationSelect } from "../atoms/NotificationSelect";

export const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [step, setStep] = useState(1);
  const [notification, setNotification] = useState("1 Month");

  // Notification options
  const notificationOptions = [
    "Immediately",
    "1 Day",
    "1 Week",
    "1 Month",
    "Never"
  ];

  // Reset modal state on close
  const handleOpenChange = (v) => {
    setOpen(v);
    if (!v) {
      setStep(1);
      setSelectedLearner(null);
      setNotification("1 Month");
    }
  };

  return (
    <section className="bg-hero-gradient flex flex-col items-center justify-center text-center pt-32 pb-10 px-4 relative z-10">
      {/* Announcement Banner */}
      <div className="mb-8">
        <a href="#" className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2 text-white text-sm font-medium shadow hover:bg-white/20 transition">
          We just raised $20M in Series B. Learn more
        </a>
      </div>
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-lg font-['Montserrat'] font-normal tracking-[-0.03em] text-center bg-gradient-to-br from-[#ECECEC] from-[20.35%] to-transparent to-[128.73%] bg-clip-text text-transparent">
        Modern analytics<br />for the modern world
      </h1>
      {/* Subheadline */}
      <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
      {/* Button Group */}
      <div className="flex gap-4 justify-center">
        <Button variant="default" className="rounded-full px-8 py-3 text-base font-semibold" onClick={() => setOpen(true)}>
          Assign Journey
        </Button>
        <Button variant="outline" className="rounded-full px-8 py-3 text-base font-semibold border-white text-white">View Report</Button>
      </div>
      {/* Multi-step Modal */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          {step === 1 && (
            <>
              <DialogHeader>
                <DialogTitle asChild>
                  <h2 className="text-2xl font-normal text-gray-900 mb-2">Assign Learning Journey</h2>
                </DialogTitle>
                {/* Stepper */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                  <span className="w-12 h-1 rounded-full bg-gray-200 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
                </div>
              </DialogHeader>
              <div className="mb-6">
                <div className="text-left">
                  <label className="block font-semibold text-gray-900 mb-2">Please select learners or learner groups to assign this journey:</label>
                  <LearnerSelect value={selectedLearner} onChange={setSelectedLearner} />
                  <p className="text-gray-400 text-sm mb-2">
                    Assigning courses will use up to one seat depending on your subscription plan. The seat will be refunded if the learner has not started and you later decide to unassign it. Language selection will be offered to the learner at the beginning of course.
                  </p>
                </div>
              </div>
              <DialogFooter>
                <button
                  className="w-[220px] mx-auto block rounded-md py-3 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={!selectedLearner}
                  onClick={() => setStep(2)}
                >
                  Assign
                </button>
                <div className="mt-6 text-xs text-gray-400 text-center">
                  Or use <a href="#" className="text-purple-500 underline">learner's tab</a> to assign custom groups of learners.<br />
                  Use <a href="#" className="text-purple-500 underline">automations</a> to make auto-assign rules.
                </div>
              </DialogFooter>
            </>
          )}
          {step === 2 && (
            <>
              {/* Back Arrow */}
              <button
                className="absolute top-6 left-6 text-black hover:bg-gray-100 rounded-full p-1"
                onClick={() => setStep(1)}
                aria-label="Back"
                type="button"
              >
                <ChevronLeft size={28} />
              </button>
              <DialogHeader>
                <DialogTitle asChild>
                  <h2 className="text-2xl font-normal text-gray-900 mb-2">Notification Preferences</h2>
                </DialogTitle>
                {/* Stepper */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                  <span className="w-12 h-1 rounded-full bg-purple-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                </div>
              </DialogHeader>
              <div className="mb-6">
                <div className="flex items-center border-b border-gray-200 pb-6">
                  <div className="text-left w-1/2">
                    <div className="font-semibold text-black mb-1 text-sm">Notifications</div>
                    <div className="text-gray-400 text-xs max-w-xs">When to notify learners via email, Slack or text (when enabled)</div>
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <NotificationSelect
                      value={notification}
                      onValueChange={setNotification}
                      options={notificationOptions}
                    />
                  </div>
                </div>
                <div className="text-right font-semibold text-sm mt-8 mb-2">34 training are going to be assigned</div>
              </div>
              <DialogFooter>
                <button
                  className="w-[220px] mx-auto block rounded-md py-3 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setStep(3)}
                >
                  Assign
                </button>
              </DialogFooter>
            </>
          )}
          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-10 px-6 w-full">
              <DialogTitle asChild>
                <h2 className="text-3xl md:text-4xl font-normal text-center leading-tight font-serif mb-8">Learning Journey Is<br />Assigned</h2>
              </DialogTitle>
              {/* Illustration (replace with your asset if available) */}
              <div className="my-8 flex items-center justify-center">
                <div className="w-[220px] h-[220px] rounded-full bg-[#FF9800] flex items-center justify-center">
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="80" cy="100" rx="60" ry="60" fill="black" />
                    <ellipse cx="80" cy="80" rx="50" ry="50" fill="white" />
                    <ellipse cx="80" cy="100" rx="40" ry="40" fill="black" />
                    <path d="M80 20 L100 70 L60 70 Z" fill="#C6FF00" stroke="black" strokeWidth="4" />
                    <ellipse cx="80" cy="130" rx="30" ry="10" fill="#A259FF" />
                    <rect x="60" y="120" width="40" height="20" rx="10" fill="#A259FF" />
                    <ellipse cx="80" cy="140" rx="10" ry="5" fill="white" />
                  </svg>
                </div>
              </div>
              <button
                className="w-full max-w-[340px] rounded-xl py-4 text-lg font-semibold bg-[#A259FF] hover:bg-purple-700 text-white mb-4 shadow"
                onClick={() => {
                  setStep(1);
                  setSelectedLearner(null);
                  setNotification("1 Month");
                }}
              >
                Setup Another Journey
              </button>
              <button
                className="w-full max-w-[340px] rounded-xl py-4 text-lg font-semibold border-2 border-[#A259FF] text-[#A259FF] bg-white hover:bg-purple-50"
                onClick={() => setOpen(false)}
              >
                Go to my Journeys
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}; 