import { motion } from "framer-motion";

function BirthdayAgeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden select-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 grid place-items-center"
      >
        <span className="font-serif text-[min(62vw,560px)] sm:text-[min(58vw,720px)] font-black leading-none text-[#d9487d]">
          21
        </span>
      </motion.div>

      <motion.span
        animate={{ y: [0, -18, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[20%] text-5xl sm:text-7xl font-serif font-bold text-[#d9487d]/20"
      >
        21
      </motion.span>

      <motion.span
        animate={{ y: [0, 20, 0], rotate: [4, -4, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] bottom-[18%] text-6xl sm:text-8xl font-serif font-bold text-[#d9487d]/20"
      >
        21
      </motion.span>
    </div>
  );
}

export default BirthdayAgeBackground;
