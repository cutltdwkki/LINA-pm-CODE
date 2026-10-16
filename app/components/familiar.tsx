"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    fear: "Больно",
    solution: "используем анестезию",
    side: "left",
    icon: "/pictures/icon/больно.svg",
  },
  {
    fear: "Синие или рыжие",
    solution: "оттенок по подтону и учёт осветления",
    side: "left",
    icon: "/pictures/icon/синие или рыжие.svg",
  },
  {
    fear: "Нарисованные",
    solution: "аккуратная техника без графичности",
    side: "left",
    icon: "/pictures/icon/нарисованные.svg",
  },
  {
    fear: "Как у всех",
    solution: "форма под ваше лицо, примерка до процедуры",
    side: "right",
    icon: "/pictures/icon/как у всех.svg?v=2",
  },
  {
    fear: "Был неудачный опыт",
    solution: "оценка старой работы",
    side: "right",
    icon: "/pictures/icon/был неудачный опыт.svg",
  },
  {
    fear: "Доплаты",
    solution: "цена фиксируется заранее",
    side: "right",
    icon: "/pictures/icon/доплаты.svg",
  },
] as const;

const rings = ["42%", "26%", "14%"];

export function Familiar() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const layout = layoutRef.current;
    if (!layout || visible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const entered = () => {
      const rect = layout.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewH * 0.82 && rect.bottom > viewH * 0.16;
    };

    if (entered()) {
      setVisible(true);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!entered()) return;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  return (
    <section className="familiar section" aria-labelledby="familiar-title">
      <div ref={layoutRef} className={visible ? "familiar-layout container is-visible" : "familiar-layout container"}>
        <div className="familiar-visual">
          <div className="familiar-center">
            <div className="familiar-rings" aria-hidden="true">
              {rings.map((alpha, index) => (
                <span
                  key={alpha}
                  className="familiar-ring"
                  style={{ ["--i" as string]: String(index), ["--alpha" as string]: alpha }}
                />
              ))}
            </div>
            <h2 className="title familiar-heading" id="familiar-title">
              Знакомо?
            </h2>
            <a className="btn btn-ghost familiar-action" href="#contact-form">
              Обсудить своё с мастером
            </a>
          </div>
        </div>
        <ul className="familiar-list">
          {cards.map((card, index) => (
            <li
              key={card.fear}
              className="card familiar-plate"
              data-side={card.side}
              style={{ ["--i" as string]: String(index) }}
            >
              <Icon src={card.icon} />
              <div className="familiar-copy">
                <p className="card-title familiar-line">«{card.fear}»</p>
                <p className="familiar-solution">{card.solution}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Icon({ src }: { src: (typeof cards)[number]["icon"] }) {
  return (
    <span className="familiar-icon">
      <span
        className="familiar-icon-glyph"
        style={{ ["--icon" as string]: `url("${src}")` }}
        aria-hidden="true"
      />
    </span>
  );
}
