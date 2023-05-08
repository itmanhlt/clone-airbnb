import React from "react";
import { useSelector } from "react-redux";

export default function ShowFilter() {
  let status = useSelector((state) => state.filter.status);
  return (
    <div className="absolute top-20" style={{ display: status }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam
      mollitia laboriosam
    </div>
  );
}
