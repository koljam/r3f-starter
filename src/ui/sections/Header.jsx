import React from "react";
import { useExperience } from "../../store";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const count = useExperience((state) => state.count);
  const increaseCount = useExperience((state) => state.increaseCount);
  const decreaseCount = useExperience((state) => state.decreaseCount);

  return (
    <div className="absolute top-0 left-0 p-4 w-full flex justify-between items-center flex-row">
      <h1 className="text-2xl font-bold">
        Counter:{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </h1>
      <div className="flex space-x-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={decreaseCount}
        >
          Decrease
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={increaseCount}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
