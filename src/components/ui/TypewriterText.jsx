import { useState, useEffect } from "react";
import TerminalCursor from "./TerminalCursor";

export default function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  
  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 40);
    return () => clearTimeout(t);
  }, [started, displayed, text]);
  
  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && <TerminalCursor />}
    </span>
  );
}