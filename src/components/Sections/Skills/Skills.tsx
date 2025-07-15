import SkillItem from "@/components/UI/SkillItem/SkillItem";
import { motion } from "framer-motion";
import { skills } from "./data";
import { skillsAnimationVariants } from "./animations";
import dynamic from "next/dynamic";

const GeometricShapes = dynamic(
  () => import("@/components/Common/GeometricShapes"),
  {
    ssr: false,
  }
);

const Skills = () => {
  const { containerVariants, titleVariants } = skillsAnimationVariants;

  return (
    <div id="skills" className="py-20 bg-black/50 relative overflow-hidden">
      <GeometricShapes count={6} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={titleVariants}
          >
            My <span className="text-purple-500">Skills</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                isLast={index === skills.length - 1}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
