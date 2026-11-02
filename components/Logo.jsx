// The traced client mark and wordmark, used as CSS masks so they take the current text colour.
export default function Logo({ size = 'md' }) {
  return (
    <span className={`logo logo--${size}`}>
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__word" aria-hidden="true" />
      <span className="sr-only">The Octopus Trading</span>
    </span>
  );
}
