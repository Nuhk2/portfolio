import { useState } from "react";

const HeroVisual = () => {
  const [activeTab, setActiveTab] = useState("developer.ts");

  const tabs = [
    { id: "developer.ts", name: "developer.ts", tag: "TS" },
    { id: "skills.config", name: "skills.config", tag: "CFG" },
    { id: "experience.json", name: "experience.json", tag: "JSON" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto relative group">
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700"></div>

      {/* Terminal Container */}
      <div className="relative glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-sm"></span>
            <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">najam@nuhk-dev:~</span>
          </div>

          {/* Code Tabs */}
          <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all ${
                  activeTab === tab.id
                    ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <span className="text-[10px] font-bold text-indigo-400 font-mono">{tab.tag}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[320px] bg-slate-950/90 text-slate-200">
          {activeTab === "developer.ts" && (
            <div className="space-y-2">
              <div className="text-slate-500">// Interactive portfolio workspace</div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-slate-400">=</span> &#123;
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">name</span>:{" "}
                <span className="text-emerald-300">"Najam ul Hassan"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">title</span>:{" "}
                <span className="text-emerald-300">"Software & AI Engineer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">location</span>:{" "}
                <span className="text-emerald-300">"Rawalpindi, Pakistan"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">specialization</span>: [
              </div>
              <div className="pl-8 text-amber-300">
                "AI Chatbots / RAG Architecture",<br />
                "Full Stack Web Applications",<br />
                "Scalable Microservices & APIs"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-indigo-400">status</span>:{" "}
                <span className="text-emerald-400">"Available for projects"</span>,
              </div>
              <div>&#125;;</div>
              
              <div className="pt-3 text-slate-500">
                // Run <span className="text-cyan-400">developer.getSummary()</span> to inspect
              </div>
              <div className="flex items-center space-x-2 text-indigo-300 pt-1">
                <span className="text-cyan-400">&gt;</span>
                <span className="animate-pulse">Building products with React, Node & AI...</span>
              </div>
            </div>
          )}

          {activeTab === "skills.config" && (
            <div className="space-y-3">
              <div className="text-slate-500">// Technical Stack Configuration</div>
              <div>
                <span className="text-purple-400">export const</span>{" "}
                <span className="text-cyan-300">techStack</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-amber-400">frontend</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"TypeScript"</span>],
              </div>
              <div className="pl-4">
                <span className="text-amber-400">backend</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"REST APIs"</span>],
              </div>
              <div className="pl-4">
                <span className="text-amber-400">ai_ml</span>: [<span className="text-emerald-300">"RAG Systems"</span>, <span className="text-emerald-300">"Azure OpenAI"</span>, <span className="text-emerald-300">"LLMs"</span>],
              </div>
              <div className="pl-4">
                <span className="text-amber-400">tools</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"Shopify"</span>, <span className="text-emerald-300">"Jasper Studio"</span>]
              </div>
              <div>&#125;;</div>
            </div>
          )}

          {activeTab === "experience.json" && (
            <div className="space-y-2">
              <div className="text-slate-500">// Career Milestones</div>
              <div className="text-indigo-400">[</div>
              <div className="pl-4">
                &#123; <span className="text-cyan-300">"company"</span>: <span className="text-emerald-300">"Fauji Fertilizer Company"</span>, <span className="text-indigo-300">"role"</span>: <span className="text-amber-300">"AI Engineer Intern"</span> &#125;,
              </div>
              <div className="pl-4">
                &#123; <span className="text-cyan-300">"company"</span>: <span className="text-emerald-300">"Software Flare"</span>, <span className="text-indigo-300">"role"</span>: <span className="text-amber-300">"Full Stack Dev Intern"</span> &#125;,
              </div>
              <div className="pl-4">
                &#123; <span className="text-cyan-300">"company"</span>: <span className="text-emerald-300">"X Apparel"</span>, <span className="text-indigo-300">"role"</span>: <span className="text-amber-300">"Frontend Developer"</span> &#125;,
              </div>
              <div className="pl-4">
                &#123; <span className="text-cyan-300">"company"</span>: <span className="text-emerald-300">"Fauji Foundation"</span>, <span className="text-indigo-300">"role"</span>: <span className="text-amber-300">"Software Engineer Intern"</span> &#125;
              </div>
              <div className="text-indigo-400">]</div>
            </div>
          )}
        </div>

        {/* Terminal Footer Bar */}
        <div className="px-4 py-2 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              High-performance 2D renderer
            </span>
          </div>
          <span className="text-indigo-400">UTF-8</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;

