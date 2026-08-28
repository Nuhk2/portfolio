import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="section-padding relative">
      {/* Background Glow */}
      <div className="bg-ambient-glow w-[500px] h-[500px] bg-indigo-700/15 top-1/4 left-10"></div>

      <div className="max-w-6xl mx-auto">
        <TitleHeader
          title="Professional Experience"
          sub="Career Milestones & Roles"
        />

        <div className="mt-16 relative">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500 transform sm:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            {expCards.map((card, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`timeline-item relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full glass-panel border-2 border-cyan-500 flex items-center justify-center shadow-md z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  </div>

                  {/* Card Content (Occupies half width on sm+) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
                      {/* Header info */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl glass-panel p-2 flex items-center justify-center shrink-0 border border-white/10">
                          <img
                            src={card.logoPath || card.imgPath}
                            alt={card.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-indigo-500 text-sm font-semibold">{card.company}</p>
                          <p className="text-xs font-mono opacity-70 mt-1 flex items-center space-x-1">
                            <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{card.date}</span>
                          </p>
                        </div>
                      </div>

                      {/* Review / Highlights */}
                      {card.review && (
                        <p className="text-xs sm:text-sm italic glass-panel p-3.5 rounded-xl border border-white/5 mb-4 opacity-90">
                          "{card.review}"
                        </p>
                      )}

                      {/* Responsibilities */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-wider font-semibold">
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {card.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start text-xs sm:text-sm opacity-85">
                              <span className="text-indigo-500 font-bold mr-2 mt-0.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


