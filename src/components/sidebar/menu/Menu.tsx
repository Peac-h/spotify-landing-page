import { useState } from "react";
import "./Menu.scss";
import { Svg } from "../../elements/icon/Icons";
import { Link } from "react-router-dom";

function Menu() {
  const [isActive, setIsActive] = useState({
    home: true,
    search: false,
  });

  const handleActive = (name: string) => {
    setIsActive((prev) => ({
      ...prev,
      [name]: true,
      // Set other keys to false
      ...Object.keys(prev)
        .filter((key) => key !== name)
        .reduce((acc, key) => ({ ...acc, [key]: false }), {}),
    }));
  };

  return (
    <nav className={`nav`}>
      <div className={`nav__logo-container`}>
        <a className={`nav__logo-link`} href="/">
          <Svg name="logo" height={24} className="white-svg" />
        </a>
      </div>

      <ul className={`nav__list`}>
        <NavItem
          name="Home"
          isActive={isActive.home}
          onClick={() => handleActive("home")}
          path="/"
        />
        <NavItem
          name="Search"
          isActive={isActive.search}
          onClick={() => handleActive("search")}
          path="/"
        />
      </ul>
    </nav>
  );
}

function NavItem({
  name,
  isActive,
  onClick,
  path,
}: {
  name: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  path: string;
}) {
  return (
    <li
      className={`nav__list-item ${isActive ? "is-col-white" : "is-col-gray"}`}
      onClick={onClick}
    >
      <Link className="nav__list-link" to={path}>
        <Svg
          name={name.toLowerCase()}
          height={24}
          width={24}
          className={`nav-svg ${isActive ? "is-col-white" : "is-col-gray"}`}
        />
        <span className="nav__list-text">{name}</span>
      </Link>
    </li>
  );
}

export default Menu;
