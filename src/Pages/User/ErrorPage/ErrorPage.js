import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row px-6 md:pt-10 md:px-10 lg:px-20">
      <div className="error__content mb-8 md:w-[60%] lg:w-[70%]">
        <h1 className="text-[26px] font-medium ">
          Có vẻ như chúng tôi không tìm được trang bạn cần
        </h1>
        <p className="py-5">Dưới đây là một số liên kết hữu ích để thay thế:</p>
        <ul className="font-medium underline space-y-2">
          <li>
            <a href="/">Nhà</a>
          </li>
          <li>
            {" "}
            <a href="/">Đi lại cùng Airbnb</a>
          </li>
          <li>
            <a href="/">Đón tiếp khách trên Airbnb</a>
          </li>
          <li>
            <a href="/">Tin cậy và an toàn</a>
          </li>
          <li>
            <a href="/">Sơ đồ trang web</a>
          </li>
        </ul>
      </div>
      <div className="error__img md:w-[40%] lg:w-[30%]">
        <img
          className="w-60 object-cover lg:pl-16"
          aria-hidden="true"
          alt="Cô gái làm rớt kem rồi."
          elementtiming="LCP-target"
          src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
          data-original-uri="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
        />
      </div>
    </div>
  );
}
