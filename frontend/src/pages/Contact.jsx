import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icons.jsx";
import { company } from "../data.js";

const initial = { name: "", email: "", phone: "", organisation: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Frontend only: no request is made. Wire this to an API when a backend exists.
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initial);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="How can we help?"
        subtitle="Got any questions? We would love to hear from you."
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <h2>Get in touch</h2>
            <ul className="contact__list">
              <li>
                <span className="card__icon card__icon--sm"><Icon name="mail" size={20} /></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <span className="card__icon card__icon--sm"><Icon name="phone" size={20} /></span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
                </div>
              </li>
              {company.offices.map((o) => (
                <li key={o.city}>
                  <span className="card__icon card__icon--sm"><Icon name="pin" size={20} /></span>
                  <div>
                    <strong>
                      {o.city}
                      {o.tag && <em className="tag">{o.tag}</em>}
                    </strong>
                    <span>{o.address}</span>
                  </div>
                </li>
              ))}
            </ul>
            <img
              className="contact__art"
              src="/get-in-touch.svg"
              alt="Envelope, chat bubble and phone representing contacting the team"
            />
          </div>

          <div className="contact__form" id="schedule-demo">
            <h2>Schedule a Demo</h2>
            <p className="muted">Tell us a little about your needs and we'll set up a walkthrough.</p>

            {sent ? (
              <div className="notice" role="status">
                Thank you. Your request has been noted. Our team will reach out shortly.
              </div>
            ) : (
              <form onSubmit={submit} noValidate={false}>
                <div className="field-row">
                  <label className="field">
                    <span>Full name</span>
                    <input name="name" value={form.name} onChange={update} required autoComplete="name" />
                  </label>
                  <label className="field">
                    <span>Work email</span>
                    <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
                  </label>
                </div>
                <div className="field-row">
                  <label className="field">
                    <span>Phone</span>
                    <input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" />
                  </label>
                  <label className="field">
                    <span>Organisation</span>
                    <input name="organisation" value={form.organisation} onChange={update} autoComplete="organization" />
                  </label>
                </div>
                <label className="field">
                  <span>Message</span>
                  <textarea name="message" rows="4" value={form.message} onChange={update} />
                </label>
                <button type="submit" className="btn btn--primary btn--lg">
                  Request a demo <Icon name="arrow" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
