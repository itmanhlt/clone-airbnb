import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { Select } from "antd";
import dayjs from "dayjs";
import moment from "moment/moment";
import { locationService } from "../../../../services/locationService";
import { useNavigate } from "react-router-dom";
import { hiddenFilter, sendID } from "../../../../redux/reducers/filterSlice";

export default function ShowFilter() {
  let status = useSelector((state) => state.filter.status);
  let cityID = useSelector((state) => state.filter.cityID);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onChangeStart = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeEnd = (date, dateString) => {
    console.log(date, dateString);
  };
  let date = moment();
  let currentDate = date.format("D-MM-YYYY");
  let [locate, setLocate] = useState([]);
  let cloneArr = [];

  useEffect(() => {
    let getLocate = async () => {
      let res = await locationService.getLocate();
      res.data.content.map((item) => {
        cloneArr.push(item);
        setLocate(cloneArr);
      });
    };
    getLocate();
  }, []);
  let option = () => {
    return locate.map((item) => {
      return {
        value: item.id,
        label: item.tinhThanh,
      };
    });
  };

  const { Option } = Select;
  function onChange(value) {
    dispatch(sendID(value));
  }
  let handleSearch = () => {
    navigate(`/RoomByCityPage/${cityID}`);
    dispatch(hiddenFilter());
  };

  const dateFormat = "DD-MM-YYYY";
  return (
    <div
      className={`fixed w-full ${status} bg-white z-[1200] shadow-xl duration-500`}
    >
      <div className="flex justify-center items-center pb-3">
        <div className="border rounded-[1000px] flex justify-center items-center px-5 py-3 text-[14px] space-x-10">
          <div>
            <h1>Địa điểm</h1>
            <Select
              showSearch
              style={{ width: 140 }}
              bordered={false}
              placeholder="Địa điểm"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0 ||
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {option().map((item) => {
                return <Option key={item.value}>{item.label}</Option>;
              })}
            </Select>
          </div>
          <div className="w-36 hidden lg:block">
            <h1>Nhận phòng</h1>
            <DatePicker
              placeholder="Chọn ngày"
              defaultValue={dayjs(`${currentDate}`, dateFormat)}
              format={dateFormat}
              onChange={onChangeStart}
              bordered={false}
            />
          </div>
          <div className="w-36 hidden lg:block">
            <h1>Trả phòng</h1>
            <DatePicker
              placeholder="Chọn ngày"
              defaultValue={dayjs(`${currentDate}`, dateFormat)}
              format={dateFormat}
              onChange={onChangeEnd}
              bordered={false}
            />
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <h1>Khách</h1>
              <input
                className="w-36"
                type="text"
                placeholder="Thêm khách"
                style={{ outline: "none" }}
              />
            </div>
            <div className="px-5 py-2 border rounded-full bg-[#b91c1c] hover:bg-red-800 duration-500">
              <button
                onClick={handleSearch}
                className="font-medium text-white text-[12px] md:text-[14px]"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
