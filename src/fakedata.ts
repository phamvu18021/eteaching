export const filters = [
  {
    label: "Địa điểm",
    type: "place",
    unit: "city",
    items: [
      {
        label: "Hà Nội",
        city: "hanoi"
      },
      {
        label: "Hồ Chí Minh",
        city: "hochiminh"
      },
      {
        label: "Miền Bắc",
        city: "mienbac"
      },
      {
        label: "Miền Trung",
        city: "mientrung"
      },
      {
        label: "Miền Nam",
        city: "miennam"
      }
    ]
  },
  {
    label: "Điểm chuẩn",
    type: "point",
    unit: "range",
    items: [
      {
        label: "Từ 10 đến 15",
        range: "[6,15]"
      },
      {
        label: "Từ 16 đến 20",
        range: "[16,20]"
      },
      {
        label: "Từ 21 đến 25",
        range: "[21,25]"
      },
      {
        label: "Từ 25 đến 30",
        range: "[26,30]"
      },
      {
        label: "Trên 30",
        range: "[31,40]"
      }
    ]
  },
  {
    label: "Khối",
    type: "block",
    unit: "industrysector",
    items: [
      {
        label: "Khối A",
        industrysector: "ka"
      },
      {
        label: "Khối B",
        industrysector: "kb"
      },
      {
        label: "Khối C",
        industrysector: "kc"
      },
      {
        label: "Khối D",
        industrysector: "kd"
      },
      {
        label: "Khối E",
        industrysector: "ke"
      },
      {
        label: "Khối K",
        industrysector: "kk"
      }
    ]
  },
  {
    label: "Điểm thi thử đại học ",
    type: "pointexam",
    unit: "rangeexam",
    items: [
      {
        label: "Từ 10 đến 15",
        rangeexam: "[10,15]"
      },
      {
        label: "Từ 16 đến 20",
        rangeexam: "[16,20]"
      },
      {
        label: "Từ 21 đến 25",
        rangeexam: "[21,25]"
      },
      {
        label: "Từ 25 đến 30",
        rangeexam: "[26,30]"
      },
      {
        label: "Trên 30",
        rangeexam: "[31,40]"
      }
    ]
  },

  {
    label: "Ngành đào tạo",
    type: "branch",
    unit: "majors",
    items: [
      {
        label: "Kỹ thuật xây dựng",
        majors: "ktxd"
      },
      {
        label: "Công nghệ thông tin",
        majors: "cntt"
      },
      {
        label: "Quản trị kinh doanh",
        majors: "qtkd"
      },
      {
        label: "Quản lý công nghiệp",
        majors: "qlcn"
      },
      {
        label: "Luật kinh tế",
        majors: "lkt"
      },
      {
        label: "Ngôn ngữ Anh",
        majors: "nna"
      }
    ]
  },
  {
    label: "Điểm 3 môn chính ",
    type: "pointexam3",
    unit: "rangeexam3",
    items: [
      {
        label: "Từ 10 đến 15",
        rangeexam3: "[6,15]"
      },
      {
        label: "Từ 16 đến 20",
        rangeexam3: "[16,20]"
      },
      {
        label: "Từ 21 đến 25",
        rangeexam3: "[21,25]"
      },
      {
        label: "Từ 25 đến 30",
        rangeexam3: "[26,30]"
      },
      {
        label: "Trên 30",
        rangeexam3: "[31,40]"
      }
    ]
  },
  {
    label: "Hình thức tuyển sinh",
    type: "examforms",
    unit: "exam",
    items: [
      {
        label: "Thi tuyển",
        exam: "thituyen"
      },
      {
        label: "Xét tuyển",
        exam: "xettuyen"
      },
      {
        label: "Kết hợp",
        exam: "kethop"
      }
    ]
  },

  {
    label: "Hình thức đào tạo",
    type: "formtraining",
    unit: "train",
    items: [
      {
        label: "Đào tạo từ xa",
        train: "dttx"
      },
      {
        label: "Đào tạo chính quy",
        train: "dtcq"
      },
      {
        label: "Vừa học vừa làm",
        train: "vhvl"
      },
      {
        label: "Liên thông",
        train: "lt"
      },
      {
        label: "Văn bằng 2",
        train: "vb2"
      }
    ]
  },
  {
    label: "Điểm tổng kết tiếng Anh",
    type: "pointfinal",
    unit: "finalscore",
    items: [
      {
        label: "Từ 0-1",
        finalscore: "[0,1]"
      },
      {
        label: "Từ 1-2",
        finalscore: "[1,2]"
      },
      {
        label: "Từ 2-3",
        finalscore: "[2,3]"
      },
      {
        label: "Từ 3-4",
        finalscore: "[3,4]"
      }
    ]
  }
];

export const listpost = [
  {
    id: "tts01",
    label:
      "Đại Học Kinh Tế Quốc Dân tuyển sinh ngành quản trị kinh doanh theo hình thức thi tuyển tại khu vực Miền Nam ",
    desc: "Đại Học Kinh Tế Quốc Dân",
    img: "/p1.jpg",
    city: "miennam",
    majors: "qtkd",
    range: "[16,20]",
    exam: "thituyen",
    train: "dttx",
    industrysector: "ka",
    rangeexam: "[6,15]",
    rangeexam3: "[6,15]",
    finalscore: "[0,1]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts02",
    label:
      "Học viện Tài chính tuyển sinh ngành công nghệ thông tin theo hình thức thi tuyển tại khu vực Miền Nam ",
    desc: "Học viện Tài chính",
    path: "",
    img: "/p2.jpg",
    city: "miennam",
    majors: "cntt",
    range: "[6,15]",
    exam: "thituyen",
    train: "dttx",
    industrysector: "kb",
    rangeexam: "[6,15]",
    rangeexam3: "[6,15]",
    finalscore: "[1,2]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts03",
    label:
      "Đại học Mở Hà Nội tuyển sinh ngành quản trị kinh doanh theo hình thức thi tuyển tại khu vực Hà Nội ",
    desc: "Đại học Mở Hà Nội",
    img: "/p3.jpg",
    city: "hanoi",
    majors: "qtkd",
    range: "[16,20]",
    exam: "thituyen",
    train: "vb2",
    industrysector: "ka",
    rangeexam: "[6,15]",
    rangeexam3: "[6,15]",
    finalscore: "[0,1]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts04",
    label:
      "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên tuyển sinh ngành kỹ thuật xây dựng theo hình thức thi tuyển tại khu vực Hà Nội ",
    desc: "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên",
    img: "/p4.jpg",
    city: "hanoi",
    majors: "ktxd",
    range: "[6,15]",
    exam: "thituyen",
    train: "vb2",
    industrysector: "kc",
    rangeexam: "[6,15]",
    rangeexam3: "[6,15]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts05",
    label:
      "Đại học Thái Nguyên tuyển sinh ngành quản trị kinh doanh theo hình thức thi tuyển tại khu vực Hà Nội ",
    desc: "Đại học Thái Nguyên",
    img: "/p5.jpg",
    city: "hanoi",
    majors: "qtkd",
    range: "[16,20]",
    exam: "thituyen",
    train: "dttx",
    industrysector: "kc",
    rangeexam: "[16,20]",
    rangeexam3: "[16,20]",
    finalscore: "[0,1]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts06",
    label:
      "Đại học Nông Lâm Thái Nguyên tuyển sinh ngành quản lý công nghiệp theo hình thức thi tuyển tại khu vực Hà Nội ",
    desc: "Đại học Nông Lâm Thái Nguyên",
    img: "/p6.jpg",
    city: "hanoi",
    majors: "qlcn",
    range: "[16,20]",
    exam: "thituyen",
    train: "dttx",
    industrysector: "ke",
    rangeexam: "[16,20]",
    rangeexam3: "[16,20]",
    finalscore: "[3,4]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts07",
    label:
      "Học viện Công nghệ Bưu chính Viễn thông tuyển sinh ngành kỹ thuật xây dựng theo hình thức thi tuyển tại khu vực Hà Nội ",
    desc: "Học viện Công nghệ Bưu chính Viễn thông",
    img: "/p7.jpg",
    city: "hanoi",
    majors: "ktxd",
    range: "[26,30]",
    exam: "thituyen",
    train: "dttx",
    industrysector: "kk",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts08",
    label:
      "Đại Học Kinh Tế Quốc Dân tuyển sinh ngành quản lý công nghiệp theo hình thức thi tuyển tại khu vực Tp.Hồ Chí Minh ",
    desc: "Đại Học Kinh Tế Quốc Dân",
    img: "/p1.jpg",
    city: "hochiminh",
    majors: "qlcn",
    range: "[26,30]",
    exam: "thituyen",
    train: "dttx",
    industrysector: "ke",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts09",
    label:
      "Học viện Tài chính tuyển sinh ngành quản lý công nghiệp theo hình thức kết hợp tại khu vực Miền Bắc ",
    desc: "Học viện Tài chính",
    img: "/p2.jpg",
    city: "mienbac",
    majors: "qlcn",
    range: "[21,25]",
    exam: "kethop",
    train: "dttx",
    industrysector: "ka",
    rangeexam: "[21,25]",
    rangeexam3: "[26,30]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts10",
    label:
      "Đại học Mở Hà Nội tuyển sinh ngành luật kinh tế theo hình thức xét tuyển tại khu vực Tp.Hồ Chí Minh ",
    desc: "Đại học Mở Hà Nội",
    img: "/p3.jpg",
    city: "hochiminh",
    majors: "lkt",
    range: "[21,25]",
    exam: "xettuyen",
    train: "dttx",
    industrysector: "kb",
    rangeexam: "[26,30]",
    rangeexam3: "[21,25]",
    finalscore: "[1,2]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts11",
    label:
      "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên tuyển sinh ngành luật kinh tế theo hình thức kết hợp tại khu vực @mientrung ",
    desc: "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên",
    img: "/p4.jpg",
    city: "mientrung",
    majors: "lkt",
    range: "[21,25]",
    exam: "kethop",
    train: "dttx",
    industrysector: "ke",
    rangeexam: "[21,25]",
    rangeexam3: "[21,25]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts12",
    label:
      "Đại học Thái Nguyên tuyển sinh ngành luật kinh tế theo hình thức kết hợp tại khu vực Miền Nam ",
    desc: "Đại học Thái Nguyên",
    img: "/p5.jpg",
    city: "miennam",
    majors: "lkt",
    range: "[6,15]",
    exam: "kethop",
    train: "dttx",
    industrysector: "ke",
    rangeexam: "[6,15]",
    rangeexam3: "[6,15]",
    finalscore: "[1,2]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts13",
    label:
      "Đại học Nông Lâm Thái Nguyên tuyển sinh ngành công nghệ thông tin theo hình thức kết hợp tại khu vực Miền Nam ",
    desc: "Đại học Nông Lâm Thái Nguyên",
    img: "/p6.jpg",
    city: "miennam",
    majors: "cntt",
    range: "[26,30]",
    exam: "kethop",
    train: "lt",
    industrysector: "kb",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[3,4]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts14",
    label:
      "Học viện Công nghệ Bưu chính Viễn thông tuyển sinh ngành kỹ thuật xây dựng theo hình thức kết hợp tại khu vực Hà Nội ",
    desc: "Học viện Công nghệ Bưu chính Viễn thông",
    img: "/p7.jpg",
    city: "hanoi",
    majors: "ktxd",
    range: "[6,15]",
    exam: "kethop",
    train: "lt",
    industrysector: "kc",
    rangeexam: "[6,15]",
    rangeexam3: "[6,15]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts15",
    label:
      "Đại Học Kinh Tế Quốc Dân tuyển sinh ngành kỹ thuật xây dựng theo hình thức xét tuyển tại khu vực Hà Nội ",
    desc: "Đại Học Kinh Tế Quốc Dân",
    img: "/p1.jpg",
    city: "hanoi",
    majors: "ktxd",
    range: "[31,40]",
    exam: "xettuyen",
    train: "lt",
    industrysector: "ke",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts16",
    label:
      "Học viện Tài chính tuyển sinh ngành ngôn ngữ Anh theo hình thức xét tuyển tại khu vực Hà Nội ",
    desc: "Học viện Tài chính",
    img: "/p2.jpg",
    city: "hanoi",
    majors: "nna",
    range: "[6,15]",
    exam: "xettuyen",
    train: "vhvl",
    industrysector: "ka",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[3,4]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts17",
    label:
      "Đại học Mở Hà Nội tuyển sinh ngành quản lý công nghiệp theo hình thức thi tuyển tại khu vực Hà Nội ",
    desc: "Đại học Mở Hà Nội",
    img: "/p3.jpg",
    city: "hanoi",
    majors: "qlcn",
    range: "[31,40]",
    exam: "thituyen",
    train: "vhvl",
    industrysector: "kk",
    rangeexam: "[31,40]",
    rangeexam3: "[31,40]",
    finalscore: "[0,1]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts18",
    label:
      "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên tuyển sinh ngành ngôn ngữ Anh theo hình thức xét tuyển tại khu vực Hà Nội ",
    desc: "Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên",
    img: "/p4.jpg",
    city: "hanoi",
    majors: "nna",
    range: "[31,40]",
    exam: "xettuyen",
    train: "vhvl",
    industrysector: "ke",
    rangeexam: "[31,40]",
    rangeexam3: "[31,40]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts19",
    label:
      "Đại học Thái Nguyên tuyển sinh ngành quản lý công nghiệp theo hình thức thi tuyển tại khu vực Tp.Hồ Chí Minh ",
    desc: "Đại học Thái Nguyên",
    img: "/p5.jpg",
    city: "hochiminh",
    majors: "qlcn",
    range: "[26,30]",
    exam: "thituyen",
    train: "vhvl",
    industrysector: "kb",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[3,4]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts20",
    label:
      "Đại học Nông Lâm Thái Nguyên tuyển sinh ngành quản lý công nghiệp theo hình thức xét tuyển tại khu vực Miền Bắc ",
    desc: "Đại học Nông Lâm Thái Nguyên",
    img: "/P6.jpg",
    city: "mienbac",
    majors: "qlcn",
    range: "[21,25]",
    exam: "xettuyen",
    train: "dtcq",
    industrysector: "kd",
    rangeexam: "[21,25]",
    rangeexam3: "[21,25]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts21",
    label:
      "Học viện Công nghệ Bưu chính Viễn thông tuyển sinh ngành ngôn ngữ Anh theo hình thức xét tuyển tại khu vực Tp.Hồ Chí Minh ",
    desc: "Học viện Công nghệ Bưu chính Viễn thông",
    img: "/p7.jpg",
    city: "hochiminh",
    majors: "nna",
    range: "[21,25]",
    exam: "xettuyen",
    train: "dtcq",
    industrysector: "kb",
    rangeexam: "[26,30]",
    rangeexam3: "[26,30]",
    finalscore: "[2,3]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  },
  {
    id: "tts22",
    label:
      "Đại Học Kinh Tế Quốc Dân tuyển sinh ngành kỹ thuật xây dựng theo hình thức xét tuyển tại khu vực @mientrung ",
    desc: "Đại Học Kinh Tế Quốc Dân",
    img: "/p1.jpg",
    city: "mientrung",
    majors: "ktxd",
    range: "[21,25]",
    exam: "xettuyen",
    train: "dtcq",
    industrysector: "kc",
    rangeexam: "[16,20]",
    rangeexam3: "[16,20]",
    finalscore: "[1,2]",
    date: new Date("11/11/1111"),
    details: [
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Ít nhất 1 năm kinh nghiệm quản lý cửa hàng bán lẻ, ưu tiên nếu ứng viên có kinh nghiệm làm việc trong ngành bán lẻ Thời trang, Giày, Quần Áo, Thể Thao",
          "Kỹ năng giao tiếp khéo léo, kĩ năng xử lý tình huống, quản lý nhân viên"
        ]
      },
      {
        title: "Yêu cầu ứng viên",
        value: [
          "Tốt nghiệp từ trung cấp trở lên ",
          "Tiếng Anh cơ bản đọc hiểu, có thể chat được với khách hàng nước ngoài"
        ]
      },
      {
        title: "Quyền lợi",
        value: [
          "Được nghỉ phép 12 ngày/năm.",
          "Được tham gia bảo hiểm xã hội.",
          "Được thưởng theo hiệu quả công việc, thưởng dự án.",
          "Được tham gia vào các hoạt động văn thể mỹ và sự kiện của công ty hàng tuần, tháng, quý, năm như bóng đá, cầu lông, bóng bàn, dã ngoại, sinh nhật nhân viên, sinh nhật công ty, du lịch thường niên, hoạt động từ thiện...",
          "Các quyền lợi khác được hưởng như:",
          " Được làm việc trong bầu không khí thân thiện.",
          "Được đào tạo các kỹ năng làm việc theo quy trình.",
          "Được đào tạo về kỹ thuật các sản phẩm.",
          " Được tiếp cận với kỹ thuật công nghệ hiện đại trong khu vực Châu Á và Châu Âu, Châu Mỹ."
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      },
      {
        title: "Tổng quan tin tuyển sinh",
        value: [
          "Thực hiện theo kế hoạch doanh số cửa hàng đã được giao.",
          "Hoàn thành các phân tích hàng tuần về hiệu suất bán hàng và các vấn đề liên quan"
        ]
      }
    ]
  }
];
