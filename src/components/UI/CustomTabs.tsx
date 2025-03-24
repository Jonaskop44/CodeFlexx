import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FC } from "react";

interface CustomTabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CustomTabs: FC<CustomTabProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {tabs.map((tab, index) => (
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant={activeTab === tab ? "flat" : "light"}
            className={`rounded-2xl ${
              activeTab === tab
                ? "bg-purple-500 text-white"
                : "bg-black/50 text-gray-300"
            }`}
            size="lg"
            onPress={() => setActiveTab(tab)}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-0"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default CustomTabs;
