"use client";

import { useLayoutEffect } from "react";

export function HeroOfferPlace() {
  useLayoutEffect(() => {
    const offer = document.querySelector<HTMLElement>(".hero-offer");
    const text = document.querySelector<HTMLElement>(".hero-lead");
    const button = document.querySelector<HTMLElement>(".site-header-cta");
    if (!offer || !text || !button) return;

    const place = () => {
      if (getComputedStyle(offer).position !== "absolute") {
        offer.style.top = "";
        offer.style.transform = "";
        return;
      }

      const parent = offer.offsetParent;
      if (!(parent instanceof HTMLElement)) return;

      const textBox = text.getBoundingClientRect();
      const buttonBox = button.getBoundingClientRect();
      const offerBox = offer.getBoundingClientRect();
      const parentTop = parent.getBoundingClientRect().top;
      const middle = (buttonBox.top + buttonBox.height / 2 + textBox.top + textBox.height / 2) / 2;

      offer.style.transform = "none";
      offer.style.top = `${middle - parentTop - offerBox.height / 2}px`;
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(document.documentElement);
    window.addEventListener("resize", place);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
      offer.style.top = "";
      offer.style.transform = "";
    };
  }, []);

  return null;
}
