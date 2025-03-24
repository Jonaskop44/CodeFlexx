"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import FloatingParticles from "@/components/Common/FloatingParticles";
import GeometricShapes from "@/components/Common/GeometricShapes";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>

        <FloatingParticles count={30} />
        <GeometricShapes count={5} />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl font-bold mb-6">
            <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              404
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Page Not Found
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to another URL.
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: 0.4,
            }}
          >
            <Button
              as={Link}
              href="/"
              color="primary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 rounded-2xl"
              startContent={<Icon icon="mdi:home" className="w-5 h-5" />}
            >
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
