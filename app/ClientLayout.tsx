"use client";

import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
    setCurrentTime(new Date().toLocaleString());
  }, []);

  return <div className="flex flex-col items-center justify-center h-screen" data-attr={currentTime}>{children}</div>;
}
