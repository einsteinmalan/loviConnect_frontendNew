import React, { FC } from "react";
import Navbar from "../../../components/ui/Navbar";

interface Props {
  children?: React.ReactNode,
  background?: boolean,
}

const Layout: React.FC<Props> = ({
  children,
  background = false,
}) => (
  <>
    <Navbar />
    <main
      className={`overflow-x-hidden ${
        background
          ? "bg-gray-900 bg-mainBackgroundImage bg-cover bg-center animate-backgroundShiftTablet xl:animate-backgroundShift"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto pt-16 h-screen box-border block sm:flex justify-center">
        {children}
      </div>
    </main>
  </>
);

export default Layout;
