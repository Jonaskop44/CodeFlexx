import { motion } from "framer-motion";
import { FC } from "react";

interface GeometricShapesProps {
  count: number;
  className?: string;
}

const GeometricShapes: FC<GeometricShapesProps> = ({ count, className }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {Array.from({ length: count }).map((_, index) => {
        const shapes = ["circle", "square", "triangle"];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 30;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.12 + 0.05;

        let shapeElement;

        if (shape === "circle") {
          shapeElement = (
            <div
              className="rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"
              style={{ width: size, height: size }}
            />
          );
        } else if (shape === "square") {
          shapeElement = (
            <div
              className="bg-gradient-to-r from-purple-500/20 to-blue-500/20"
              style={{
                width: size,
                height: size,
                transform: `rotate(${Math.random() * 45}deg)`,
              }}
            />
          );
        } else {
          shapeElement = (
            <div
              className="bg-gradient-to-r from-purple-500/20 to-blue-500/20"
              style={{
                width: size,
                height: size,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            />
          );
        }

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              opacity,
              left: `${posX}%`,
              top: `${posY}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              rotate: {
                duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: duration / 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay,
              },
            }}
          >
            {shapeElement}
          </motion.div>
        );
      })}
    </div>
  );
};

export default GeometricShapes;
