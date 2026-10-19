"use client";

import { useEffect, useRef, useState } from "react";
import { BookingLink } from "./booking-link";

const works = [
  {
    file: "до после 1.JPG",
    alt: "Губы до процедуры и заживший результат",
    caption: "Губы · до и после",
    pair: true,
    healed: true,
  },
  {
    file: "до после 2.JPG",
    alt: "Брови до и после процедуры",
    caption: "Брови · до и после",
    pair: true,
    healed: false,
  },
  {
    file: "IMG_4177.JPG",
    alt: "Брови, два кадра",
    caption: "Брови · подпись уточняется",
    pair: false,
    healed: false,
  },
  {
    file: "IMG_4179.JPG",
    alt: "Портрет: брови и губы",
    caption: "Подпись уточняется",
    pair: false,
    healed: false,
  },
  {
    file: "IMG_4185.JPG",
    alt: "Губы, три кадра",
    caption: "Губы · подпись уточняется",
    pair: false,
    healed: false,
  },
  {
    file: "IMG_4187.JPG",
    alt: "Крупный план глаз",
    caption: "Подпись уточняется",
    pair: false,
    healed: false,
  },
  {
    file: "IMG_3230.JPG",
    alt: "Крупный план глаз и бровей",
    caption: "Брови · подпись уточняется",
    pair: false,
    healed: false,
  },
  {
    file: "IMG_2352.PNG",
    alt: "Крупный план глаза",
    caption: "Подпись уточняется",
    pair: false,
    healed: false,
  },
];

const reviews = [
  {
    name: "Алина",
    text: "Очень боялась, что брови будут слишком яркими и нарисованными. Но мы сначала подобрали форму и оттенок, посмотрели эскиз, и только потом начали процедуру. Получилось очень естественно, именно то, чего я хотела!",
  },
  {
    name: "Мария",
    text: "У меня брови немного асимметричные, поэтому я долго не решалась на перманент. Алина учла особенности лица, и мы всё согласовали заранее. Теперь не нужно каждое утро тратить время на карандаш!",
  },
  {
    name: "Екатерина",
    text: "Больше всего переживала за цвет после заживления. Мне объяснили, как будет меняться оттенок, и рассказали, как ухаживать за бровями. После заживления всё выглядит мягко и аккуратно, без рыжины, которой я так боялась.",
  },
  {
    name: "Виктория",
    text: "Это мой первый перманент, и я очень волновалась. Всё прошло спокойнее, чем ожидала: мне объясняли каждый этап, отвечали на вопросы и не торопили с выбором формы. Рада, что наконец решилась!",
  },
];

function photoSrc(file: string) {
  return `/pictures/${encodeURIComponent("результат")}/${encodeURIComponent(file)}`;
}

type Work = (typeof works)[number];

function WorkSet({
  hidden = false,
  onOpen,
}: {
  hidden?: boolean;
  onOpen: (work: Work) => void;
}) {
  return (
    <ul className="results-set" aria-hidden={hidden || undefined}>
      {works.map((work) => (
        <li key={hidden ? `${work.file}-copy` : work.file}>
          <button
            type="button"
            className="results-card"
            tabIndex={hidden ? -1 : 0}
            aria-label={`Открыть фото: ${work.alt}`}
            onClick={() => onOpen(work)}
          >
            <img src={photoSrc(work.file)} alt="" />
            <span className="results-caption">
              <span className="results-chip">{work.caption}</span>
              {work.pair ? <span className="results-chip">До / после</span> : null}
              {work.healed ? <span className="results-chip">После заживления</span> : null}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function Results() {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState<Work | null>(null);

  useEffect(() => {
    if (!active) return;
    const scroller = document.scrollingElement;
    const top = scroller?.scrollTop ?? 0;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    body.style.position = "fixed";
    body.style.top = `-${top}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      const html = document.documentElement;
      const behavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      if (scroller) scroller.scrollTop = top;
      html.style.scrollBehavior = behavior;
    };
  }, [active]);

  return (
    <section className="results section" id="results" aria-labelledby="results-title">
      <div className="container">
        <h2 className="title results-heading" id="results-title">
          Результат — сразу и после заживления
        </h2>
      </div>
      <div className="results-viewport" tabIndex={0} aria-label="Галерея работ">
        <div className="results-track">
          <WorkSet onOpen={setActive} />
          <WorkSet hidden onOpen={setActive} />
        </div>
      </div>
      <div className="container">
        <div className="results-reviews">
          {reviews.map((review) => (
            <article className="card results-review" key={review.name}>
              <div className="results-person">
                <span className="results-avatar" aria-hidden="true">
                  {review.name.slice(0, 1)}
                </span>
                <p className="results-name">{review.name}</p>
              </div>
              <blockquote className="results-quote">
                <p>{review.text}</p>
              </blockquote>
            </article>
          ))}
        </div>
        <div className="results-action">
          <BookingLink service="Результаты и отзывы" className="btn btn-accent">
            Хочу такой же результат
          </BookingLink>
        </div>
      </div>
      {active ? (
        <div
          className="results-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="results-lightbox-frame">
            <img src={photoSrc(active.file)} alt={active.alt} />
            <button
              ref={closeRef}
              type="button"
              className="results-lightbox-close"
              onClick={() => setActive(null)}
            >
              Закрыть
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
