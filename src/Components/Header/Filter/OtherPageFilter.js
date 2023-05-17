import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showFilter } from "../../../redux/reducers/filterSlice";

export default function OtherPageFilter() {
  let dispatch = useDispatch();
  let status = useSelector((state) => state.filter.status);

  return (
    <div>
      {status === "top-[-100px]" ? (
        <div className="px-6 pt-[14px] md:p-0">
          <div
            onClick={() => dispatch(showFilter())}
            className="flex justify-between items-center md:gap-28 shadow-lg cursor-pointer border px-5 py-1 rounded-[1000px]"
          >
            <div className="font-medium text-[14px] truncate">
              Bắt đầu tìm kiếm
            </div>
            <div className="p-2 border rounded-[50%] bg-[#92174D] text-white">
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => dispatch(showFilter())}
          className="cursor-pointer flex space-x-5 text-[14px] pl-16"
        >
          <p>Chỗ ở</p>
          <p>Trải nghiệm</p>
          <p>Trải nghiệm trực tuyến</p>
        </div>
      )}
    </div>
  );
}
