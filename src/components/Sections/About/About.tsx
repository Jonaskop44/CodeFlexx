import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { aboutAnimationVariants } from "./animations";
import { Icon } from "@iconify/react";
import { Image } from "@heroui/react";
import { GitHubUser } from "@/types/github";
import { FC } from "react";
import { information } from "./data";

interface AboutProps {
  user: GitHubUser;
}

const AnimatedLines = dynamic(
  () => import("@/components/Common/AnimatedLines"),
  {
    ssr: false,
  }
);

const About: FC<AboutProps> = ({ user }) => {
  const { containerVariants, itemVariants, imageVariants, socialVariants } =
    aboutAnimationVariants;

  return (
    <div id="about" className="py-20 bg-black relative overflow-hidden">
      <AnimatedLines count={8} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            About <span className="text-purple-500">Me</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <motion.div
                className="relative rounded-xl overflow-hidden"
                variants={imageVariants}
              >
                {/* Blue gradient background that extends beyond the image */}
                <div className="relative p-2 bg-black rounded-xl">
                  <Image
                    src={user.avatar_url}
                    alt="Profile"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
            <div>
              <motion.p className="text-gray-300 mb-4" variants={itemVariants}>
                I&apos;m Jonas, a talented developer with experience in modern
                web technologies. I love to develop beautiful, functional and
                user-friendly applications that solve real-world problems.
              </motion.p>
              <motion.p className="text-gray-300 mb-6" variants={itemVariants}>
                With a strong foundation in NextJS, NestJS and various frontend
                technologies, I strive to deliver high quality code and
                exceptional user experiences.
              </motion.p>
              <div className="flex gap-4">
                {information.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-white/10 p-3 rounded-full"
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
