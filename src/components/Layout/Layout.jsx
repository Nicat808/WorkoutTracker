import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <main>
        <Header />
        <section className="content-wrapper">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
