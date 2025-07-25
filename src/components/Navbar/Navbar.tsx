import useIsMobile from "@/hooks/use-mobile";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { navLinks } from "./data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-32">
          <div className="flex items-center justify-between h-16 md:h-22">
            <Link href="/" className="text-3xl font-bold text-white">
              <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                Portfolio
              </span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    className="rounded-2xl"
                    size="lg"
                    variant="light"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 font-bold text-xl hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </Button>
                ))}
                <Button
                  as="a"
                  href="https://github.com/Jonaskop44"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl"
                >
                  GitHub
                </Button>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                id="menu-button"
                className="text-gray-300 focus:outline-none"
                onClick={toggleMenu}
              >
                <Icon
                  icon={isOpen ? "mdi:close" : "mdi:menu"}
                  className="w-6 h-6"
                />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      {isMobile && (
        <motion.div
          id="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 z-40 w-full h-screen bg-black"
        >
          <div className="flex flex-col justify-center h-screen pt-20 px-6">
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-2 text-gray-300 font-bold text-xl hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                as="a"
                href="https://github.com/Jonaskop44"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mt-4 rounded-2xl"
                onPress={() => setIsOpen(false)}
              >
                GitHub
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
