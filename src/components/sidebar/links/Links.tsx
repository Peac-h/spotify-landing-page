import "./Links.scss";

import { SIDEBAR_LINKS } from "../../../data/sidebar";
import { Svg } from "../../elements/icon/Icons";

function Links() {
  return (
    <div className={`sidebar-footer`}>
      <div className={`sidebar-footer__links-container`}>
        <div className={`sidebar-footer__links-list`}>
          {SIDEBAR_LINKS.map((sidebarLink, index) => (
            <SidebarLink key={index} {...sidebarLink} />
          ))}
        </div>
        <a className={`sidebar-footer__cookie-link`} href="#">
          Cookies
        </a>
      </div>

      <div className={`sidebar-footer__languages`}>
        <button className={`sidebar-footer__languages-button`}>
          <Svg
            name="earth"
            height={16}
            width={16}
            className="white-svg sidebar-footer__svg"
          />
          <span>English</span>
        </button>
      </div>
    </div>
  );
}

function SidebarLink({ content, link }: { content: string; link: string }) {
  return (
    <div className={`sidebar-footer__link-container`}>
      <a className={`sidebar-footer__link`} href={`${link}`}>
        {content}
      </a>
    </div>
  );
}

export default Links;
