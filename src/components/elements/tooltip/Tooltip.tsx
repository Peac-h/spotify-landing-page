import { useState, useEffect } from "react";
import "./Tooltip.scss";

const Tooltip = ({
  text,
  active,
  delay,
}: {
  text: string;
  active: boolean;
  delay?: number;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [animate, setAnimate] = useState(false);

  setTimeout(() => setAnimate(true), delay ? delay : 100);

  useEffect(() => {
    if (active) setShowTooltip(true);
  }, [active, setShowTooltip]);

  return (
    showTooltip && (
      <div className={`tooltip ${animate ? "show" : ""}`}>{text}</div>
    )
  );
};

export default Tooltip;
