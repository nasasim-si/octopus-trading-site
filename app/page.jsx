import Image from 'next/image';
import Nav from '@/components/Nav';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import EightArms from '@/components/EightArms';
import { company, quoteHref, telHref, trades, values, reasons, steps } from '@/lib/company';

function Kicker({ children, tone = 'ink' }) {
  return <p className={`kicker kicker--${tone}`}>{children}</p>;
}

function Mark({ children }) {
  return <span className="mark">{children}</span>;
}

function TradeCard({ trade, size }) {
  return (
    <article className={`card card--${size}`}>
      <Image src={trade.image} alt="" fill sizes={size === 'lg' ? '(max-width: 900px) 100vw, 600px' : '(max-width: 900px) 100vw, 600px'} className="card__img" />
      <div className="card__copy">
        <span className="rule" aria-hidden="true" />
        <h3>{trade.title}</h3>
        <p>{trade.text}</p>
        {size === 'lg' && <a className="link link--light" href={quoteHref}>See the medical range</a>}
      </div>
    </article>
  );
}

export default function Home() {
  const [medical, imports, ...small] = trades;
  return (
    <>
      <Nav />
      <main id="top">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <Image src="/images/port.jpg" alt="" fill priority sizes="100vw" className="hero__img" />
          <div className="hero__scrim" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <Kicker tone="yellow">Karachi · Importer, supplier and general trader</Kicker>
              <h1 id="hero-title">
                One supplier.<br />
                <span className="hl">Eight arms.</span>
              </h1>
              <p className="hero__lead">
                Hospital instruments, medical machinery imports, administrative products, security items and machinery parts, sourced from verified manufacturers and delivered on time, with documentation and service you can depend on.
              </p>
              <div className="actions">
                <Button href={quoteHref}>Request a quotation</Button>
                <Button href="#trade" variant="ghost">Explore what we trade</Button>
              </div>
            </div>
            <ul className="rail" aria-label="What we trade">
              {trades.map((t) => (
                <li key={t.id}><span className="rail__rule" aria-hidden="true" />{t.short}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="container">
            <div className="about__main">
              <Kicker>About us</Kicker>
              <dl className="glance">
                <p className="glance__title">At a glance</p>
                <div><dt>Head office</dt><dd>{company.headOffice}</dd></div>
                <div><dt>Business type</dt><dd>{company.businessType}</dd></div>
                <div><dt>We serve</dt><dd>Hospitals, clinics, laboratories, government institutions, educational bodies and corporate offices</dd></div>
                <div><dt>Registration / License No.</dt><dd className="glance__reg">{company.registration}</dd></div>
              </dl>
              <div className="about__body">
                <h2 className="statement">
                  The right product, from a <Mark>verified source</Mark>, delivered on time, with documentation and service you can depend on.
                </h2>
                <div className="cols">
                  <p>{company.legalName} is a supply and import company serving hospitals, clinics, laboratories, government institutions, educational bodies and corporate offices. We source hospital medical instruments, administrative products, security systems and operational machinery parts from reputable manufacturers, and import medical machinery on behalf of healthcare providers.</p>
                  <p>Based in Karachi, we have grown from a small trading outfit into a multi-category supplier, delivering reliably, at competitive prices, with genuine after-sales support. Our vision: to be the region’s most dependable one-stop supplier of medical, security, technical and administrative solutions.</p>
                </div>
              </div>
            </div>
            <ul className="values">
              {values.map(([k, v]) => (
                <li key={k}><h3>{k}</h3><p>{v}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT WE TRADE */}
        <section id="trade" className="section section--mist">
          <div className="container">
            <header className="head head--split">
              <div>
                <Kicker>What we trade</Kicker>
                <h2>Five trades.<br /><Mark>One contract.</Mark></h2>
              </div>
              <div className="deck">
                <p>Hospital instruments, administrative products, security items and machinery parts under one contract, plus the import of medical machinery on behalf of healthcare providers. Other general trading items are sourced on request.</p>
                <a className="link" href={quoteHref}>Request the catalogue</a>
              </div>
            </header>
            <div className="bento">
              <TradeCard trade={medical} size="lg" />
              <div className="bento__side">
                <TradeCard trade={imports} size="md" />
                <div className="bento__small">
                  {small.map((t) => <TradeCard key={t.id} trade={t} size="sm" />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EIGHT ARMS */}
        <section id="import" className="section section--ink dots">
          <div className="container">
            <header className="head head--split">
              <div>
                <Kicker tone="yellow">Import services</Kicker>
                <h2 className="on-dark"><span className="hl">Eight arms</span> on<br />every import.</h2>
              </div>
              <div className="deck deck--dark">
                <p>Our import services cover the full cycle for heavy and specialized equipment, from the first quotation to a commissioned machine on site.</p>
                <Button href={quoteHref}>Start an import enquiry</Button>
              </div>
            </header>
            <EightArms />
          </div>
        </section>

        {/* WHY US */}
        <section id="why" className="section">
          <div className="container why">
            <header className="why__head">
              <Kicker>Why choose us</Kicker>
              <h2>Why hospitals and offices <Mark>buy from us.</Mark></h2>
              <p className="intro">Authentic products, one contract and support from quotation to installation, staff training and warranty service.</p>
            </header>
            <ul className="reasons">
              {reasons.map(([h, d]) => (
                <li key={h}><h3>{h}</h3><p>{d}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section section--mist">
          <div className="container">
            <header className="head">
              <Kicker>Our process</Kicker>
              <h2>From first call to after-sales,<br /><Mark>one route.</Mark></h2>
            </header>
            <ol className="route">
              {steps.map(([h, d]) => (
                <li key={h}><h3>{h}</h3><p>{d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* QUALITY */}
        <section className="section">
          <div className="container quality">
            <div className="quality__img">
              <Image src="/images/inspection.jpg" alt="Equipment being tested on an inspection bench before handover" fill sizes="(max-width: 900px) 100vw, 500px" />
              <span className="stamp">Tested before handover</span>
            </div>
            <div className="quality__copy">
              <Kicker>Quality, compliance and ethics</Kicker>
              <h2><Mark>Zero tolerance</Mark> for counterfeit or substandard goods.</h2>
              <p className="intro">We follow a strict quality policy, comply with applicable import, health authority, customs and tax regulations, and maintain complete traceability records for medical products.</p>
              <ul className="checks">
                <li>Every supplier is vetted</li>
                <li>Every shipment is checked against specifications</li>
                <li>Every machine is tested before handover</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section--ink">
          <div className="container">
            <header className="head">
              <Kicker tone="yellow">Contact us</Kicker>
              <h2 className="on-dark">Request a quotation or <span className="hl">catalogue today.</span></h2>
              <p className="intro intro--yellow">We will respond within one business day.</p>
            </header>
            <div className="panels">
              <div className="panel">
                <h3>Contact details</h3>
                <dl>
                  <div><dt>Address</dt><dd>{company.address}</dd></div>
                  <div><dt>Phone</dt><dd><a href={telHref}>{company.phone}</a></dd></div>
                  <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
                  {company.website && <div><dt>Website</dt><dd>{company.website}</dd></div>}
                  {company.hours && <div><dt>Working hours</dt><dd>{company.hours}</dd></div>}
                </dl>
                <div className="panel__actions">
                  <Button href={quoteHref}>Email for a quotation</Button>
                  <Button href={telHref} variant="ghost">Call us</Button>
                </div>
              </div>
              <div className="panel">
                <h3>Company snapshot</h3>
                <dl>
                  <div><dt>Legal name</dt><dd>{company.legalName}</dd></div>
                  <div><dt>Head office</dt><dd>{company.headOffice}</dd></div>
                  <div><dt>Business type</dt><dd>{company.businessType}</dd></div>
                  <div><dt>Registration / License No.</dt><dd className="panel__reg">{company.registration}</dd></div>
                  <div><dt>Bank</dt><dd>{company.bank}</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <Logo size="lg" />
              <p>{company.tagline}</p>
            </div>
            <div className="footer__cols">
              <div>
                <h4>What we trade</h4>
                <ul>{trades.map((t) => <li key={t.id}><a href="#trade">{t.short}</a></li>)}</ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About us</a></li>
                  <li><a href="#import">Import services</a></li>
                  <li><a href="#why">Why choose us</a></li>
                  <li><a href="#process">Our process</a></li>
                </ul>
              </div>
              <div>
                <h4>Head office</h4>
                <ul>
                  <li>{company.headOffice}</li>
                  <li><a href={telHref}>{company.phone}</a></li>
                  <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} {company.legalName} · Registration / License No. {company.registration}</span>
            <span>{company.headOffice}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
