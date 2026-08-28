import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="max-w-7xl mx-auto px-5 md:px-10 mt-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {abilities.map(({ imgPath, title, desc }, index) => (
        <div
          key={index}
          className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-all duration-300 group"
        >
          <div className="w-14 h-14 rounded-2xl glass-panel border border-white/10 flex items-center justify-center p-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <img src={imgPath} alt={title} className="w-full h-full object-contain" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors">
              {title}
            </h3>
            <p className="text-sm leading-relaxed opacity-80">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
