import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function UserMenuDeskTop() {
  const [status, setStatus] = useState("none");
  let handlePopup = () => {
    if (status === "none") {
      setStatus("block");
    } else {
      setStatus("none");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center space-x-4">
        <div className="cursor-pointer text-[14px] font-medium hidden lg:block">
          Cho thuê chỗ ở qua Airbnb
        </div>
        <div className="cursor-pointer">
          <BiGlobe />
        </div>
        <div
          onClick={handlePopup}
          className="flex items-center p-2 border rounded-[1000px] space-x-2 cursor-pointer hover:shadow-md duration-500"
        >
          <div>
            <AiOutlineMenu />
          </div>
          <div className="text-[20px]">
            <IoPersonOutline />
          </div>
        </div>
      </div>
      <div
        style={{ display: status }}
        className="absolute bg-white right-10 top-16 shadow-md rounded-lg"
      >
        <div className="flex flex-col border-b p-3 pr-10 space-y-3">
          <NavLink
            className="font-medium hover:text-[#FF385C] duration-500"
            to="/"
          >
            Đăng ký
          </NavLink>
          <NavLink className="hover:text-[#FF385C] duration-500" to="/">
            Đăng nhập
          </NavLink>
        </div>
        <div className="flex flex-col p-3 pr-10 space-y-3">
          <NavLink className="hover:text-[#FF385C] duration-500" to="/">
            Cho thuê chỗ ở qua Airbnb
          </NavLink>
          <NavLink className="hover:text-[#FF385C] duration-500" to="/">
            Trợ giúp
          </NavLink>
        </div>
      </div>
    </div>
  );
}
