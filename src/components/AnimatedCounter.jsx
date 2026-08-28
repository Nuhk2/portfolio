import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 80%",
        },
        onComplete: () => {
          if (numberElement) {
            numberElement.textContent = `${item.value}${item.suffix}`;
          }
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (countersRef.current[index] = el)}
            className="glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group"
          >
            <div className="counter-number text-3xl sm:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 mb-2 group-hover:scale-105 transition-transform duration-300">
              0 {item.suffix}
            </div>
            <div className="text-xs sm:text-sm font-medium opacity-85">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;


