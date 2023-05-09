import React from "react";
import RoomList from "../../../Components/RoomList/RoomList";

export default function HomePage() {
  return (
    <div id="homePage">
      {/* Render Danh sách phòng cho thuê */}
      <RoomList />
    </div>
  );
}
