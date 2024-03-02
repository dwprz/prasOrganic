/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import Footer from "../components/organisms/Footer/Footer";
import Navbar from "../components/organisms/Navbar/Navbar";

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PagesLayout;
