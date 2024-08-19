import ErrorBoundary from "@/components/ErrorBoundary";
import { SearchResultsBySchool } from "@/features/tin-tuyen-sinh-theo-truong";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo title="Tư vấn tuyển sinh" description="" />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <SearchResultsBySchool />
      </ErrorBoundary>
    </>
  );
};

export default Page;
