import { useEffect, useRef, useState } from "react";
import "./Library.scss";

import { LIBRARY_CHAPTERS } from "../../../data/sidebar";
import { Svg } from "../../elements/icon/Icons";
import Tooltip from "../../elements/tooltip/Tooltip";

function Library() {
  const [scrolledY, setScrolledY] = useState(0);
  const sidebarBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebarBody = sidebarBodyRef.current;

    function handleScroll() {
      setScrolledY(sidebarBody?.scrollTop || 0);
    }

    if (sidebarBody) {
      sidebarBody.addEventListener("scroll", handleScroll);
      return () => {
        sidebarBody.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const [tooltips, setTooltips] = useState({
    onLibrary: false,
    onCreate: false,
  });

  const handleTooltip = (tooltipKey: string, isVisible: boolean) => {
    setTooltips((prevState) => ({
      ...prevState,
      [tooltipKey]: isVisible,
    }));
  };

  return (
    <div className={`sidebar-library`}>
      <div
        className={`sidebar-library__header ${
          scrolledY > 0 ? "sidebar-library__header--shadow" : ""
        }`}
      >
        <button
          className={`sidebar-library__header-button`}
          onMouseEnter={() => handleTooltip("onLibrary", true)}
          onMouseLeave={() => handleTooltip("onLibrary", false)}
        >
          <Svg
            name="library"
            height={24}
            width={24}
            className="sidebar-library__svg--left"
          />
          <span className={`sidebar-library__button-text`}>Your Library</span>
          {tooltips.onLibrary && (
            <Tooltip text="Collapse Your Library" active={true} />
          )}
        </button>
        <button
          className={`sidebar-library__header-button sidebar-library__header-button--right`}
          onMouseEnter={() => handleTooltip("onCreate", true)}
          onMouseLeave={() => handleTooltip("onCreate", false)}
        >
          <Svg
            name="plus"
            height={16}
            width={16}
            className="sidebar-library__svg--right"
          />
          {tooltips.onCreate && (
            <Tooltip text="Create playlist or folder" active={true} />
          )}
        </button>
      </div>

      <div className={`sidebar-library__body`} ref={sidebarBodyRef}>
        {LIBRARY_CHAPTERS.map((chapter, index) => (
          <Chapter key={index} {...chapter} />
        ))}
      </div>
    </div>
  );
}

function Chapter({
  title,
  chapterText,
  buttonText,
}: {
  title: string;
  chapterText: string;
  buttonText: string;
}) {
  return (
    <div className={`sidebar-library__chapter`}>
      <div className={`sidebar-library__chapter-title`}>{title}</div>
      <div className={`sidebar-library__chapter-text`}>{chapterText}</div>
      <button className={`sidebar-library__chapter-button`}>
        {buttonText}
      </button>
    </div>
  );
}

export default Library;
