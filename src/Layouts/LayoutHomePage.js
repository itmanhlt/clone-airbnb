import React from "react";
import HeaderHomePage from "../Components/Header/HeaderHomePage/HeaderHomePage";
import { useMediaQuery } from "react-responsive";

export default function LayoutHomePage({ Components }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <HeaderHomePage />
      <div className={`flex-grow ${isMobile ? "py-[70px]" : "pt-[90px]"}`}>
        <Components />
      </div>
    </>
  );
}
