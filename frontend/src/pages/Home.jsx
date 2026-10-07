import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Waves from "../components/Waves.jsx";
import Icon from "../components/Icons.jsx";
import { stats, features, testimonial } from "../data.js";

const WORDS = ["clarity", "speed", "trust", "certainty"];

function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  // Own fixed-height line: changing words never shifts the surrounding text.
  return (
    <span className="rotator" aria-live="off">
      <span key={WORDS[i]} className="rotator__word">{WORDS[i]}</span>
    </span>
  );
}

function ReportMockup() {
  const rows = [
    ["Title chain", "Verified"],
    ["Encumbrances", "None found"],
    ["Litigation", "Clear"],
    ["Ownership", "Matched"],
  ];
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup__bar">
        <span /><span /><span />
      </div>
      <div className="mockup__body">
        <div className="mockup__head">
          <div>
            <p className="mockup__label">Property report</p>
            <p className="mockup__id">SA-000123</p>
          </div>
          <span className="badge">Cleared</span>
        </div>
        <ul className="mockup__rows">
          {rows.map(([k, v]) => (
            <li key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </li>
          ))}
        </ul>
        <div className="mockup__score">
          <span>Risk score</span>
          <div className="mockup__meter"><i /></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <Waves className="hero__waves" flow />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Digital property due diligence</p>
            <h1>
              Sudeep Associates brings
              <RotatingWord />
              to property due diligence
            </h1>
            <p className="lead">
              One platform for title verification, document retrieval and legal vetting,
              customised to how your institution lends.
            </p>
            <div className="hero__actions">
              <Link to="/contact#schedule-demo" className="btn btn--primary btn--lg">
                Schedule a Demo <Icon name="arrow" size={18} />
              </Link>
              <Link to="/about" className="btn btn--ghost btn--lg">Learn more</Link>
            </div>
          </div>
          <ReportMockup />
        </div>
      </section>

      <section className="section section--stats">
        <div className="container">
          <div className="section__head section__head--center">
            <p className="eyebrow">The Sudeep Report</p>
            <h2>360° property insights delivered on day one</h2>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="what-we-do__intro">
            <div className="section__head what-we-do__heading">
              <p className="eyebrow">What we do</p>
              <h2>Everything a lender needs to approve with confidence</h2>
            </div>
            <div className="what-we-do__visual">
              <img
                src="/property-verification-building.svg"
                alt="Building connected to verified property records and legal checks"
              />
            </div>
          </div>
          <div className="cards">
            {features.map((f) => (
              <article className="card card--service" key={f.title}>
                <img className="card__media" src={f.image} alt="" loading="lazy" />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head section__head--center">
            <h2>Trusted by banks and NBFCs</h2>
          </div>
          <figure className="testimonial">
            <span className="testimonial__mark" aria-hidden="true">“</span>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>
              <span className="avatar" aria-hidden="true">
                {testimonial.name.charAt(0)}
              </span>
              <span>
                <strong>{testimonial.name}</strong>
                <br />
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cta">
        <Waves className="cta__waves" flip />
        <div className="container cta__inner">
          <h2>See how Sudeep Associates fits your lending workflow</h2>
          <p>Book a short walkthrough with our team.</p>
          <Link to="/contact#schedule-demo" className="btn btn--light btn--lg">
            Schedule a Demo <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
