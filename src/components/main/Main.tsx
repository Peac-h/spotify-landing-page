import { useEffect, useRef, useState } from "react";
import "./Main.scss";
import Header from "./header/Header";
import Albums from "./albums/Albums";
import Navigation from "./navigation/Navigation";

export function Main({ isHomepage }: { isHomepage: boolean }) {
  const [scrolledY, setScrolledY] = useState<number>(0);
  const mainBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebarBody = mainBodyRef.current;

    function handleScroll() {
      setScrolledY(sidebarBody?.scrollTop || 0);
    }

    if (sidebarBody) {
      sidebarBody.addEventListener("scroll", handleScroll);

      return () => {
        sidebarBody.removeEventListener("scroll", handleScroll);
      };
    }
  }, [setScrolledY]);

  return (
    <div className={`component main`} ref={mainBodyRef}>
      <Header scrolledValue={scrolledY} />
      <Albums isDefault={isHomepage} />
      <Navigation />
    </div>
  );
}
