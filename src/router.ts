// eslint-disable-next-line no-unused-vars
import { title } from "process";

export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];

export const menus = [
  {
    path: "/", // the url
    title: "Trang chủ"
  },
  {
    path: "#", // the url
    title: "Đào tạo từ xa",
    childs: [
      {
        path: "/danh-sach-truong-nganh",
        title: "Danh sách trường và ngành đào tạo"
      }
    ]
  },

  {
    path: "#", // the url
    title: "Hướng nghiệp",
    childs: [
      {
        path: "/cau-hoi-trac-nghiem",
        title: "Tư vấn chọn ngành"
      },

      {
        path: "/cau-hoi-trac-nghiem",
        title: "Tư vấn chọn nghề"
      },
      {
        path: "/cau-hoi-trac-nghiem",
        title: "Tư vấn chọn trường"
      }
    ]
  },
  {
    path: "#", // the url
    title: "Trắc nghiệm ngành nghề",
    childs: [
      {
        path: "/cau-hoi-trac-nghiem",
        title: "Chọn nghề gì?"
      },

      {
        path: "/cau-hoi-trac-nghiem",
        title: "Học ngành gì ?"
      }
    ]
  },

  {
    path: "/lien-he", // the url
    title: "Liên hệ"
  },

  {
    path: "/tin-tuc", // the url
    title: "Tin tức"
  },

  {
    path: "/tin-diem-chuan",
    title: "Tin điểm chuẩn"
  }
];
