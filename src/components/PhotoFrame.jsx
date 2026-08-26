import { motion } from "framer-motion";

function PhotoFrame() {

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 90
      }}
      className="
        relative
        w-full
        aspect-[1402/1122]
      "
    >

      {/* SUN GLOW */}

      <motion.div
        animate={{
          scale: [
            1,
            1.12,
            1
          ],
          opacity: [
            0.35,
            0.6,
            0.35
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          absolute
          inset-[-25px]
          rounded-full
          bg-[radial-gradient(circle,rgba(255,211,102,.6),transparent_70%)]
          blur-2xl
          -z-10
        "
      />

      {/* ROTATING SUN RAYS */}

      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="
          absolute
          inset-[-30px]
          pointer-events-none
          -z-10
        "
      >

        {Array.from({
          length: 12
        }).map((_, index) => (

          <span
            key={index}
            className="
              absolute
              left-1/2
              top-1/2
              w-1
              h-10
              rounded-full
              bg-[#ffd66e]
              opacity-50
            "
            style={{
              transform: `
                translate(-50%, -100%)
                rotate(${index * 30}deg)
                translateY(-100px)
              `
            }}
          />

        ))}

      </motion.div>


      {/* FRAME */}

      <motion.div
        animate={{
          y: [0, -4, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
        className="
          relative
          w-full
          h-full
          rounded-2xl
          sm:rounded-3xl
          bg-white
          p-2
          sm:p-3
          shadow-[0_20px_50px_rgba(150,55,95,.22)]
        "
      >

        <div className="
          relative
          w-full
          h-full
          overflow-hidden
          rounded-xl
          sm:rounded-2xl
          bg-[#ffe5ef]"
        >

          <motion.img
            src="/her-photo.jpg"
            alt="Birthday memory"
            initial={{
              scale: 1.08,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 1.3
            }}
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* SUNLIGHT SWEEP */}

          <motion.div
            animate={{
              x: [
                "-130%",
                "130%"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="
              absolute
              inset-y-0
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              skew-x-[-20deg]
              pointer-events-none
            "
          />

        </div>

      </motion.div>

    </motion.div>
  );
}

export default PhotoFrame;