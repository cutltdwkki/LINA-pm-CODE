"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="site-header-bar container">
        <a className="site-logo" href="#hero">
          <span className="site-logo-name">LINA</span>
          <span className="site-logo-code">pm CODE</span>
        </a>
        <a className="btn btn-accent site-header-cta" href="#contact-form">
          Записаться
        </a>
      </div>
    </header>
  );
}
