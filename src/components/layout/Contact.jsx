import { Mail } from "lucide-react";
import Github from "../ui/GithubIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <span className="font-mono text-xs text-emerald-600 tracking-widest uppercase">04. What's Next</span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight">
        Get In Touch
      </h2>
      <p className="text-slate-400 text-base max-w-lg mx-auto mb-10 leading-relaxed">
        I'm open to internships, freelance, or just a good conversation about Linux, game dev, or clean code. Drop me a line.
      </p>
      <a
        href="mailto:abdullahkbintahir@gmail.com"
        className="inline-flex items-center gap-3 font-mono font-medium text-emerald-400 border-2 border-emerald-500/40 hover:bg-emerald-500/10 hover:border-emerald-400 py-4 px-10 rounded-xl transition-all duration-200"
        style={{ boxShadow: "0 0 30px rgba(16,185,129,0.08)" }}
      >
        <Mail className="w-4 h-4" />
        Say Hello
      </a>

      <div className="flex justify-center gap-6 mt-12">
        <a href="https://github.com/abdullahtahir-me" target="_blank" rel="noreferrer"
          className="text-slate-600 hover:text-emerald-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="mailto:abdullahkbintahir@gmail.com"
          className="text-slate-600 hover:text-emerald-400 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}