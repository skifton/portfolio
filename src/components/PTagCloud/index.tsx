import { motion } from "framer-motion";
import React from "react";

const PTagCloud: React.FC = (data: any) => {
  return (
    <motion.div
      key={data.value}
      animate={{
        scale: 1,
        transitionEnd: {
          display: "none",
        },  
      }}
      transition={{ duration: data.count }}
      initial={{ scale: 0 }}
      className={`text-white ${data.color} px-4 py-1 rounded-full w-fit h-fit m-2 inline-block`}
    >
      {data.value}
    </motion.div>
  );
};

export default PTagCloud;
