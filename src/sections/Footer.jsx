import { socialImgs } from "../constants";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer relative bg-slate-950/80 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Location & Info */}
        <div className="flex items-center space-x-2 text-sm text-slate-400">
          <i className="fa-solid fa-location-dot text-rose-500"></i>
          <a
            href="https://www.google.com/maps/place/Rawalpindi,+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Rawalpindi, Pakistan
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {socialImgs.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center p-2 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 group"
              aria-label={social.name}
            >
              <img src={social.imgPath} alt={social.name} className="w-5 h-5 object-contain filter group-hover:brightness-125" />
            </a>
          ))}
        </div>

        {/* Copyright & Scroll to top */}
        <div className="flex items-center space-x-4">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} nuhk.dev. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

