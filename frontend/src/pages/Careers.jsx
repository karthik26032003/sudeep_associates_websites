import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icons.jsx";
import { principles } from "../data.js";

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join our growing team"
        subtitle="Promote transparency, trust and efficiency in the real estate market through robust data."
      />

      <section className="section">
        <div className="container split">
          <div className="split__copy">
            <p className="eyebrow">Life at Sudeep Associates</p>
            <h2>Law, data and fieldwork, solved together</h2>
            <p>
              Property records are messy, and no single skill clears them up. Our teams
              bring legal, research and technology backgrounds to the same table and
              work through each problem together.
            </p>
          </div>
          <img
            className="split__media"
            src="/team-collaboration.svg"
            alt="Colleagues around a table reviewing a property map and documents"
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head section__head--center">
            <p className="eyebrow">How we work</p>
            <h2>Principles that guide us</h2>
          </div>
          <div className="cards cards--3">
            {principles.map((p) => (
              <article className="card card--quote" key={p.quote}>
                <p className="card__quote">“{p.quote}”</p>
                <p>{p.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container openings">
          <h2>Open positions</h2>
          <p className="lead">
            We don't have listings published here yet. Send us your profile and we'll be
            in touch when a role matches.
          </p>
          <a className="btn btn--primary btn--lg" href="mailto:careers@sudeepassociates.in">
            Email your profile <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
