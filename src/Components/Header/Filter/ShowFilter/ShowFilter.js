import React from "react";
import { useSelector } from "react-redux";

export default function ShowFilter() {
  let status = useSelector((state) => state.filter.status);
  return (
    <div
      className={`fixed w-full text-center ${status} bg-white z-[1200] shadow-xl duration-500`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam
      mollitia laboriosam
    </div>
  );
}
