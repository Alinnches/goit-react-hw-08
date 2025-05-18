import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
