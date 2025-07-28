import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Slider from "react-slick";
import Button from "../components/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "On-Demand Rides Made Simple with Ryde",
    img: "/images/project1.png",
    bg: "",
    short:
      "React Native + Expo + TailwindCSS for a fast and clean user experience.",
    detailed:
      "Ryde makes urban transport seamless with real-time tracking, easy payments, and a sleek UI. Developed with cross-platform compatibility for iOS and Android.",
    git: "https://github.com/ryde-app",
    live: "https://ryde-app.com",
  },
   {
  title: "ANOTHER Project",
    img: "/images/project1.png",
    bg: "",
    short:
      "React Native + Expo + TailwindCSS for a fast and clean user experience.",
    detailed:
      "Ryde makes urban transport seamless with real-time tracking, easy payments, and a sleek UI. Developed with cross-platform compatibility for iOS and Android.",
    git: "https://github.com/ryde-app",
    live: "https://ryde-app.com",
  },
  {
    title: "The Library Management Platform",
    img: "/images/project2.png",
    bg: "bg-[#FFEFDB]",
    short:
      "A smart platform to manage books, borrowing and library operations.",
    detailed:
      "This system digitalizes traditional libraries, helping librarians manage resources and members efficiently. Includes dashboards, analytics, and notifications.",
    git: "https://github.com/library-platform",
    live: "https://library-platform.com",
  },
  {
    title: "YC Directory - A Startup Showcase App",
    img: "/images/project3.png",
    bg: "bg-[#FFE7EB]",
    short: "Browse startups easily with a clean and intuitive UI.",
    detailed:
      "YC Directory curates top startups with details, funding info, and categories. Built with modern tech and designed for speed and simplicity.",
    git: "https://github.com/yc-directory",
    live: "https://yc-directory.com",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
               bg-white/10 hover:bg-white/30 text-white rounded-full 
               p-3 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
               bg-white/10 hover:bg-white/30 text-white rounded-full 
               p-3 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [animatingSlide, setAnimatingSlide] = useState(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // ensures exact centering
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "-35px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "gray",
          opacity: 0.6,
        }}
      />
    ),
    beforeChange: (current, next) => setAnimatingSlide(next),
    afterChange: (index) => {
      setActiveSlide(index);
      setAnimatingSlide(null);
    },
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

  const ButtonGroup = ({ gitLink, liveLink }) => (
    <div className="button-group mt-4 flex justify-center gap-4">
      <a href={gitLink} target="_blank" rel="noopener noreferrer"
         className="px-5 py-2 rounded-xl bg-gray-800 text-gray-200 font-small 
              transition-all duration-500 
             hover:text-black  
             hover:bg-white ">
        Git
      </a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer"
         className="px-5 py-2 rounded-xl bg-gray-800 text-gray-200 font-small 
              transition-all duration-500 
             hover:text-black  
             hover:bg-white ">
        View Live
      </a>
    </div>
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase pt-12 pb-1 ">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Our Projects</h1>

        <Slider {...settings} className="showcaselayout">
          {projects.map((proj, index) => {
  const isFading = animatingSlide === index;
  return (
    <div key={index} className="px-4 pt-4 pb-16">
      <div className={`image-wrapper rounded-lg overflow-hidden h-72 ${proj.bg}`}>
        <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
      </div>
      <div
        className={`text-content mt-4 text-center transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-2xl font-semibold text-white">{proj.title}</h2>
        <p className="text-gray-300 md:text-lg mt-2">{proj.short}</p>
        
        <ButtonGroup gitLink={proj.git} liveLink={proj.live} />
      </div>
    </div>
  );
})}

        </Slider>
        <div className="mt-10 text-center max-w-2xl mx-auto">
  <p className="text-gray-400 text-sm leading-relaxed transition-opacity duration-500">
    {projects[activeSlide].detailed}
  </p>
</div>

      </div>

      <style jsx global>{`
        .showcaselayout .slick-slide {
          opacity: 0.4;
          transform: scale(0.8);
          transition: all 0.5s ease;
        }
        .showcaselayout .slick-center {
          opacity: 1 !important;
          transform: scale(1.1);
         
        }
        .showcaselayout .slick-dots li.slick-active div {
          background-color: white !important;
          opacity: 1 !important;
        }
        .showcaselayout .slick-dots li {
          margin: 0 6px;
        }
      `}</style>
    </div>
  );
};

export default AppShowcase;
