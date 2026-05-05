import SectionHeading from "../ui/SectionHeading";
import { skills } from "../../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <SectionHeading number="02." title="Tech Stack" />

      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((group, i) => {
          const Icon = group.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-6 group transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(16,185,129,0.25)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg" style={{ background: "rgba(16,185,129,0.1)" }}>
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white text-sm tracking-wide">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-mono text-xs text-slate-400 px-2.5 py-1 rounded"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}