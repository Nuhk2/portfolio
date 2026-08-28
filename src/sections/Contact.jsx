import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Ambient background glow */}
      <div className="bg-ambient-glow w-[500px] h-[500px] bg-indigo-600/20 top-1/4 right-10"></div>

      <div className="max-w-7xl mx-auto">
        <TitleHeader
          title="Get in Touch"
          sub="Have Questions or Project Ideas? Let's Talk!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-sm opacity-75 mb-6">
                Fill out the form below or email me directly at{" "}
                <a href="mailto:contact@nuhk.dev" className="text-indigo-500 font-mono hover:underline font-medium">
                  contact@nuhk.dev
                </a>
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 light:text-emerald-700 text-sm font-medium flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully! I will get back to you soon.</span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or role..."
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Portrait & Contact Badges Side */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-panel shadow-2xl">
                <img
                  src="/images/selfportrait (1).png"
                  alt="Najam ul Hassan"
                  className="w-full h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent text-white">
                  <h4 className="text-xl font-bold">Najam ul Hassan</h4>
                  <p className="text-cyan-400 text-sm font-medium">Software & AI Engineer</p>
                  <p className="text-slate-300 text-xs mt-1 flex items-center space-x-1">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Rawalpindi, Pakistan</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="glass-card p-4 rounded-2xl text-center border border-white/10">
                <p className="text-indigo-500 text-xs font-mono font-semibold">RESPONSE TIME</p>
                <p className="font-bold text-sm mt-1">&lt; 24 Hours</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center border border-white/10">
                <p className="text-emerald-500 text-xs font-mono font-semibold">AVAILABILITY</p>
                <p className="font-bold text-sm mt-1">Open for Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


