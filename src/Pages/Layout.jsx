import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "../App.css";

const Layout = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      {showButton && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="gototop"
        >
          <i className="bi bi-arrow-up-short"></i>
        </div>
      )}
    </>
  );
};

export default Layout;
