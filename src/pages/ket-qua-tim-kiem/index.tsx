import ErrorBoundary from "@/components/ErrorBoundary";
import { SearchResults } from "@/features/ket-qua-tim-kiem";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo title="Tư vấn tuyển sinh" description="" />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <SearchResults />
      </ErrorBoundary>
    </>
  );
};

export default Page;
