import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    description: "Building intelligent RAG pipelines, LLM integrations & Azure OpenAI solutions.",
    iconType: "ai",
    skills: ["Azure OpenAI", "RAG Systems", "LLM Integration", "Python"],
  },
  {
    category: "Frontend Development",
    description: "Crafting modern, responsive & interactive web applications.",
    iconType: "code",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend & Systems",
    description: "Developing robust APIs, authentication systems & data pipelines.",
    iconType: "server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Database Design"],
  },
  {
    category: "UI/UX & Platform Tools",
    description: "Designing user-centric interfaces and managing web platforms.",
    iconType: "design",
    skills: ["Figma Design", "Shopify", "WordPress", "Git / GitHub"],
  },
];

const renderIcon = (type) => {
  switch (type) {
    case "ai":
      return (
        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "server":
      return (
        <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
  }
};

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        },
      }
    );
  });

  return (
    <section id="skills" className="section-padding relative">
      {/* Ambient background glow */}
      <div className="bg-ambient-glow w-[450px] h-[450px] bg-cyan-600/15 top-1/3 right-10"></div>

      <div className="max-w-7xl mx-auto">
        <TitleHeader
          title="Skills & Technical Expertise"
          sub="Core Engineering Capabilities"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="skill-card glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl glass-panel border border-white/10 shadow-sm shrink-0">
                    {renderIcon(cat.iconType)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-75 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl glass-panel border text-xs sm:text-sm font-mono text-indigo-500 font-medium group-hover:border-indigo-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icon Logo Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-xs font-mono opacity-60 uppercase tracking-widest mb-6">
            Core Competencies & Technologies
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStackImgs.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 flex items-center justify-center space-x-3 border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <img src={item.imgPath} alt={item.name} className="w-7 h-7 object-contain" />
                <span className="text-xs font-semibold opacity-90">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
