import React from "react";
import { useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => {
    return state.spinnerSlice;
  });
  return isLoading ? (
    <div
      style={{ background: "#000000" }}
      className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-50"
    >
      <CircleLoader size={100} color="#B2FFFF" />
    </div>
  ) : (
    <></>
  );
}
