import React, { useState } from "react";
import { Icon } from "../Common/icon";
import { NavItem } from "../../lib/database";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Common/button";

export default function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="max-w-[1248px] mx-auto min-w-[360px] pt-[46px]">
        <div className="flex justify-between items-center gap-3 lg:px-[30px] px-[20px] bg-white rounded-full">
          <div>
            <Icon>Governing Docs</Icon>
          </div>

          {/* Desktop Menu */}
          <ul className="lg:flex hidden gap-4">
            {NavItem.map((items, index) => (
              <li key={index}>
                <a
                  href={items.path}
                  className="hover:text-cyan-500 text-grya"
                >
                  {items.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger & Button */}
          <div className=" flex items-center gap-2">
            <button onClick={toggleMenu} className="lg:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Button>Get Started Today</Button>
          </div>
        </div>

        {/* Mobile Dropdown with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-2 px-[20px] bg-white rounded-xl shadow-md overflow-hidden"
            >
              {NavItem.map((items, index) => (
                <li key={index} className="py-2 border-b last:border-none">
                  <a
                    href={items.path}
                    className="block hover:text-cyan-500 text-grya"
                  >
                    {items.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
