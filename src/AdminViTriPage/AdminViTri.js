import React, { useEffect, useState } from "react";
import { AdminServ } from "../services/AdminService";
import { Button, Table, Modal, Form, Input, Row, Col, message } from "antd";
import { headerColums } from "./Utils";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/spinnerSlice";

export default function AdminViTri() {
  const [componentSize, setComponentSize] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useList, setUserList] = useState([]);
  let dispatch = useDispatch();
  const [user, setUser] = useState({
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

  const onFinish = () => {
    updateUser(user.id, user);
    fetchUser();
  };
  let deleteUser = (taiKhoan) => {
    AdminServ.DeleteUser(taiKhoan)
      .then((res) => {
        dispatch(setLoadingOn());
        fetchUser();
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
        setUser(res.data.content);
        fetchUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let fetchUser = () => {
    AdminServ.getListUser()
      .then((res) => {
        dispatch(setLoadingOff());
        let listUsers = res.data.content.map((users) => {
          return {
            ...users,
            action: (
              <div className="space-x-4">
                <Button
                  onClick={() => {
                    deleteUser(users.id);
                  }}
                  type="primary"
                  danger
                >
                  Xóa
                </Button>
                <Button
                  onClick={() => {
                    showModal();
                    setUser(users);
                  }}
                  className="bg-yellow-500"
                >
                  Edit
                </Button>
              </div>
            ),
          };
        });
        setUserList(listUsers);
      })
      .catch((err) => {
        dispatch(setLoadingOff());
      });
  };
  console.log(user);
  useEffect(() => {
    dispatch(setLoadingOn());
    fetchUser();
  }, []);
  const [form] = Form.useForm();

  const handleOnchangeForm = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };
  return (
    <div>
      <Table dataSource={useList} columns={headerColums} />
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
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Email:">
            <Input
              onChange={(value) => {
                setUser({ ...user, email: value.target.value });
              }}
              value={user.email}
            />
          </Form.Item>
          <Form.Item label="Phone:">
            <Input
              onChange={(value) => {
                setUser({ ...user, phone: value.target.value });
              }}
              value={user.phone}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelAlign="left" label="Gender:">
                <select
                  onChange={(e) => {
                    setUser({ ...user, gender: e.target.value });
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
                    setUser({ ...user, role: e.target.value });
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
                setUser({ ...user, birthday: value.target.value });
              }}
              value={user.birthday}
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
                updateUser(user.id, data);
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