import "./Navigation.scss";
import { Svg } from "../../elements/icon/Icons";

import { FOOTER_LINKS, FooterLinksType } from "../../../data/navigation";

function Navigation() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`footer-nav`}>
      <nav className={`footer-nav__container`}>
        <div className={`footer-nav__useful-links`}>
          {FOOTER_LINKS.map((navSection, index) => (
            <NavContainer key={index} navSection={navSection} />
          ))}
        </div>

        <div className={`footer-nav__social-links`}>
          <a href="#" className="footer-nav__social-link">
            <Svg
              name="instagram"
              height={16}
              width={16}
              className="white-svg"
            />
          </a>
          <a href="#" className="footer-nav__social-link">
            <Svg name="twitter" height={16} width={16} className="white-svg" />
          </a>
          <a href="#" className="footer-nav__social-link">
            <Svg name="facebook" height={16} width={16} className="white-svg" />
          </a>
        </div>
      </nav>

      <hr className="footer-nav__horizontal-rule" />

      <div className="footer-nav__rights">
        <p>
          © <span className="footer-nav__curr-year">{currentYear}</span> Spotify
          AB
        </p>
      </div>
    </div>
  );
}

const NavContainer = function ({
  navSection,
}: {
  navSection: FooterLinksType;
}) {
  return (
    <div className={`footer-nav__useful-links-container`}>
      {Object.entries(navSection).map(([containerName, links]) => (
        <div key={containerName}>
          <p className={`footer-nav__useful-link-heading`}>{containerName}</p>
          <ul className={`footer-nav__useful-links-list`}>
            {links.map(({ link, href }, index) => (
              <li key={index} className={`footer-nav__useful-link`}>
                <a href={href}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
