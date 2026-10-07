import PageHero from "../components/PageHero.jsx";
import { team } from "../data.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Re-engineering property due diligence"
        subtitle="Bringing transparency, trust and fairness through real estate data."
      />

      <section className="section">
        <div className="container prose-grid">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Clear title should not be a privilege</h2>
            <img
              className="about__illustration"
              src="/land-record-network.svg"
              alt="Property map connected to verified ownership records and digital data"
            />
          </div>
          <div className="prose">
            <p>
              Sudeep Associates was founded on a simple observation: a lack of reliable
              information on title and valuation holds back both property investment and
              the ability to finance property assets.
            </p>
            <p>
              Our mission is to build a dependable, centralised body of title and
              valuation-related information on real estate, and to use data and legal
              expertise to remove the uncertainty around ownership, so that property
              rights are clear for everyone who depends on them.
            </p>
            <p>
              Today we work with banks, NBFCs and other institutions to deliver faster,
              more consistent and fully documented due diligence.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head section__head--center">
            <p className="eyebrow">Leadership</p>
            <h2>Our team</h2>
          </div>
          <div className="team">
            {team.map((m) => (
              <article className="member" key={m.name}>
                <span className="member__avatar" aria-hidden="true">{m.name.charAt(0)}</span>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
