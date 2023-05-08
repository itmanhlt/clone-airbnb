import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { showFilter } from "../../../redux/filterSlice";

export default function OtherPageFilter() {
  let dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(showFilter())}
      className="flex items-center gap-28 shadow-md cursor-pointer border px-5 py-1 rounded-[1000px]"
    >
      <div className="font-medium text-[14px]">Bắt đầu tìm kiếm</div>
      <div className="p-2 border rounded-[50%] bg-[#92174D] text-white">
        <AiOutlineSearch />
      </div>
    </div>
  );
}
