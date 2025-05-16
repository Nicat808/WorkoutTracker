import { useState } from "react";
import { sidebarItems } from "./SidebarItems";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <aside>
      <div className="sidebar-wrapper">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`sidebar-item ${
              activeIndex === index ||
              location.pathname.replace("/", "") === item.name
                ? "active"
                : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
