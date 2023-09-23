import { Outlet } from "react-router-dom";

import HostNavigation from "./HostNavigation";

const HostLayout = () => {
  return (
    <main>
      <HostNavigation />
      <Outlet />
    </main>
  );
};

export default HostLayout;
