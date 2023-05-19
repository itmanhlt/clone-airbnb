import React from "react";
import HeaderHomePage from "../Components/Header/HeaderHomePage/HeaderHomePage";
import { useMediaQuery } from "react-responsive";

export default function LayoutHomePage({ Components }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <HeaderHomePage />
      <div className={`flex-grow ${isMobile ? "pt-[80px]" : "pt-[80px]"}`}>
        <Components />
      </div>
    </>
  );
}
