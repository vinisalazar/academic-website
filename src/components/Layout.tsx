import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhotoSlideshow from "./PhotoSlideshow";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PhotoSlideshow />
      <Footer />
    </div>
  );
};

export default Layout;
