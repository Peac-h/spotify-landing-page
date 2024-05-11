import { useEffect, useState } from "react";
import "./Header.scss";
import { Svg } from "../../elements/icon/Icons";
import { useNavigate } from "react-router-dom";
import { HEADER_BUTTONS } from "../../../data/header";

function Header({ scrolledValue }: { scrolledValue: number }) {
  const navigate = useNavigate();
  const numb = scrolledValue / 80;
  const [maxIDX, setMaxIDX] = useState(0);
  const idx = window.history.state.idx;

  useEffect(() => {
    if (idx > maxIDX) {
      setMaxIDX(idx);
    }
  }, [idx, maxIDX]);

  return (
    <header className={`header`}>
      <div
        className="header__fade-bg"
        style={{
          opacity: `${numb}`,
        }}
      ></div>

      <div className={`header__left`}>
        <button
          className="header__icon-btn"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          disabled={idx === 0}
        >
          <Svg name="arrowL" height={16} width={16} className="header-svg" />
        </button>
        <button
          className="header__icon-btn"
          onClick={() => navigate(1)}
          disabled={!(maxIDX > idx) || maxIDX === idx}
        >
          <Svg name="arrowR" height={16} width={16} className="header-svg" />
        </button>
      </div>

      <div className={`header__right`}>
        {HEADER_BUTTONS.map((button, index) => (
          <div key={index}>
            <button className="header__button header__service-button">
              {button}
            </button>
          </div>
        ))}

        <div className={`header__line`}></div>

        <button className="header__button header__cta-button header__cta-button--sign">
          Sign up
        </button>

        <button className="header__cta-button header__cta-button--login">
          Log in
        </button>
      </div>
    </header>
  );
}

export default Header;
