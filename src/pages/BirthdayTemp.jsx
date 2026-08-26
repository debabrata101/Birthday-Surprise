import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import Balloons from "../Components/Balloons";
import NextButton from "../Components/NextButton";

function BirthdayPage() {
  const navigate = useNavigate();

  return (
    <main
      className="
        screen-fit
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        pt-[54px]
        sm:pt-[64px]
        bg-gradient-to-br
        from-[#ffedf5]
        via-[#ffd0e1]
        to-[#ff9fc2]
      "
    >
      {/* =========================
          FLOATING BALLOONS
      ========================== */}

      <Balloons amount={30} />

      {/* =========================
          PARTY SPARKLE BACKGROUND
      ========================== */}

      {Array.from({
        length: 25,
      }).map((_, index) => (
        <motion.div
          key={index}
          className="
            fixed
            pointer-events-none
            z-10
            text-lg
            sm:text-2xl
          "
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 29) % 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
            delay: index * 0.12,
          }}
        >
          {index % 2 === 0 ? "✨" : "💗"}
        </motion.div>
      ))}

      {/* =========================
          PARTY SPRAYS
      ========================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          rotate: -25,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: -25,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="
          fixed
          left-2
          sm:left-8
          bottom-20
          text-6xl
          sm:text-8xl
          z-30
        "
      >
        🎉
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          rotate: 25,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 25,
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
        className="
          fixed
          right-2
          sm:right-8
          bottom-20
          text-6xl
          sm:text-8xl
          z-30
        "
      >
        🎊
      </motion.div>

      {/* =========================
          MAIN PARTY CONTENT
      ========================== */}

      <section
        className="
          relative
          z-40
          text-center
          px-5
          max-w-[850px]
        "
      >
        {/* TOP PARTY EMOJI */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            text-6xl
            sm:text-8xl
          "
        >
          🎂
        </motion.div>

        {/* HAPPY */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="
            font-serif
            font-bold
            text-5xl
            sm:text-7xl
            md:text-8xl
            text-[#c52f6c]
            drop-shadow-[0_8px_15px_rgba(180,40,90,.18)]
          "
        >
          HAPPY
        </motion.h1>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1,
            type: "spring",
          }}
          className="
            script-font
            text-6xl
            sm:text-8xl
            md:text-9xl
            text-[#8e3154]
            -mt-3
          "
        >
          Birthday
        </motion.h1>

        {/* NAME */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="
            mt-2
          "
        >
          <motion.h2
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              font-serif
              font-bold
              text-4xl
              sm:text-6xl
              text-[#d9487d]
            "
          >
            Sundari! 💗
          </motion.h2>

          <p
            className="
              text-[#754f61]
              text-sm
              sm:text-lg
              mt-3
            "
          >
            Today is all about you. 🌸
          </p>
        </motion.div>

        {/* PARTY CONFETTI LINE */}

        <motion.div
          animate={{
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-5
            text-2xl
            sm:text-4xl
          "
        >
          🎈 🎊 ✨ 🎉 💗 🎉 ✨ 🎊 🎈
        </motion.div>

        {/* MESSAGE */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="
            max-w-xl
            mx-auto
            text-[#805c6b]
            text-sm
            sm:text-base
            leading-7
            mt-4
          "
        >
          May your days be filled with laughter, beautiful memories, endless
          smiles and all the little happiness your heart deserves. 💕
        </motion.p>

        {/* NEXT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.4,
          }}
          className="mt-6"
        >
          <NextButton onClick={() => navigate("/letter")}>
            Open Your Wish Letter 💌
          </NextButton>
        </motion.div>
      </section>
    </main>
  );
}

export default BirthdayPage;
