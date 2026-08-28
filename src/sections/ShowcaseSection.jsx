import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Slider from "react-slick";
import TitleHeader from "../components/TitleHeader";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Smart Entry Test Proctor - FYP",
    img: "/images/project1.png",
    tags: ["React", "AI / Computer Vision", "Node.js", "Tailwind"],
    short: "AI-based platform for conducting secure entry tests and proctoring.",
    detailed:
      "Smart Entry Test Proctor is an AI-based system designed to detect and prevent cheating during university entry tests. It ensures secure, fair exams while handling online registration, admit card generation, digital testing, and instant result calculation.",
    git: "https://github.com/Nuhk2/Smart-Entry-Test-Proctor",
  },
  {
    title: "Guitar - Circle of Fifths",
    img: "/images/project2.png",
    tags: ["React", "Web Audio", "Music Theory", "Tailwind"],
    short: "An interactive app to explore music theory and practice chord progressions.",
    detailed:
      "Circle of Fifths Guitar helps musicians visualize scales and chord relationships. Built with React and interactive UI for smooth music practice sessions.",
    git: "https://github.com/Nuhk2/Guitar.circle-of-fifths",
    live: "https://FretFifths.vercel.app/",
  },
  {
    title: "Quetta Tea Cafe",
    img: "/images/project3.png",
    tags: ["UI/UX Design", "Brand Experience", "Web App"],
    short: "A cozy café brand website showcasing menu, gallery, and reservations.",
    detailed:
      "Quetta Tea Cafe's website highlights a warm ambiance, online ordering showcase, and brand identity with an intuitive visual layout.",
    uiDesign: "https://www.behance.net/gallery/237435805/Quetta-Caf-Website-Design-Brand-Experience",
  },
  {
    title: "Muses of Saaram",
    img: "/images/project4.png",
    tags: ["React", "Portfolio", "Tailwind CSS", "Vercel"],
    short: "An artist portfolio showcasing Photography, Visual Art, and Services.",
    detailed:
      "Muses of Saaram is a curated online portfolio designed to elegantly present an artist's body of work, featuring interactive galleries, services catalog, and direct contact options.",
    git: "https://github.com/Nuhk2/musesofSaaram-portfolioWebsite",
    live: "https://musesofsaaram.vercel.app",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next project"
    className="absolute -right-2 md:right-2 top-1/2 -translate-y-1/2 z-20 
               glass-panel border border-white/10 rounded-full 
               p-3 shadow-lg transition-all duration-300 hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous project"
    className="absolute -left-2 md:left-2 top-1/2 -translate-y-1/2 z-20 
               glass-panel border border-white/10 rounded-full 
               p-3 shadow-lg transition-all duration-300 hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useGSAP(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index) => setActiveSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const ButtonGroup = ({ gitLink, liveLink, uiDesign }) => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl glass-card border border-white/10 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center space-x-1.5"
          >
            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 flex items-center space-x-1.5"
          >
            <span>View Live</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        {uiDesign && (
          <a
            href={uiDesign}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-500 text-white text-xs sm:text-sm font-medium transition-all duration-300 flex items-center space-x-1.5"
          >
            <span>Behance UI</span>
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="work" ref={sectionRef} className="section-padding relative">
      {/* Background ambient glow */}
      <div className="bg-ambient-glow w-[400px] h-[400px] bg-indigo-700/20 top-10 left-1/4"></div>

      <div className="max-w-7xl mx-auto">
        <TitleHeader title="Featured Projects" sub="A Showcase of Recent Work" />

        <div className="mt-12 relative px-2 md:px-8">
          <Slider {...settings} className="showcaselayout">
            {projects.map((proj, index) => (
              <div key={index} className="px-3 py-6">
                <div className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between h-full group">
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden h-52 bg-slate-950/40 flex items-center justify-center border border-white/5">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Short Desc */}
                  <div className="mt-5 space-y-2 text-center">
                    <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm opacity-80 line-clamp-2">{proj.short}</p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                      {proj.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full glass-panel text-[11px] font-mono text-indigo-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <ButtonGroup gitLink={proj.git} liveLink={proj.live} uiDesign={proj.uiDesign} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Detailed active slide overview */}
        <div className="mt-12 max-w-3xl mx-auto glass-panel p-6 rounded-2xl border border-white/10 text-center space-y-2">
          <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-wider font-semibold">Project Overview</h4>
          <p className="text-sm sm:text-base leading-relaxed opacity-90">
            {projects[activeSlide].detailed}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;


