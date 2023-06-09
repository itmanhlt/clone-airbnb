export const headerColums = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên Phòng",
    dataIndex: "tenPhong",
    key: "tenPhong",
  },
  {
    title: "Phòng Ngủ",
    dataIndex: "phongNgu",
    key: "email",
  },
  {
    title: "Khách",
    dataIndex: "khach",
    key: "khach",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (url) => {
      return <img width={100} src={url} alt="" />;
    },
  },
  {
    title: "Thao Tác",
    dataIndex: "action",
    key: "action",
  },
];
