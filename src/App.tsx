import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";

const Page = ({ isHomepage }: { isHomepage: boolean }) => (
  <>
    <Sidebar />
    <Main isHomepage={isHomepage} />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    function handleContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="frame">
      <Router>
        <Routes>
          <Route path="/" element={<Page isHomepage={true} />} />
          <Route path="/all" element={<Page isHomepage={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
