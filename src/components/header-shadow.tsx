"use client";

import { useEffect } from "react";

export function HeaderShadow() {
  useEffect(() => {
    const header = document.getElementById("topo");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
