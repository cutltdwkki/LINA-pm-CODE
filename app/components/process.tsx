import { BookingLink } from "./booking-link";

const steps = [
  {
    title: "Консультация",
    text: "Обсуждаем ваши пожелания, противопоказания и желаемый результат",
    time: "10 мин",
  },
  {
    title: "Анализ лица и кожи",
    text: "Определяем цветотип, тип кожи и анатомические особенности",
    time: "10 мин",
  },
  {
    title: "Форма и оттенок",
    text: "Подбираем идеальный пигмент и согласуем пропорции",
    time: "15 мин",
  },
  {
    title: "Предварительный эскиз",
    text: "Рисуем будущую форму на лице до полного вашего одобрения",
    time: "20 мин",
  },
  {
    title: "Безопасная процедура",
    text: "Внесение пигмента с мягкой первичной и вторичной анестезией",
    time: "1.5–2 часа",
  },
  {
    title: "Рекомендации по уходу",
    text: "Подробно объясняем уход и выдаем специальный заживляющий набор",
    time: "10 мин",
  },
  {
    title: "Сопровождение",
    text: "На связи с вами на протяжении всего периода заживления",
    time: "30 дней",
  },
];

const safety = [
  { icon: "расходники.svg", text: "одноразовые расходники" },
  { icon: "стерилизация.svg", text: "стерилизация" },
  { icon: "сертифицированные пигменты.svg", text: "сертифицированные пигменты" },
  { icon: "отдельный кабинет.svg", text: "отдельный кабинет." },
];

function iconUrl(file: string) {
  return `url("/pictures/${encodeURIComponent("процесс")}/${encodeURIComponent(file)}")`;
}

export function Process() {
  return (
    <section className="process section" id="process" aria-labelledby="process-title">
      <div className="container">
        <h2 className="title process-heading" id="process-title">
          Как проходит процедура
        </h2>
        <div className="process-layout">
          <div className="process-timeline">
            <ol className="process-steps">
              {steps.map((step, index) => (
                <li className="process-step" key={step.title}>
                  <span className="process-marker">{index + 1}</span>
                  <article className="card process-step-card">
                    <div className="process-step-head">
                      <h3 className="process-step-title">{step.title}</h3>
                      <span className="process-time">{step.time}</span>
                    </div>
                    <p className="process-step-text">{step.text}</p>
                  </article>
                </li>
              ))}
            </ol>
            <p className="process-total">Общая длительность визита: ~2.5 часа</p>
          </div>
          <aside className="card process-master">
            <div className="process-photo" role="img" aria-label="Фото Алины, заглушка" />
            <h3 className="process-master-name">Алина</h3>
            <div className="process-stats">
              <p className="process-stat">
                <strong>7+ лет</strong>
                <span>в перманенте</span>
              </p>
              <p className="process-stat">
                <strong>3 500+</strong>
                <span>процедур</span>
              </p>
              <p className="process-stat">
                <strong>15+</strong>
                <span>сертификатов</span>
              </p>
            </div>
            <blockquote className="process-quote">
              <p>
                «Моя главная цель — сделать перманент так, чтобы никто не догадался, что он у вас есть.
                Я подбираю форму и оттенок строго под ваши пропорции.»
              </p>
            </blockquote>
            <ul className="process-safety">
              {safety.map((item) => (
                <li key={item.icon} style={{ ["--icon" as string]: iconUrl(item.icon) }}>
                  <span className="process-safety-icon" aria-hidden="true" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <BookingLink service="Консультация" className="btn btn-accent process-book">
              Записаться на консультацию
            </BookingLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
