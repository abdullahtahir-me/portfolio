import SectionHeading from "../ui/SectionHeading";
import TerminalCursor from "../ui/TerminalCursor";

export default function About() {
  return (
    <section id="about" className="py-28">
      <SectionHeading number="01." title="About Me" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "#050810",
            border: "1px solid rgba(16,185,129,0.15)",
            boxShadow: "0 0 40px rgba(16,185,129,0.05)",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}>
            <div className="w-3 h-3 rounded-full bg-rose-500/70" />
            <div className="w-3 h-3 rounded-full bg-amber-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-slate-600 font-mono">about.sh</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-5">
            <div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-emerald-500">❯</span>
                <span className="text-slate-500">cat</span>
                <span className="text-sky-400 ml-1">student.json</span>
              </div>
              <div className="pl-4 border-l border-slate-800 space-y-1 text-slate-400 text-xs leading-loose">
                <div><span className="text-violet-400">"university"</span>: <span className="text-emerald-300">"PIEAS, Islamabad"</span></div>
                <div><span className="text-violet-400">"degree"</span>: <span className="text-emerald-300">"Computer Science"</span></div>
                <div><span className="text-violet-400">"os"</span>: <span className="text-emerald-300">"Fedora Linux"</span></div>
                <div><span className="text-violet-400">"machine"</span>: <span className="text-emerald-300">"ThinkPad"</span></div>
                <div><span className="text-violet-400">"open_to"</span>: <span className="text-emerald-300">"internships, freelance"</span></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-emerald-500">❯</span>
                <span className="text-slate-500">echo</span>
                <span className="text-sky-400 ml-1">$INTERESTS</span>
              </div>
              <p className="pl-4 border-l border-slate-800 text-slate-400 text-xs leading-loose">
                web systems · game physics · linux ricing · clean SQL schemas · low-level C
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-emerald-500">❯</span>
              <TerminalCursor />
            </div>
          </div>
        </div>

        <div className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
          <p>
            I'm a CS student at <span className="text-white">PIEAS in Islamabad</span>, building things at both ends of the stack — modern web frameworks one week, collision physics in C the next.
          </p>
          <p>
            My development work spans <span className="text-emerald-400">Next.js</span> and <span className="text-emerald-400">Supabase</span> on the high-level side, and game engines using <span className="text-violet-400">libGDX</span> and <span className="text-violet-400">Raylib</span> on the low-level side. I like problems where you have to think carefully about data integrity, state, and performance.
          </p>
          <p>
            When I'm not writing SQL schemas or debugging collision detection, I'm tinkering with my Fedora setup on a ThinkPad. I believe good software is boring in the best way — no surprises, no magic, just logic you can trace.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {["Full-Stack Dev", "Game Dev", "Linux User", "Open to Work"].map(tag => (
              <span key={tag} className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}