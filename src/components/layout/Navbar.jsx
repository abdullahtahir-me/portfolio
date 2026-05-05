import { useState, useEffect } from "react";
import NavLink from "../ui/NavLink";
import TerminalCursor from "../ui/TerminalCursor";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,15,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-sm text-emerald-400 flex items-center gap-1">
          <span className="text-slate-500">~/</span>
          <span className="font-bold">abdullah</span>
          <TerminalCursor />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#about">about</NavLink>
          <NavLink href="#skills">skills</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#contact">contact</NavLink>
          <a
            href="mailto:abdullahkbintahir@gmail.com"
            className="text-xs font-mono border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 px-4 py-2 rounded transition-all duration-200"
          >
            hire me
          </a>
        </div>
      </div>
    </nav>
  );
}