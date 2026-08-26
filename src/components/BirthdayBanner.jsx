import { motion } from "framer-motion";

function BirthdayBanner() {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-150
        h-14
        sm:h-16
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-r
        from-[#c9366d]
        via-[#e95d91]
        to-[#c9366d]
        shadow-[0_8px_30px_rgba(160,45,90,.25)]
        border-b
        border-white/30
      "
    >
      {/* LEFT BALLOONS */}

      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          left-3
          sm:left-10
          text-2xl
          sm:text-3xl
        "
      >
        🎈
      </motion.div>

      {/* MAIN TEXT */}

      <motion.div
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          text-center
          text-white
          font-serif
          font-bold
          text-base
          sm:text-2xl
          tracking-wide
          drop-shadow-md
        "
      >
        ✨ HAPPY BIRTHDAY, SUNDARI ✨
      </motion.div>

      {/* RIGHT BALLOON */}

      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [4, -4, 4],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="
          absolute
          right-3
          sm:right-10
          text-2xl
          sm:text-3xl
        "
      >
        🎈
      </motion.div>
    </motion.div>
  );
}

export default BirthdayBanner;
