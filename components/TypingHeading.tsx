"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    // Skip the animation for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
  <h1 className={`relative ${className}`} aria-label={text}>
    {/* Hidden placeholder: reserves the final width, never visible */}
    <span
      aria-hidden="true"
      className="whitespace-pre"
      style={{ visibility: "hidden" }}
    >
      {text}
    </span>

    {/* Visible typed text, centered, so it re-centers as it grows */}
    <span
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center whitespace-pre"
    >
      {text.slice(0, count)}
    </span>
  </h1>
);
}