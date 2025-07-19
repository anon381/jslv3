"use client";
import React, { useRef, useEffect, useState } from "react";

interface ScrollGaspProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollGasp({ children, className = "" }: ScrollGaspProps) {
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

  return (
    <div
      ref={ref}
      className={
        `${className} ${visible ? "animate-gasp" : "opacity-0 scale-95"}`
      }
    >
      {children}
    </div>
  );
}
