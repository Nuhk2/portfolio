import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      {/* Ambient background glow */}
      <div className="bg-ambient-glow w-[400px] h-[400px] bg-purple-700/15 bottom-10 left-10"></div>

      <div className="max-w-7xl mx-auto">
        <TitleHeader
          title="What People Say About Me"
          sub="Client & Team Endorsements"
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center space-x-3 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 glass-panel">
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm opacity-95">{testimonial.name}</p>
                  <p className="text-xs font-mono opacity-70">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


