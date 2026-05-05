import { ExternalLink } from "lucide-react";
import Github from "../ui/GithubIcon";
import SectionHeading from "../ui/SectionHeading";
import TagBadge from "../ui/TagBadge";
import { projects } from "../../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <SectionHeading number="03." title="Projects" />

      <div className="space-y-4">
        {projects.filter(p => p.featured).map((project, i) => {
          const Icon = project.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-7 md:p-10 transition-all duration-300"
              style={{
                background: "rgba(16,185,129,0.03)",
                border: "1px solid rgba(16,185,129,0.2)",
                boxShadow: "0 0 50px rgba(16,185,129,0.04)",
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg" style={{ background: "rgba(16,185,129,0.1)" }}>
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <TagBadge label={project.tag} />
                    </div>
                    <span className="font-mono text-xs text-emerald-600">Featured Project</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer"
                      className="text-slate-500 hover:text-emerald-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="text-slate-500 hover:text-emerald-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-300 mb-3 leading-relaxed max-w-2xl">{project.description}</p>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-2xl">
                <span className="text-emerald-600 mr-2 font-mono">▸</span>{project.detail}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, j) => (
                  <span key={j} className="font-mono text-xs text-slate-500">{t}</span>
                ))}
              </div>
            </div>
          );
        })}

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {projects.filter(p => !p.featured).map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    <TagBadge label={project.tag} />
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer"
                        className="text-slate-600 hover:text-emerald-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="text-slate-600 hover:text-emerald-400 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((t, j) => (
                    <span key={j} className="font-mono text-xs text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}