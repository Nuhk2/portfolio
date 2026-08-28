import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroVisual from "../components/HeroVisual";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-12 md:py-36">
      {/* Ambient Glow */}
      <div className="bg-ambient-glow w-[500px] h-[500px] bg-indigo-600 -top-40 -left-40"></div>
      <div className="bg-ambient-glow w-[400px] h-[400px] bg-cyan-500 top-1/2 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Status Badge */}
            <div className="hero-anim flex items-center space-x-2 w-fit px-4 py-1.5 rounded-full glass-panel border border-white/10 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono">Available for Full Stack & AI Projects</span>
            </div>

            {/* Headline */}
            <div className="hero-anim space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Shaping <span className="gradient-text">Ideas & Code</span>
              </h1>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold opacity-85">
                into High-Performance Digital Products
              </h2>
            </div>

            {/* Description */}
            <p className="hero-anim text-base sm:text-lg max-w-2xl leading-relaxed opacity-80">
              Hi, I’m <strong className="font-semibold opacity-100">Najam ul Hassan</strong> — a Software & AI Engineer specializing in building modern web applications, intelligent AI chatbots, and scalable backend solutions.
            </p>

            {/* CTAs */}
            <div className="hero-anim flex flex-wrap gap-4 pt-2">
              <Button
                text="Explore My Work"
                className="w-full sm:w-auto"
                id="counter"
              />
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="hero-anim pt-4 flex flex-wrap items-center gap-2 text-xs font-mono opacity-80">
              <span className="font-semibold text-slate-500 uppercase mr-1">Stack:</span>
              <span className="px-2.5 py-1 rounded-md glass-card font-mono text-indigo-500">React</span>
              <span className="px-2.5 py-1 rounded-md glass-card font-mono text-cyan-500">Node.js</span>
              <span className="px-2.5 py-1 rounded-md glass-card font-mono text-purple-500">Python / AI</span>
              <span className="px-2.5 py-1 rounded-md glass-card font-mono text-emerald-500">Tailwind</span>
            </div>
          </div>

          {/* RIGHT: 2D Code Window Visual */}
          <div className="lg:col-span-5 hero-anim">
            <HeroVisual />
          </div>
        </div>

        {/* Counter Items Section */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <AnimatedCounter />
        </div>
      </div>
    </section>
  );
};

export default Hero;


