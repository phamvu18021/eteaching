import ErrorBoundary from "@/components/ErrorBoundary";
import { Posts } from "@/features/posts";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tư vấn hướng nghiệp - Đại học Kinh tế Quốc dân"
        description="Đại học Kinh tế Quốc dân tuyển sinh năm 2023 - tổng hợp tư vấn hướng nghiệp của Đại học Kinh tế Quốc dân"
      />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Posts />
      </ErrorBoundary>
    </>
  );
};

export default Page;
