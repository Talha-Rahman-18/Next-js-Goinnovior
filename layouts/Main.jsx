"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = ({ children }) => {
  useEffect(() => {
    /* Domain Redirect */
    if (window.location.hostname === "www.aaa-fe.com") {
      const redirectUrl =
        "https://aaa-fe.com" +
        window.location.pathname +
        window.location.search +
        window.location.hash;

      window.location.replace(redirectUrl);
    }

    /* Init Libraries */
    AOS.init();
  }, []);

  return (
    <div>
      <Toaster />
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default Main;
