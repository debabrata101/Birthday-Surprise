import { motion } from "framer-motion";

function TeddyScene() {

  return (
    <div className="
      relative
      flex
      items-center
      justify-center
      gap-4
      sm:gap-10
    ">

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="
          text-7xl
          sm:text-8xl
          md:text-[120px]
          drop-shadow-[0_18px_15px_rgba(168,68,105,.18)]
        "
      >
        🧸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -7, 0],
          rotate: [2, -2, 2]
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: 0.3
        }}
        className="
          text-7xl
          sm:text-8xl
          md:text-[120px]
          drop-shadow-[0_18px_15px_rgba(168,68,105,.18)]
        "
      >
        🧸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="
          absolute
          -top-3
          text-2xl
          sm:text-3xl
        "
      >
        💗 ✨ 💗
      </motion.div>

    </div>
  );
}

export default TeddyScene;