"use client";

import { useEffect, useState } from "react";

const navigation = [
  { href: "#services", label: "Услуги" },
  { href: "#results", label: "Результат" },
  { href: "#process", label: "Процесс" },
  { href: "#quiz", label: "Квиз" },
  { href: "#faq", label: "Вопросы" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    close();
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const className = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    menuOpen ? "is-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className="site-header-bar container">
        <a className="site-logo" href="#hero">
          <span className="site-logo-name">LINA</span>
          <span className="site-logo-code">pm CODE</span>
        </a>
        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-nav-toggle-lines" aria-hidden="true" />
          <span className="sr-only">{menuOpen ? "Закрыть меню" : "Открыть меню"}</span>
        </button>
        <nav className="site-nav" id="site-nav" aria-label="Разделы страницы">
          <ul className="site-nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="site-nav-link"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-accent site-header-cta" href="#contact-form">
          Записаться
        </a>
      </div>
    </header>
  );
}
