"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const DanhSachTruongNganh = dynamic(
  () =>
    import("@/features/danh-sach-truong-nganh").then(
      (mod) => mod.DanhSachTruongNganh
    ),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Giới thiệu về Đại học Kinh tế Quốc dân"
        description="Trường Đại học Kinh tế Quốc dân là một trường đại học định hướng nghiên cứu đầu ngành trong khối các trường đào tạo về Kinh tế, Quản lý và Quản trị kinh doanh ở Việt Nam, nằm trong nhóm Đại học trọng điểm quốc gia Việt Nam. Trường Đại học Kinh tế Quốc dân nổi danh là nơi đào tạo ra nhiều lãnh đạo cao cấp nhất cho Đảng Cộng sản Việt Nam và Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam, nhiều doanh nhân nổi tiếng. Đồng thời, trường còn là trung tâm nghiên cứu kinh tế chuyên sâu, tư vấn các chính sách vĩ mô cho Chính phủ Việt Nam."
      />
      <DanhSachTruongNganh
        title="Giới thiệu"
        name="Đại học Kinh tế Quốc dân"
        titleprogram={["Lợi ích", "Văn bằng", "Điều kiện xét tuyển"]}
        overviewtitle="Đại học Kinh tế Quốc dân"
        overview={[
          "Trường Đại học Kinh tế Quốc dân là một trường đại học định hướng nghiên cứu đầu ngành trong khối các trường đào tạo về Kinh tế, Quản lý và Quản trị kinh doanh ở Việt Nam, nằm trong nhóm Đại học trọng điểm quốc gia Việt Nam. Trường Đại học Kinh tế Quốc dân nổi danh là nơi đào tạo ra nhiều lãnh đạo cao cấp nhất cho Đảng Cộng sản Việt Nam và Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam, nhiều doanh nhân nổi tiếng. Đồng thời, trường còn là trung tâm nghiên cứu kinh tế chuyên sâu, tư vấn các chính sách vĩ mô cho Chính phủ Việt Nam.",
          "Cho đến nay, trường Đại học Kinh tế Quốc dân đã đào tạo được nhiều thế hệ Cán bộ Quản lý chính quy, năng động, dễ thích nghi với Nền kinh tế thị trường và có khả năng tiếp thu các Công nghệ mới. Trong số những sinh viên tốt nghiệp của Trường, nhiều người hiện đang giữ những chức vụ quan trọng trong các Cơ quan của Đảng Cộng sản Việt Nam, Quốc hội Việt Nam, Chính phủ Việt Nam và các Doanh nghiệp."
        ]}
        jobs={[
          "Hệ Đào tạo từ xa là hình thức học tập mà người học có thể tiếp cận và tham gia vào quá trình học tập mà không cần phải có mặt trực tiếp tại các trường học. Thay vì đến trường học hoặc đi lại đến các địa điểm đào tạo, người học có thể tiếp cận các tài liệu học tập và được cấp tài khoản để vào hệ thống E-learning của nhà trường để theo dõi các bài giảng, trao đổi diễn đàn và làm bài kiểm tra",
          "Với đào tạo từ xa, người học có thể tự do lựa chọn thời gian và địa điểm học tập phù hợp với lịch trình và mục tiêu cá nhân của mình. Đồng thời, hình thức đào tạo này cũng giúp giảm thiểu chi phí di chuyển, lưu trú, và các chi phí khác liên quan đến việc học tập truyền thống."
        ]}
        programtitle="Chương trình phù hợp với người muốn vừa học vừa làm"
        program={[
          "Online 100%",
          "Không cần thi tuyển",
          "Đội ngũ giảng viên chất lượng",
          "Tiết kiệm lên đến 60% chi phí",
          "Ngành học đa dạng",
          "Thời gian học chỉ từ 2 đến 4 năm"
        ]}
        worktitle="Do chính Đại học kinh tế quốc dân đào tạo và cấp bằng"
        work={[
          "Bằng không ghi hình thức đào tạo",
          "Được bộ GD&DDT công nhận",
          "Có giá trị tương đương bằng hệ chính quy",
          "Đủ điều kiện học lên các bậc cao hơn như thạc sĩ, tiến sĩ..."
        ]}
        workjobstitle="Chỉ xét tuyển hồ sơ đầu vào, không cần thi tuyển"
        workjobs={[
          "Có bằng tốt nghiệp THPT hoặc tương đương trở lên",
          "Tuyển thẳng với sinh viên đã có bằng Cao đẳng, Đại học",
          "Sinh viên đang theo học ở các trường khác"
        ]}
      />
    </>
  );
};

export default Page;
