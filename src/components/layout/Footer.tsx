import { SITE } from '@/data/site'
import { SocialIcons } from '@/components/ui/SocialIcons'

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
          <SocialIcons variant="footer" />
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
