import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";

export default function App() {
  return (
    <div
      className="min-h-screen text-slate-300 selection:bg-emerald-500/25 selection:text-emerald-200"
      style={{ background: "#0a0f1a", fontFamily: "'JetBrains Mono', 'Fira Code', monospace, sans-serif" }}
    >
      {/* Background patterns */}
      <div
        style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "fixed", top: "10%", left: "60%", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 border-t py-8 text-center" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <p className="font-mono text-xs text-slate-600">
          Designed & built by <span className="text-slate-500">Abdullah</span>
          <span className="text-slate-700 mx-2">·</span>
          React · Tailwind
        </p>
      </footer>
    </div>
  );
}