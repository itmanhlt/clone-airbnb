import { Tag } from "antd";

export const headerColums = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên Vị Trí",
    dataIndex: "tenViTri",
    key: "tenViTri",
  },
  {
    title: "Tỉnh Thành",
    dataIndex: "tinhThanh",
    key: "tinhThanh",
  },
  {
    title: "Quốc Gia",
    dataIndex: "quocGia",
    key: "quocGia",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (url) => {
      return <img width={100} height={100} src={url} alt="" />;
    },
  },
  {
    title: "Thao Tác",
    dataIndex: "action",
    key: "action",
  },
];
