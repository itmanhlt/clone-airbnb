import React from "react";
import HeaderOtherPage from "../Components/Header/HeaderOtherPage/HeaderOtherPage";

export default function Layout({ Components }) {
  return (
    <>
      <HeaderOtherPage />
      <div className="flex-grow">
        <Components />
      </div>
    </>
  );
}
