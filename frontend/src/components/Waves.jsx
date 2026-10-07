import { useId } from "react";

const HEIGHT = 520;

// Original static artwork, used on every page except the Home hero.
// It gently drifts up and down (see .waves__group in styles.css).
function staticWavePath(shift, width = 1440) {
  const baseY = HEIGHT * 0.62;
  const amp = 150 - shift * 1.1;
  const steps = 48;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const t = (i / steps) * Math.PI * 2;
    const y =
      baseY -
      Math.sin(t * 0.9 + 0.5 + shift * 0.035) * amp -
      Math.sin(t * 1.9 + shift * 0.02) * (24 + shift * 0.3) +
      shift * 1.6;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

// Flowing artwork (Home hero only). Every sine term completes a whole number of
// cycles per PERIOD, so the path repeats exactly every PERIOD units. Two periods are
// drawn and the group slides by one period (.waves__group--flow in styles.css), which
// loops left to right with no visible jump.
const PERIOD = 1440;

function flowWavePath(shift) {
  const baseY = HEIGHT * 0.62;
  const amp = 150 - shift * 1.1;
  const steps = 160;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * PERIOD * 2;
    const t = (x / PERIOD) * Math.PI * 2;
    const y =
      baseY -
      Math.sin(t + 0.5 + shift * 0.035) * amp -
      Math.sin(t * 2 + shift * 0.02) * (24 + shift * 0.3) +
      shift * 1.6;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

const LINES = Array.from({ length: 34 }, (_, i) => i);

export default function Waves({ className = "", flip = false, flow = false }) {
  const id = useId().replace(/:/g, "");
  const wavePath = flow ? flowWavePath : staticWavePath;
  return (
    <svg
      className={`waves ${className}`}
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <defs>
        <linearGradient id={`wg-${id}`} x1="0" y1="0" x2="1" y2="0">
          {flow ? (
            /* Spans both drawn periods and repeats once per period, so colours loop seamlessly. */
            <>
              {[0, 0.5].flatMap((o) => [
                <stop key={`a${o}`} offset={o} stopColor="#0e8fc0" />,
                <stop key={`b${o}`} offset={o + 0.125} stopColor="#12a39a" />,
                <stop key={`c${o}`} offset={o + 0.25} stopColor="#8cc63f" />,
                <stop key={`d${o}`} offset={o + 0.375} stopColor="#12a39a" />,
              ])}
              <stop offset="1" stopColor="#0e8fc0" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#0e8fc0" />
              <stop offset="0.45" stopColor="#12a39a" />
              <stop offset="1" stopColor="#8cc63f" />
            </>
          )}
        </linearGradient>
      </defs>
      <g
        className={`waves__group ${flow ? "waves__group--flow" : ""}`}
        fill="none"
        stroke={`url(#wg-${id})`}
        strokeLinecap="round"
      >
        {LINES.map((i) => (
          <path
            key={i}
            d={wavePath(i)}
            strokeWidth={i % 11 === 0 ? 1.8 : 1}
            opacity={i % 11 === 0 ? 0.85 : 0.35}
          />
        ))}
      </g>
    </svg>
  );
}
