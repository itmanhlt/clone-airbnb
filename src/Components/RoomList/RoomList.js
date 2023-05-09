import React, { useEffect, useState } from "react";
import { roomService } from "../../services/RoomService";
import RoomItem from "./RoomItem/RoomItem";
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";

export default function RoomList() {
  const [roomList, setRoomList] = useState([]);
  const [roomType, setRoomType] = useState([
    {
      src: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      name: "Phòng",
    },
    {
      src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      name: "Cabin",
    },
    {
      src: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
      name: "Hướng biển",
    },
    {
      src: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
      name: "Ven hồ",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "Thật ấn tượng",
    },
    {
      src: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      name: "Khung cảnh tuyệt vời",
    },
    {
      src: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
      name: "Biệt thự",
    },
    {
      src: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      name: "Hồ bơi tuyệt vời",
    },
    {
      src: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
      name: "Nhà trên cây",
    },
    {
      src: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
      name: "Được ưa chuộng",
    },
    {
      src: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
      name: "Nhà nhỏ",
    },
    {
      src: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
      name: "Nhà thuyền",
    },
    {
      src: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
      name: "Lâu đài",
    },
    {
      src: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
      name: "Đảo",
    },
    {
      src: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
      name: "Công viên quốc gia",
    },
    {
      src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      name: "Nông thôn",
    },
    {
      src: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
      name: "Luxe",
    },
    {
      src: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
      name: "Vườn nho",
    },
    {
      src: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
      name: "Vui chơi",
    },
  ]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    roomService
      .getRoomList()
      .then((res) => {
        setRoomList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderRoomList = () => {
    return roomList.map((room, index) => {
      return <RoomItem room={room} key={index} />;
    });
  };
  let renderRoomType = () => {
    return roomType.map((room, index) => {
      return (
        <div
          key={index}
          className="flex flex-col items-center text-[#717171] imgRoomType cursor-pointer"
        >
          <img
            src={room.src}
            style={{
              width: "24px",
            }}
          />
          <p className="text-sm font-medium">{room.name}</p>
        </div>
      );
    });
  };

  return (
    <div id="roomList" className="px-5 lg:px-10">
      {/* render carousel loại phòng */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {renderRoomType()}
      </Carousel>
      {/* render danh sách phòng */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-max content-center mt-6">
        {renderRoomList()}
      </div>
    </div>
  );
}
