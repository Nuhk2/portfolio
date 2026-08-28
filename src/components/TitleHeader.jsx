const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      {sub && (
        <div className="px-4 py-1.5 rounded-full glass-panel text-indigo-500 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono shadow-sm">
          {sub}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight opacity-95">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2"></div>
    </div>
  );
};

export default TitleHeader;


