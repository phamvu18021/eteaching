// eslint-disable-next-line no-unused-vars
import path from "path";

export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
    childs2?: {
      path: string;
      title: string;
    }[];
  }[];
}[];

export const menus = [
  // {
  //   path: "/", // the url
  //   title: "Trang chủ"
  // },
  {
    path: "#", // the url
    title: "Đào tạo từ xa",
    childs: [
      {
        path: "#",
        title: "Trường",
        childs2: [
          {
            path: "/dai-hoc-kinh-te-quoc-dan",
            title: "Đại học Kinh tế Quốc dân"
          },
          {
            path: "/dai-hoc-mo-ha-noi",
            title: "Đại học Mở Hà Nội"
          },
          {
            path: "/dai-hoc-thai-nguyen",
            title: "Đại học Thái Nguyên"
          },
          {
            path: "/hoc-vien-cong-nghe-buu-chinh-vien-thong",
            title: "Học Viện Công nghệ Bưu chính Viễn thông"
          },
          {
            path: "/hoc-vien-tai-chinh",
            title: "Học Viện Tài Chính"
          },
          {
            path: "/dai-hoc-ky-thuat-cong-nghiep-thai-nguyen",
            title: "Đại học Kỹ thuật công nghiệp Thái Nguyên"
          },
          {
            path: "/dai-hoc-nong-lam-thai-nguyen",
            title: "Đại học Nông lâm Thái Nguyên"
          }
        ]
      },
      {
        path: "#",
        title: "Khối ngành",
        childs2: [
          {
            path: "#",
            title: "Khối ngành ngôn ngữ"
          },
          {
            path: "#",
            title: "Khối ngành Kinh tế & Quản trị"
          },
          {
            path: "#",
            title: "Khối ngành Luật"
          },
          {
            path: "#",
            title: "Khối ngành Công nghệ"
          },
          {
            path: "#",
            title: "Khối ngành Công nghiệp"
          },
          {
            path: "#",
            title: "Khối ngành Nông nghiệp"
          }
        ]
      }
    ]
  },
  {
    path: "/dich-vu-dao-tao",
    title: "Dịch vụ đào tạo",
    childs: [
      {
        path: "/dich-vu-dao-tao/tim-kiem?type=0",
        title: "Chương trình dài hạn"
      },
      {
        path: "/dich-vu-dao-tao/tim-kiem?type=1",
        title: "Khóa học ngắn hạn"
      }
    ]
  },
  {
    path: "#",
    title: "Trường và ngành",
    childs: [
      {
        path: "/truong",
        title: "Tổng hợp các trường"
      },
      {
        path: "/nganh",
        title: "Tổng hợp các ngành"
      }
    ]
  },
  // {
  //   path: "#", // the url
  //   title: "Hướng nghiệp",
  //   childs: [
  //     {
  //       path: "#",
  //       title: "Tư vấn chọn ngành"
  //     },

  //     {
  //       path: "#",
  //       title: "Tư vấn chọn nghề"
  //     },
  //     {
  //       path: "#",
  //       title: "Tư vấn chọn trường"
  //     }
  //   ]
  // },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức"
  },
  {
    path: "/tin-diem-chuan",
    title: "Tin điểm chuẩn"
  },
  {
    path: "/ket-qua-tim-kiem",
    title: "Tin tuyển sinh"
  },
  {
    path: "/lien-he", // the url
    title: "Liên hệ"
  }
];
