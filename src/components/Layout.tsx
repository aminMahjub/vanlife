import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-app overflow-y-auto min-h-screen max-w-[549px] mx-auto bg-app-bg">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
