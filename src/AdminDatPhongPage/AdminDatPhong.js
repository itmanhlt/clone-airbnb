import React, { useEffect, useState } from "react";
import { AdminServ } from "../services/AdminService";
import {
  Button,
  Table,
  Tooltip,
  Modal,
  Form,
  Input,
  Row,
  Col,
  message,
} from "antd";
import { headerColums } from "./Utils";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/spinnerSlice";

export default function AdminDatPhong() {
  const [componentSize, setComponentSize] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomList, setRoomList] = useState([]);
  let dispatch = useDispatch();
  const [room, setRoom] = useState({
    maNguoiDung: "",
    maPhong: "",
    ngayDen: "",
    ngayDi: "",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {
    updateRoom(room.id, room);
    fetchRoom();
  };
  let deleteRoom = (id) => {
    AdminServ.deleteRoom(id)
      .then((res) => {
        dispatch(setLoadingOn());
        message.success("Delete Success!");
        fetchRoom();
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
      });
  };
  let updateRoom = (id, data) => {
    AdminServ.updateRoom(id, data)
      .then((res) => {
        message.success("Update Success!");
        setRoom(res.data.content);
        fetchRoom();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let fetchRoom = () => {
    AdminServ.getRoomList()
      .then((res) => {
        console.log(res);
        dispatch(setLoadingOff());
        let listUsers = res.data.content.map((room) => {
          console.log(room);
          return {
            ...room,
            action: (
              <div className="space-x-4">
                <Tooltip
                  trigger={"click"}
                  title={
                    <div>
                      Bạn Có Chắc Muốn Xóa Không?
                      <div className="space-x-2">
                        <Button
                          className="text-white bg-black"
                          onClick={() => {
                            deleteRoom(room.id);
                          }}
                        >
                          Đồng Ý
                        </Button>
                        <Button className="text-white bg-black">
                          Không Chịu
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <Button className="text-white bg-red-500">Xóa</Button>
                </Tooltip>
                <Button
                  onClick={() => {
                    showModal();
                    setRoom(room);
                  }}
                  className="bg-yellow-500"
                >
                  Edit
                </Button>
              </div>
            ),
          };
        });
        setRoomList(listUsers);
      })
      .catch((err) => {
        dispatch(setLoadingOff());
      });
  };
  useEffect(() => {
    dispatch(setLoadingOn());
    fetchRoom();
  }, []);
  const [form] = Form.useForm();

  const handleOnchangeForm = (e) => {
    setRoom(e.target.value);
  };
  return (
    <div>
      <Table dataSource={roomList} columns={headerColums} />
      <Modal
        title="Edit Room"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          onFinish={onFinish}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={handleOnchangeForm}
          size={componentSize}
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Name!" }]}
            label="Mã Người Dùng:"
          >
            <Input
              value={room.maNguoiDung}
              onChange={(e) => {
                setRoom({ ...room, tenPhong: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Mã Phòng:">
            <Input
              onChange={(value) => {
                setRoom({ ...room, maPhong: value.target.value });
              }}
              value={room.maPhong}
            />
          </Form.Item>
          <Form.Item label="Ngày Đến:">
            <Input
              onChange={(value) => {
                setRoom({ ...room, ngayDen: value.target.value });
              }}
              value={room.ngayDen}
            />
          </Form.Item>
          <Form.Item label="Ngày Đi:">
            <Input
              onChange={(value) => {
                setRoom({ ...room, ngayDi: value.target.value });
              }}
              value={room.ngayDi}
            />
          </Form.Item>
          <Form.Item
            className="text-right"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-500 duration-200 text-white"
              type="primary"
              htmlType="submit"
              onClick={(data) => {
                updateRoom(room.id, data);
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
