import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { localService } from "../../services/LocalService";

export default function UserMenuMobile() {
  const [status, setStatus] = useState("visible");
  const [scroll, setScroll] = useState(0);
  const [nextScroll, setNextScroll] = useState(0);
  let user = localService.get();
  useEffect(() => {
    const handleScroll = (event) => {
      setNextScroll(scroll);
      setScroll(Math.floor(window.scrollY));
    };

    handleStatus();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  let handleStatus = () => {
    if (nextScroll < scroll) {
      setStatus("hidden");
    } else {
      setStatus("visible");
    }
  };
  return (
    <div
      style={{ visibility: status }}
      className="fixed bottom-0 w-full bg-white shadow-2xl z-[1200]"
    >
      <div className="flex justify-evenly items-center -space-x-10  py-2">
        <NavLink to="/" className="flex flex-col justify-center items-center">
          <div>
            <AiOutlineSearch size={"24px"} />
          </div>
          <div className="text-xs">Khám phá</div>
        </NavLink>
        <NavLink to="/" className="flex flex-col justify-center items-center">
          <div>
            <AiOutlineHeart size={"24px"} />
          </div>
          <div className="text-xs">Yêu thích</div>
        </NavLink>
        {!user ? (
          <NavLink
            to="/login"
            className="flex flex-col justify-center items-center"
          >
            <div>
              <IoPersonOutline size={"24px"} />
            </div>
            <div className="text-xs">Đăng nhập</div>
          </NavLink>
        ) : (
          <NavLink className="flex flex-col justify-center items-center">
            <img className="w-6" src={user.user.avatar} alt="" />
            <div className="text-xs">{user.user.name}</div>
          </NavLink>
        )}
      </div>
    </div>
  );
}
