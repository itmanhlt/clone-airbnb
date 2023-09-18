import { Tag } from "antd";

export const headerColums = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    key: "birthday",
  },
  {
    title: "Loại Người Dùng",
    dataIndex: "loaiNguoiDung",
    key: "loaiNguoiDung",
    render: (_, record) => {
      if (record.role === "ADMIN") {
        return <Tag color="red"> Quản Trị</Tag>;
      } else {
        return <Tag color="orange">Khách Hàng</Tag>;
      }
    },
  },
  {
    title: "Thao Tác",
    dataIndex: "action",
    key: "action",
  },
];
