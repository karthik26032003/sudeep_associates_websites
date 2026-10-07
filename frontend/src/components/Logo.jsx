import { Link } from "react-router-dom";

// Placeholder wordmark. Replace with the real logo image when available.
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="Sudeep Associates home">
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0e8fc0" />
            <stop offset="1" stopColor="#8cc63f" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#logo-g)" />
        <path
          d="M5 21c4-10 8-10 11-4s7 6 11-4"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo__text">
        Sudeep <span>Associates</span>
      </span>
    </Link>
  );
}
