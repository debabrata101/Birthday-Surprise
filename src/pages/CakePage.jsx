import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import Cake from "../components/Cake";

function CakePage() {
  const navigate = useNavigate();

  const [stage, setStage] = useState(0);
  const [candleOn, setCandleOn] = useState(true);
  const [cut, setCut] = useState(false);

  // Cake layers one by one fall from top
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 700),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2300),
      setTimeout(() => setStage(4), 3100),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Candle off
  const blowCandle = () => {
    setCandleOn(false);
  };

  // Cut cake and directly go to party page
  const cutCake = () => {
    setCut(true);

    // Give slice animation a little time
    setTimeout(() => {
      navigate("/birthday");
    }, 900);
  };

  return (
    <main
      className="
        screen-fit
        relative
        flex
        items-center
        justify-center
        overflow-hidden
          pt-14
          sm:pt-16
        bg-gradient-to-br
        from-[#fff5f9]
        via-[#ffe0eb]
        to-[#ffc0d7]
      "
    >
      {/* Soft background lights */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[min(400px,90vw)]
          aspect-square
          rounded-full
          bg-pink-300/30
          blur-3xl
        "
      />

      <section
        className="
          relative
          z-20
          w-full
          w-[min(850px,92vw)]
          max-h-full
          px-4
          py-3
          text-center
          flex
          flex-col
          items-center
          justify-center
        "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <p
            className="
              uppercase
              tracking-[.25em]
              text-[9px]
              sm:text-xs
              font-bold
              text-[#b65376]
            "
          >
            Birthday Surprise · 02
          </p>

          <h1
            className="
              font-serif
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-[#70263f]
              mt-1
            "
          >
            Your Birthday Cake 🎂
          </h1>

          <p
            className="
              text-[#81586a]
              text-xs
              sm:text-base
              mt-2
            "
          >
            Something sweet is waiting for you...
          </p>
        </motion.div>

        {/* CAKE */}

        <div
          className="
            mt-2
            scale-[.72]
            sm:scale-[.82]
            md:scale-[.9]
            lg:scale-100
            -my-12
            sm:-my-10
          "
        >
          <Cake stage={stage} candleOn={candleOn} cut={cut} />
        </div>

        {/* CANDLE BUTTON */}

        {stage >= 4 && candleOn && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              -mt-8
              sm:-mt-5
            "
          >
            <p
              className="
                font-serif
                text-xl
                sm:text-2xl
                text-[#8d3b5d]
              "
            >
              Make a wish, Sundari ✨
            </p>

            <button
              onClick={blowCandle}
              className="
                mt-3
                rounded-full
                bg-[#d9487d]
                text-white
                px-6
                py-3
                font-bold
                shadow-lg
                hover:scale-105
                active:scale-95
                transition
              "
            >
              Blow Out Candle 🕯️
            </button>
          </motion.div>
        )}

        {/* CUT BUTTON */}

        {stage >= 4 && !candleOn && !cut && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              -mt-8
              sm:-mt-5
            "
          >
            <p
              className="
                font-serif
                text-xl
                sm:text-2xl
                text-[#8d3b5d]
              "
            >
              The candle is off! 💕
            </p>

            <button
              onClick={cutCake}
              className="
                mt-3
                rounded-full
                bg-[#d9487d]
                text-white
                px-7
                py-3
                font-bold
                shadow-[0_12px_30px_rgba(217,72,125,.3)]
                hover:scale-105
                active:scale-95
                transition
              "
            >
              🔪 Cut The Cake 🍰
            </button>
          </motion.div>
        )}

        {/* AFTER CLICK */}

        {cut && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              -mt-8
              text-[#b9366b]
              font-serif
              text-lg
            "
          >
            Yay! Enjoy the party 🎉
          </motion.p>
        )}
      </section>
    </main>
  );
}

export default CakePage;
