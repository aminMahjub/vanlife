import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-app overflow-y-auto min-h-screen max-w-[549px] mx-auto bg-app-bg">
      {children}
    </div>
  );
};

export default Layout;
