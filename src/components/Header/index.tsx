import React from "react";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom"; // Added NavLink
import logo from "@/assets/logo_img/logo_eLIT.png";
import Button from "../../components/Button/Button"; // Adjust the import path as necessary
const Header = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Courses",
      path: "/courses", // Updated path
    },
    {
      id: 3,
      title: "About Us",
      path: "/about",
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/contact",
    },
  ];

  const Navbar = () => {
    return (
      <>
        {/* search */}
        <nav className="relative z-20 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="container py-2 flex justify-between items-center"
          >
            {/* Logo section */}
            <div className="flex items-center">
              <img src={logo} alt="" className="h-20 w-50" />
            </div>

            <div className="hidden md:block">{/* <Search /> */}</div>

            {/* Menu section */}
            <div className="hidden lg:block px-10">
              <ul className="flex items-center gap-3">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive }) =>
                        `inline-block py-2 px-3 relative group transition-colors duration-300 ${
                          isActive
                            ? "text-secondary font-semibold" // Đổi font-bold thành font-semibold
                            : "text-gray-500 hover:text-black font-medium hover:font-semibold" // Thêm font-medium và đổi hover:font-bold thành hover:font-semibold
                        }`
                      }
                      style={{ display: "inline-flex", alignItems: "center" }} // Thêm style
                    >
                      {/* underline animation */}
                      <span className="relative">{menu.title}</span>
                    </NavLink>
                  </li>
                ))}
                <Button type="primary">Sign In</Button>
              </ul>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="lg:hidden">
              <IoMdMenu className="text-4xl" />
            </div>
          </motion.div>
        </nav>
      </>
    );
  };

  return <Navbar />;
};

export default Header;
