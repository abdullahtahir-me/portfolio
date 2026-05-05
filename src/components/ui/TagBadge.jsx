import { TAG_COLORS } from "../../data/portfolioData";

export default function TagBadge({ label }) {
  const color = TAG_COLORS[label] || "slate";
  const styles = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    slate: "bg-slate-700/30 text-slate-400 border-slate-700",
  };
  
  return (
    <span className={`text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded border ${styles[color]}`}>
      {label}
    </span>
  );
}