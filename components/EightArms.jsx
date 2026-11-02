import { arms } from '@/lib/company';

// Diagram geometry (desktop): 840 x 600 box, label columns 250 wide, 4 rows of 150.
// Left column reads arms 1-4 top to bottom, right column arms 8-5, so the numbering runs clockwise.
const ROWS = [[1, 8], [2, 7], [3, 6], [4, 5]];
const W = 840, CX = 420, CY = 300, ROW = 150, TITLE_Y = 35, DOT_IN = 12;

function connector(side, row) {
  const dx = side < 0 ? 250 + DOT_IN : W - 250 - DOT_IN;
  const dy = row * ROW + TITLE_Y;
  const sx = CX + side * 60;
  const sy = CY + (row - 1.5) * 46;
  return { d: `M${dx} ${dy} C${dx - side * 70} ${dy} ${sx + side * 40} ${sy} ${sx} ${sy}`, dx, dy };
}

export default function EightArms() {
  const lines = ROWS.flatMap((pair, row) => [connector(-1, row), connector(1, row)]);
  return (
    <div className="arms">
      <svg className="arms__lines" viewBox={`0 0 ${W} 600`} aria-hidden="true">
        {lines.map((l, i) => (
          <g key={i}>
            <path d={l.d} />
            <circle cx={l.dx} cy={l.dy} r="4.5" />
          </g>
        ))}
      </svg>
      <span className="arms__mark" aria-hidden="true" />
      <ol className="arms__list">
        {ROWS.flatMap(([l, r], row) => [
          <li key={l} className="arm arm--left" style={{ '--row': row + 1, order: l }}>
            <span className="arm__num">Arm {String(l).padStart(2, '0')}</span>
            <span className="arm__title">{arms[l - 1]}</span>
          </li>,
          <li key={r} className="arm arm--right" style={{ '--row': row + 1, order: r }}>
            <span className="arm__num">Arm {String(r).padStart(2, '0')}</span>
            <span className="arm__title">{arms[r - 1]}</span>
          </li>,
        ])}
      </ol>
    </div>
  );
}
