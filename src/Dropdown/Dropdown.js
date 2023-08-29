import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaAngleLeft,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAddEmpSubmenu, setShowAddEmpSubmenu] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      name: "Student Info",
      icon: <FaUserAlt />,
      submenu: [
        {
          path: "/addemp",
          name: "   Add Student",
        },
        {
          path: "/emplist",
          name: "    View Student",
        },
      ],
    },
    {
      path: "/analytics",
      name: "Attendance",
      icon: <FaCommentAlt />,
    },
    {
      path: "/analytics",
      name: "Task Schedule",
      icon: <FaRegChartBar />,
    },
    {
      path: "/product",
      name: "Client Info",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Settings",
      icon: <FaThList />,
    },
  ];

  const toggleAddEmpSubmenu = () => {
    setShowAddEmpSubmenu(!showAddEmpSubmenu);
  };

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            KITKAT
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <div
                className={`submenu ${
                  item.name === "Student Info" && showAddEmpSubmenu
                    ? "submenu-open"
                    : ""
                }`}
              >
                <div className="icon1">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link1"
                >
                  {item.name === "Student Info" && (
                    <div className="link1" onClick={toggleAddEmpSubmenu}>
                      <div className="menu-item-title">
                        {item.name}
                        <FaAngleLeft
                          className={`arrow-icon ${
                            showAddEmpSubmenu ? "arrow-rotate" : ""
                          }`}
                        />{" "}
                        {/* Arrow icon */}
                      </div>
                    </div>
                  )}
                </div>
                {showAddEmpSubmenu &&
                  item.submenu.map((subitem, subindex) => (
                    <NavLink
                      to={subitem.path}
                      key={subindex}
                      className="link"
                      activeClassName="active"
                    >
                      {subitem.name}
                    </NavLink>
                  ))}
              </div>
            ) : (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
