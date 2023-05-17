import React from "react";
import HeaderOtherPage from "../Components/Header/HeaderOtherPage/HeaderOtherPage";
import { useMediaQuery } from "react-responsive";

export default function Layout({ Components }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <HeaderOtherPage />
      <div className={`flex-grow ${isMobile ? "pt-[70px]" : "pt-[80px]"}`}>
        <Components />
      </div>
    </>
  );
}
