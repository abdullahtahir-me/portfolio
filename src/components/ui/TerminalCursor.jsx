import { useState, useEffect } from "react";

export default function TerminalCursor() {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const t = setInterval(() => setVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);
  
  return (
    <span 
      className={`inline-block w-2 h-4 bg-emerald-400 ml-0.5 align-middle transition-opacity ${visible ? "opacity-100" : "opacity-0"}`} 
    />
  );
}