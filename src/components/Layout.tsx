import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  console.log(children);
  return (
    <div className="grid grid-cols-1 grid-rows-app overflow-y-auto min-h-screen max-w-[549px] mx-auto bg-pure-white">
      {children}
    </div>
  );
};

export default Layout;
