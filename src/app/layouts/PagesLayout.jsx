/* eslint-disable react/prop-types */
import Footer from "../components/organisems/Footer/Footer";
import Navbar from "../components/organisems/Navbar/Navbar";

function PagesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PagesLayout;
