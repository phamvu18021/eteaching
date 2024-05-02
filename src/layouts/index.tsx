import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header").then((mod) => mod.Header), {
  loading: () => <p>Loading...</p>
});

const Footer = dynamic(() => import("./footer").then((mod) => mod.Footer), {
  loading: () => <p>Loading...</p>
});

const BackToTop = dynamic(
  () => import("./components/BackToTop").then((mod) => mod.BackToTop),
  {
    loading: () => <p>Loading...</p>
  }
);
interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
