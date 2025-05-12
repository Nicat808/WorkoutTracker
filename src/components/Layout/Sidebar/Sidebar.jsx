import { sidebarItems } from "./SidebarItems";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      {sidebarItems.map((item, index) => (
        <Link key={index} to={item.path} className="sidebar-item">
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
