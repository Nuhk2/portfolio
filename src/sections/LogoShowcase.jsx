import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center w-28 sm:w-36 h-16 px-4 glass-card rounded-xl border border-white/5 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <img src={icon.imgPath} alt="Company logo" className="max-h-8 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="my-16 relative max-w-7xl mx-auto overflow-hidden">
    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

    <div className="marquee h-20 flex items-center">
      <div className="marquee-box flex items-center gap-8">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`dup-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;

