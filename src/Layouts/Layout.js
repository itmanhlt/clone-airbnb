import React from "react";
import HeaderOtherPage from "../Components/Header/HeaderOtherPage/HeaderOtherPage";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer/Footer";

export default function Layout({ Components }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="flex flex-col h-full min-h-screen">
      <HeaderOtherPage />
      <div className={`flex-grow ${isMobile ? "pt-[80px]" : "pt-[80px]"}`}>
        <Components />
      </div>
      <Footer />
    </div>
  );
}
