const Button = ({ text, className, id }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("work") || document.getElementById("counter");
        if (target) {
          const offset = window.innerHeight * 0.12;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 ${className || ""}`}
    >
      <span>{text}</span>
      <svg className="w-4 h-4 text-cyan-200 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
};

export default Button;

