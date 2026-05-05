import { Mail } from "lucide-react";
import Github from "../ui/GithubIcon";
import TypewriterText from "../ui/TypewriterText";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="mb-2 font-mono text-xs text-slate-500 tracking-widest uppercase">
        <TypewriterText text="$ whoami" delay={200} />
      </div>
      <div className="mt-6 mb-2 font-mono text-emerald-400 text-base tracking-wide">
        Hi, I'm
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-none mb-4"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        Abdullah
      </h1>
      <div className="h-px w-24 bg-emerald-500 mb-8" />
      <h2 className="text-xl md:text-2xl font-normal text-slate-400 max-w-2xl mb-6 leading-relaxed">
        CS student at <span className="text-white font-medium">PIEAS</span> · I build
        <span className="text-emerald-400"> full-stack web apps</span> and
        <span className="text-violet-400"> physics-based games</span>.
      </h2>
      <p className="text-slate-500 text-sm max-w-xl mb-10 leading-loose">
        I care about clean architecture and writing code that actually makes sense six months later.
        From PostgreSQL transactions to destructible terrain — I love diving deep.
      </p>

      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href="#projects"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-sm py-3 px-6 rounded-lg transition-all duration-200"
          style={{ boxShadow: "0 0 24px rgba(16,185,129,0.25)" }}
        >
          View Projects <span className="text-lg">→</span>
        </a>
        <a
          href="https://github.com/abdullahtahir-me"
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm py-3 px-6 rounded-lg transition-all duration-200"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>

      <div className="flex items-center gap-5">
        <a href="https://github.com/abdullahtahir-me" target="_blank" rel="noreferrer"
          className="text-slate-500 hover:text-emerald-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="mailto:abdullahkbintahir@gmail.com"
          className="text-slate-500 hover:text-emerald-400 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <div className="h-4 w-px bg-slate-700" />
        <span className="font-mono text-xs text-slate-600">abdullahkbintahir@gmail.com</span>
      </div>

      <div className="absolute bottom-10 left-6 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-16 bg-linear-to-b from-transparent to-emerald-500" />
        <span className="font-mono text-[10px] text-emerald-500 rotate-90 tracking-widest mt-2">scroll</span>
      </div>
    </section>
  );
}