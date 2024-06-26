import { ReactNode } from "react";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./footer";
import { Header } from "./header";

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
