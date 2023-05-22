import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col px-6 pt-8 border-t bg-gray-100 mt-6">
      <div className="flex flex-col mb-6 md:flex-row md:mb-0">
        <div className="border-b pb-6 mb-6 md:w-1/4">
          <h3 className="font-medium">Hỗ trợ</h3>
          <ul className="space-y-2 mt-2">
            <li className="hover:underline duration-500">
              <a href="/">Trung tâm trợ giúp</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">AirCover</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Hỗ trợ người khuyết tật</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Các tùy chọn hủy</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">
                Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
              </a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Báo cáo lo ngại của hàng xóm</a>
            </li>
          </ul>
        </div>
        <div className="border-b pb-6 mb-6 md:w-1/4">
          <h3 className="font-medium">Cộng đồng</h3>
          <ul className="space-y-2 mt-2">
            <li className="hover:underline duration-500">
              <a href="/"></a>Airbnb.org: nhà ở cứu trợ
            </li>
            <li className="hover:underline duration-500">
              <a href="/"></a>Chống phân biệt đối xử
            </li>
          </ul>
        </div>
        <div className="border-b pb-6 mb-6 md:w-1/4">
          <h3 className="font-medium">Đón tiếp khách</h3>
          <ul className="space-y-2 mt-2">
            <li className="hover:underline duration-500">
              <a href="/">Cho thuê nhà trên Airbnb</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Cho thuê nhà trên Airbnb</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Xem tài nguyên đón tiếp khách</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Truy cập diễn đàn cộng đồng</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Đón tiếp khách có trách nhiệm</a>
            </li>
          </ul>
        </div>
        <div className="border-b pb-6 md:w-1/4 md:mb-6">
          <h3 className="font-medium">Airbnb</h3>
          <ul className="space-y-2 mt-2">
            <li className="hover:underline duration-500">
              <a href="/">Trang tin tức</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Tìm hiểu các tính năng mới</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Thư ngỏ từ các nhà sáng lập</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Cơ hội nghề nghiệp</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="/">Nhà đầu tư</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="font-medium md:flex md:justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="flex mb-2">
            <span>&#169; 2023 Airbnb, Inc</span>
          </div>
          <div className="lg:ml-2">
            <ol className="space-y-2 md:flex md:space-y-0 lg:space-x-2">
              <li className="flex space-x-2 hover:underline duration-500">
                <span>.</span>
                <a href="/">Quyền riêng tư</a>
              </li>
              <li className="flex space-x-2 hover:underline duration-500">
                <span>.</span>
                <a href="/">Điều khoản</a>
              </li>
              <li className="flex space-x-2 hover:underline duration-500">
                <span>.</span>
                <a href="/">Sơ đồ trang web</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="space-y-2 mt-2 md:flex md:space-y-0 md:mt-0 lg:space-x-6">
          <div>
            <button className="flex items-center space-x-2 hover:underline duration-500 md:space-x-0 lg:space-x-2">
              <span>
                <RiGlobalLine />
              </span>
              <span>Tiếng Việt (VN)</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-2 hover:underline duration-500 md:space-x-0 lg:space-x-2">
              <span>
                <BsCurrencyDollar />
              </span>
              <span>USD</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-2 hover:underline duration-500 md:space-x-0 lg:space-x-2">
              <span>Hỗ trợ tài nguyên</span>
              <span>
                <IoIosArrowUp />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
