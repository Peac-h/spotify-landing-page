import Menu from "./menu/Menu";
import "./Sidebar.scss";
import Library from "./library/Library";
import Links from "./links/Links";

function Sidebar() {
  return (
    <div className={`sidebar`}>
      <div className={`component sidebar__upper-section`}>
        <Menu />
      </div>

      <div className={`component sidebar__down-section`}>
        <Library />
        <Links />
      </div>
    </div>
  );
}

export default Sidebar;
