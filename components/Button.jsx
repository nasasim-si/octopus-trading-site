// Split button: label face + arrow cell divided by a hairline. Variants: primary (yellow), ghost (outline on dark).
export default function Button({ href, children, variant = 'primary', ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant}`} {...rest}>
      <span className="btn__label">{children}</span>
      <span className="btn__cell" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </span>
    </a>
  );
}
