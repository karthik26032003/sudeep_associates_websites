import Waves from "./Waves.jsx";

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = "" }) {
  return (
    <section className="page-hero">
      <Waves className="page-hero__waves" />
      <div className={`container page-hero__inner ${image ? "page-hero__inner--split" : ""}`}>
        <div className="page-hero__copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {subtitle && <p className="lead">{subtitle}</p>}
        </div>
        {image && <img className="page-hero__media" src={image} alt={imageAlt} />}
      </div>
    </section>
  );
}
