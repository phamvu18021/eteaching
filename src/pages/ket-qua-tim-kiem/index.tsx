import ErrorBoundary from "@/components/ErrorBoundary";
import { SearchResults } from "@/features/ket-qua-tim-kiem";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tư vấn tuyển sinh - Đại học Kinh tế Quốc dân"
        description="Đại học Kinh tế Quốc dân tuyển sinh năm 2023 - tổng hợp tư vấn tuyển sinh của Đại học Kinh tế Quốc dân"
      />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <SearchResults />
      </ErrorBoundary>
    </>
  );
};

export default Page;
