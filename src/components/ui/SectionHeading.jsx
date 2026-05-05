export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-emerald-500 text-sm tracking-wider">{number}</span>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-linear-to-r from-slate-700/80 to-transparent" />
    </div>
  );
}