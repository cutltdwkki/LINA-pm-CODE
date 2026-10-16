import { BookingLink } from "./booking-link";

const services = [
  {
    name: "Brow Reset",
    area: "feature",
    featured: true,
    photo: "/pictures/услуги/brow reset.JPG",
    audience: "Для тех, кто хочет выразительные брови.",
    points: [
      "Подбор оттенка под тон кожи и волос",
      "Построение индивидуального эскиза",
      "Перманентное оформление бровей",
      "Рекомендации по уходу и заживлению",
    ],
    duration: "2–2,5 часа.",
    price: "от … ₽",
  },
  {
    name: "Perfect Brow",
    area: "perfect",
    featured: false,
    photo: "/pictures/услуги/Perfect Brow.JPG",
    audience: "Для тех, кто хочет скорректировать форму бровей.",
    points: [
      "Анализ исходной формы и асимметрии",
      "Подбор подходящей техники и оттенка",
      "Согласование эскиза перед процедурой",
      "Рекомендации по уходу",
    ],
    duration: "2–2,5 часа.",
    price: "от … ₽",
  },
  {
    name: "Fresh Face",
    area: "fresh",
    featured: false,
    photo: "/pictures/услуги/Fresh Face.JPG",
    audience: "Для тех, кто хочет выглядеть свежее без макияжа.",
    points: [
      "Подбор зоны и оттенка под внешность",
      "Деликатное усиление природных черт",
      "Согласование формы и насыщенности",
      "Рекомендации по уходу после процедуры",
    ],
    duration: "зависит от выбранной зоны.",
    price: "от … ₽",
  },
  {
    name: "Soft Lips",
    area: "soft",
    featured: false,
    photo: "/pictures/услуги/Soft Lips.JPG",
    audience: "Для тех, кто хочет подчеркнуть естественный цвет губ.",
    points: [
      "Подбор оттенка с учётом природного цвета губ",
      "Согласование контура и насыщенности",
      "Перманентное оформление губ",
      "Рекомендации по уходу и заживлению",
    ],
    duration: "2–3 часа.",
    price: "от … ₽",
  },
  {
    name: "Signature Look",
    area: "signature",
    featured: false,
    photo: "/pictures/услуги/Signature Look.JPG",
    audience: "Для тех, кто хочет гармоничный образ под себя.",
    points: [
      "Индивидуальный подбор процедур",
      "Согласование желаемого результата",
      "Подбор оттенков и формы",
      "Планирование сочетания выбранных зон",
    ],
    duration: "зависит от выбранных процедур.",
    price: "от … ₽",
  },
] as const;

export function Services() {
  return (
    <section className="services section" aria-labelledby="services-title">
      <div className="container">
        <h2 className="title services-heading" id="services-title">
          Услуги и цены
        </h2>
        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.name}
              className={
                service.featured
                  ? "card services-card services-card-feature"
                  : "card services-card"
              }
              data-area={service.area}
              style={{ ["--photo" as string]: `url("${service.photo}")` }}
            >
              <div className="services-photo" aria-hidden="true" />
              <h3 className="card-title services-name">{service.name}</h3>
              <p className="services-audience">{service.audience}</p>
              <ul className="services-points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="services-foot">
                <p>{service.duration}</p>
                <p className="services-price">{service.price}</p>
                <BookingLink
                  service={service.name}
                  className={service.featured ? "btn services-action" : "btn btn-ghost services-action"}
                >
                  Записаться
                </BookingLink>
              </div>
            </article>
          ))}
          <article
            className="card services-card services-refresh"
            style={{ ["--photo" as string]: 'url("/pictures/услуги/LINA Refresh.JPG")' }}
          >
            <div className="services-photo" aria-hidden="true" />
            <h3 className="card-title services-name">LINA Refresh</h3>
            <p className="services-refresh-lead">Старый перманент можно обновить, а не терпеть</p>
            <p className="services-audience">Обновление любой зоны спустя 6+ месяцев, оценка по фото.</p>
            <div className="services-foot">
              <BookingLink service="LINA Refresh" photo className="btn btn-ghost services-action services-refresh-action">
                Отправить фото старого перманента
              </BookingLink>
            </div>
          </article>
        </div>
        <div className="services-notes">
          <p>Также: мини-татуировки, трихопигментация, камуфляж шрамов и уход за губами. Подробности — в мессенджере.</p>
          <p>Уже включено в стоимость: эскиз, анестезия и рекомендации по уходу.</p>
        </div>
      </div>
    </section>
  );
}
