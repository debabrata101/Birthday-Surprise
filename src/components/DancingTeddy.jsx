import { motion } from "framer-motion";

function DancingTeddies() {
  return (
    <>
      {/* =========================
          LEFT TEDDY
      ========================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="
          fixed
          left-0
          bottom-1
          sm:left-3
          sm:bottom-3
          md:left-6
          md:bottom-5
          z-140
          pointer-events-none
          w-20
          sm:w-28
          md:w-36
          lg:w-44
        "
      >
        <motion.img
          src="/teddy-left.gif"
          alt="Dancing birthday teddy"
          animate={{
            y: [0, -7, 0, -5, 0],
            rotate: [-2, 2, -2, 2, -2],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
            drop-shadow-[0_10px_20px_rgba(100,40,60,.18)]
          "
        />
        
      </motion.div>

      {/* =========================
          RIGHT TEDDY
      ========================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 0.15,
        }}
        className="
          fixed
          right-0
          bottom-1
          sm:right-3
          sm:bottom-3
          md:right-6
          md:bottom-5
          z-140
          pointer-events-none
          w-20
          sm:w-28
          md:w-36
          lg:w-44
        "
      >
        <motion.img
          src="/teddy-right.gif"
          alt="Dancing birthday teddy"
          animate={{
            y: [0, -7, 0, -5, 0],
            rotate: [2, -2, 2, -2, 2],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
            drop-shadow-[0_10px_20px_rgba(100,40,60,.18)]
          "
        />
        
      </motion.div>

      {/* =========================
          LEFT MUSIC NOTE
      ========================== */}

      <motion.div
        className="
          fixed
          left-[18%]
          bottom-24
          sm:bottom-28
          z-141
          pointer-events-none
          text-xl
          sm:text-2xl
        "
        animate={{
          y: [0, -25, -45],
          x: [0, 8, 18],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        🎵
      </motion.div>

      {/* =========================
          RIGHT MUSIC NOTE
      ========================== */}

      <motion.div
        className="
          fixed
          right-[18%]
          bottom-24
          sm:bottom-28
          z-141
          pointer-events-none
          text-xl
          sm:text-2xl
        "
        animate={{
          y: [0, -25, -45],
          x: [0, -8, -18],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          delay: 0.6,
          ease: "easeOut",
        }}
      >
        🎶
      </motion.div>
    </>
  );
}

export default DancingTeddies;
