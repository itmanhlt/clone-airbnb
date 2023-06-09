import React, { useEffect, useState } from "react";
import { AdminServ } from "../services/AdminService";
import { Button, Table, Modal, Form, Input, Row, Col, message } from "antd";
import { headerColums } from "./Utils";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/spinnerSlice";

export default function AdminThongTinPhong() {
  const [componentSize, setComponentSize] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomList, setRoomList] = useState([]);
  let dispatch = useDispatch();
  const [roomInfo, setRoomInfo] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: "",
    role: "",
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
  useEffect(() => {
    dispatch(setLoadingOn());
    fetchRoomInfo();
  }, []);

  const onFinish = () => {
    updateUser(roomList.id, roomList);
    fetchRoomInfo();
  };
  let deleteInfoRoom = (id) => {
    AdminServ.deletleInfoRoom(id)
      .then((res) => {
        dispatch(setLoadingOn());
        fetchRoomInfo();
      })
      .catch((err) => {
        dispatch(setLoadingOff());
      });
  };
  let updateUser = (id, data) => {
    console.log(data);
    AdminServ.UpdateUser(id, data)
      .then((res) => {
        message.success("Success");
        setRoomInfo(res.data.content);
        fetchRoomInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let fetchRoomInfo = () => {
    AdminServ.getInfoRoom()
      .then((res) => {
        dispatch(setLoadingOff());
        let listRoomInfo = res.data.content.map((rooms) => {
          console.log(rooms);
          return {
            ...rooms,
            action: (
              <div className="space-x-4">
                <Button
                  onClick={() => {
                    deleteInfoRoom(rooms.id);
                  }}
                  type="primary"
                  danger
                >
                  Xóa
                </Button>
                <Button
                  onClick={() => {
                    showModal();
                    setRoomInfo(rooms);
                  }}
                  className="bg-yellow-500"
                >
                  Edit
                </Button>
              </div>
            ),
          };
        });
        setRoomList(listRoomInfo);
      })
      .catch((err) => {
        dispatch(setLoadingOff());
      });
  };

  const [form] = Form.useForm();

  const handleOnchangeForm = (e) => {
    setRoomInfo(e.target.value);
  };
  return (
    <div>
      <Table dataSource={roomList} columns={headerColums} />
      <Modal
        title="Edit User"
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
            label="Name:"
          >
            <Input
              value={roomInfo.name}
              onChange={(e) => {
                setRoomList({ ...roomList, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Email:">
            <Input
              onChange={(value) => {
                setRoomList({ ...roomList, email: value.target.value });
              }}
              value={roomInfo.email}
            />
          </Form.Item>
          <Form.Item label="Phone:">
            <Input
              onChange={(value) => {
                setRoomList({ ...roomList, phone: value.target.value });
              }}
              value={roomInfo.phone}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelAlign="left" label="Gender:">
                <select
                  onChange={(e) => {
                    setRoomList({ ...roomList, gender: e.target.value });
                  }}
                  name=""
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Role:">
                <select
                  id="select"
                  onChange={(e) => {
                    setRoomList({ ...roomList, role: e.target.value });
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="BirthDay:">
            <Input
              onChange={(value) => {
                setRoomInfo({ ...roomList, birthday: value.target.value });
              }}
              value={roomInfo.birthday}
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
                updateUser(roomList.id, data);
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
