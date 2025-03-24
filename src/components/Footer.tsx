"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-8 text-center text-gray-400 text-sm relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-32">
        <p>© {new Date().getFullYear()} Jonas. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
