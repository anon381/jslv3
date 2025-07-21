"use client";
import React, { useRef, useEffect, useState } from "react";

interface ScrollGaspProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollGasp({ children, className = "", direction = "left" }: ScrollGaspProps & { direction?: "left" | "right" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const slideClass = direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left";

  return (
    <div
      ref={ref}
      className={
        `${className} ${visible ? slideClass : "opacity-0"}`
      }
    >
      {children}
    </div>
  );
}
