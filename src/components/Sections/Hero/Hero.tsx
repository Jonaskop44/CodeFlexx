import { motion } from "framer-motion";
import { heroAnimationVariants } from "./animations";
import FloatingParticles from "@/components/Common/FloatingParticles";
import GeometricShapes from "@/components/Common/GeometricShapes";

const Hero = () => {
  const { containerVariants, itemVariants, buttonVariants, bgElements } =
    heroAnimationVariants;

  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        variants={bgElements}
        initial="hidden"
        animate="visible"
      >
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
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>

        <FloatingParticles count={30} />
        <GeometricShapes count={5} />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Hi, I&apos;m Jonas
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A passionate developer building amazing web experiences
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium"
            >
              View My Work
            </motion.a>
            <motion.a
              href="https://github.com/Jonaskop44"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium"
            >
              GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
