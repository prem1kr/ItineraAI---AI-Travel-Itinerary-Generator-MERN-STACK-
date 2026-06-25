import { NavLink } from "react-router-dom";
import { FiHome, FiUpload, FiClock, FiUser } from "react-icons/fi";

const Sidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiHome />,
    },
    {
      name: "Upload",
      path: "/upload",
      icon: <FiUpload />,
    },
    {
      name: "History",
      path: "/history",
      icon: <FiClock />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FiUser />,
    },
  ];

  return (
    <aside className="w-64 h-screen border-r bg-white">
      <div className="p-5 border-b">
        <h1 className="text-xl font-bold text-blue-600">TripMind AI</h1>
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink key={item.path} to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`} >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;