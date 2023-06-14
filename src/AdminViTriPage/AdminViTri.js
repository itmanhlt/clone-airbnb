import React, { useEffect, useState } from "react";
import { AdminServ } from "../services/AdminService";
import { Button, Table, Modal, Form, Input, Row, Col, message } from "antd";
import { headerColums } from "./Utils";
import { useDispatch } from "react-redux";

export default function AdminUserPage() {
  const [componentSize, setComponentSize] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState([]);
  let dispatch = useDispatch();
  const [viTri, setViTri] = useState({
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
    updateUser(viTri.id, position);
    fetchViTri();
  };
  let deleteUser = (taiKhoan) => {
    AdminServ.DeleteUser(taiKhoan)
      .then((res) => {
        fetchViTri();
      })
      .catch((err) => {});
  };
  let updateUser = (id, data) => {
    console.log(data);
    AdminServ.UpdateUser(id, data)
      .then((res) => {
        message.success("Success");
        setViTri(res.data.content);
        fetchViTri();
      })
      .catch((err) => {});
  };
  let fetchViTri = () => {
    AdminServ.getViTri()
      .then((res) => {
        console.log(res);
        let listViTri = res.data.content.map((viTri) => {
          return {
            ...viTri,
            action: (
              <div className="space-x-4">
                <Button
                  onClick={() => {
                    deleteUser(viTri.id);
                  }}
                  type="primary"
                  danger
                >
                  Xóa
                </Button>
                <Button
                  onClick={() => {
                    showModal();
                    setViTri(viTri);
                  }}
                  className="bg-yellow-500"
                >
                  Edit
                </Button>
              </div>
            ),
          };
        });
        setPosition(listViTri);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchViTri();
  }, []);
  const [form] = Form.useForm();

  const handleOnchangeForm = (e) => {
    setViTri(e.target.value);
  };
  return (
    <div>
      <Table dataSource={position} columns={headerColums} />
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
              value={position.name}
              onChange={(e) => {
                setViTri({ ...viTri, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Email:">
            <Input
              onChange={(value) => {
                setViTri({ ...viTri, email: value.target.value });
              }}
              value={position.email}
            />
          </Form.Item>
          <Form.Item label="Phone:">
            <Input
              onChange={(value) => {
                setViTri({ ...viTri, phone: value.target.value });
              }}
              value={viTri.phone}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelAlign="left" label="Gender:">
                <select
                  onChange={(e) => {
                    setViTri({ ...viTri, gender: e.target.value });
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
                    setViTri({ ...viTri, role: e.target.value });
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
                setViTri({ ...viTri, birthday: value.target.value });
              }}
              value={viTri.birthday}
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
                updateUser(viTri.id, data);
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
