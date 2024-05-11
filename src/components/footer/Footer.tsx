import "./Footer.scss";

function Footer() {
  return (
    <div className={`footer`}>
      <div className={`footer__left`}>
        <p className={`footer__header`}>Preview of Spotify</p>
        <p className={`footer__text`}>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>

      <div className={`footer__right`}>
        <button className={`footer__button`}>
          <span>Sign&nbsp;up&nbsp;free</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
