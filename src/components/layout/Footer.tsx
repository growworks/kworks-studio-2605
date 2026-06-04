import { SITE } from '@/data/site'

export function Footer() {
  return (
    <footer className="kw-footer">
      <div className="container">
        <div className="kw-footer__grid">
          <div className="kw-footer__brand">
            <div className="kw-footer__logo">
              <span className="kw-logo__mark">
                <img src="/assets/images/logo_w.png" alt={SITE.brand} />
              </span>
            </div>
            <p>{SITE.footerLead}</p>
          </div>
          <dl className="kw-footer__info">
            <dt>Company</dt>
            <dd>
              {SITE.brand} ({SITE.brandKo})
            </dd>
            <br />
            <dt>Address</dt>
            <dd>{SITE.address}</dd>
            <br />
            <dt>Tel · Fax</dt>
            <dd>
              {SITE.tel} · {SITE.fax}
            </dd>
            <br />
            <dt>Email</dt>
            <dd>{SITE.email}</dd>
            <br />
            <dt>Registration</dt>
            <dd>{SITE.registration}</dd>
          </dl>
          <div className="kw-footer__social">
            <a href={SITE.social.instagram} aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
              </svg>
            </a>
            <a href={SITE.social.youtube} aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M10 9l5 3-5 3z" />
              </svg>
            </a>
            <a href={SITE.social.vimeo} aria-label="Vimeo">
              <svg viewBox="0 0 24 24">
                <path d="M3 8c1.5-1 3-2 5-2 1 0 1.6 1 1.8 2.5L11 14c.4 1 .8 1 1.4 0 1-1.5 2-3 2-4.5 0-1-.5-1.5-1.5-1.5-.5 0-1 .1-1.5.3 1-2 3-3 4.8-2.8 2 .3 2.8 2 2.3 4-1 4-5 9-7.5 9-1.5 0-2.3-1.5-3-4l-1.5-5C6.3 8.6 6 8.4 5 9l-1-1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="kw-footer__bottom">
          <div>{SITE.copyright}</div>
          <div>
            <a href={SITE.legal.privacy}>개인정보처리방침</a>
            <a href={SITE.legal.terms}>이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
