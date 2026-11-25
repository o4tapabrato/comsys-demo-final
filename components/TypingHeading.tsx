"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
  className?: string;
  speed?: number;      // ms per letter
  startDelay?: number; // ms before the first letter
};

export default function TypingHeading({
  text,
  className = "",
  speed = 150,
  startDelay = 300,
}: Props) {
  const [count, setCount] = useState(0);
  const [runId, setRunId] = useState(0);
  const pathname = usePathname();

  // Replay whenever the navbar logo asks for it
  useEffect(() => {
    const replay = () => setRunId((r) => r + 1);
    window.addEventListener("replay-typing", replay);
    return () => window.removeEventListener("replay-typing", replay);
  }, []);

  // Runs on mount, on every replay, and when the route changes
  useEffect(() => {
    setCount(0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay, runId, pathname]);

  return (
    <h1 className={`relative ${className}`} aria-label={text}>
      <span
        aria-hidden="true"
        className="whitespace-pre"
        style={{ visibility: "hidden" }}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center whitespace-pre"
      >
        {text.slice(0, count)}
      </span>
    </h1>
  );
}