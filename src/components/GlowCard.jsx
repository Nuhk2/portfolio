import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    cardRef.current.style.setProperty("--start", `${angle + 60}`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 mb-6 break-inside-avoid flex flex-col justify-between space-y-4 group"
    >
      {/* Rating Stars */}
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-amber-400 text-sm">★</span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-300 text-sm leading-relaxed italic">
        "{card.review}"
      </p>

      {/* Client Avatar / Children Footer */}
      {children}
    </div>
  );
};

export default GlowCard;

