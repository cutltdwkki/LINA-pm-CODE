import Image from "next/image";
import heroPortrait from "../../public/pictures/hero.png";
import { HeroOfferPlace } from "./hero-offer-place";
import { getWhatsappHref } from "../site";

const points = ["Анестезия", "Эскиз в цене", "Сопровождение в заживлении"];

export function Hero() {
  const whatsappHref = getWhatsappHref();

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <p className="hero-mark" aria-hidden="true">
        LINA
      </p>
      <figure className="hero-portrait">
        <Image
          className="hero-portrait-image"
          src={heroPortrait}
          alt="Девушка в полуоборот смотрит в сторону: акцент на естественных бровях"
          priority
          sizes="(max-width: 1023px) 88vw, 38vw"
        />
      </figure>
      <div className="hero-stage container">
        <HeroOfferPlace />
        <aside className="hero-offer">
          <div className="hero-offer-photo" role="img" aria-label="Фото акции, заглушка" />
          <p className="hero-offer-copy">
            <span>Первым 20 клиенткам –</span>
            <span>спец цена и подарок</span>
          </p>
        </aside>
        <div className="hero-title-block">
          <ul className="hero-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h1 className="hero-title" id="hero-title">
            Перманент бровей в
            <br />
            Казани: <span className="hero-title-accent">форму увидите</span>
            <br />
            <span className="hero-title-accent">до процедуры</span>
          </h1>
        </div>
        <div className="hero-aside">
          <p className="lead hero-lead">
            Анализ лица, подбор оттенка и предварительная прорисовка до того,
            как мастер возьмёт аппарат.
          </p>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#contact-form">
              Записаться на консультацию
            </a>
            {whatsappHref ? (
              <a
                className="btn btn-ghost"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в WhatsApp
              </a>
            ) : (
              <button type="button" className="btn btn-ghost" aria-disabled="true">
                Написать в WhatsApp
                <span className="sr-only">Номер студии ещё не указан</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
