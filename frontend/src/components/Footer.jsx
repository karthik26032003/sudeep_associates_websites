import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Icon from "./Icons.jsx";
import Waves from "./Waves.jsx";
import { company } from "../data.js";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <Waves className="footer__waves" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            Digital property due diligence for banks, NBFCs and institutions that need
            clear, reliable title information.
          </p>
        </div>

        <div>
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Legal</h4>
          <ul className="footer__list">
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#refund">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Contact</h4>
          <ul className="footer__list footer__list--icons">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            </li>
          </ul>
          <div className="footer__social">
            <a href="#linkedin" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="#twitter" aria-label="X (Twitter)"><Icon name="twitter" size={20} /></a>
            <a href="#facebook" aria-label="Facebook"><Icon name="facebook" size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">© {year} {company.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
