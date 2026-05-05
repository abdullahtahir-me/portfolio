export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative text-sm font-mono text-slate-400 hover:text-white transition-colors duration-200 group"
    >
      <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">&gt; </span>
      {children}
    </a>
  );
}