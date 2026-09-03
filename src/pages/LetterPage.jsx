import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import Balloons from "../components/Balloons";
import Mailbox from "../components/Mailbox";
import Typewriter from "../components/Typewriter";

const wishes = [
  {
    color: "bg-[#ff9fbe]",
    emoji: "🌸",
    special: false,
    message:
      "May you smile every single day and may your life always be filled with beautiful little moments. 🌷",
  },
  {
    color: "bg-[#c7a1ff]",
    emoji: "💜",
    special: false,
    message:
      "May beautiful memories find you wherever you go, and may every new year of your life be kinder than the last.",
  },
  {
    color: "bg-[#ffe28a]",
    emoji: "💛",
    special: true,
    message:
      "You are one of those rare people who can make an ordinary day feel special just by being there. ✨",
  },
  {
    color: "bg-[#9edcff]",
    emoji: "💙",
    special: true,
    message:
      "May you always receive the love, peace, respect and happiness that your heart deserves. 💖",
  },
];

function LetterPage() {
  const [popped, setPopped] = useState([]);
  const navigate = useNavigate();

  const popBalloon = (index) => {
    if (popped.includes(index)) {
      return;
    }

    setPopped([...popped, index]);
  };

  return (
    <main
      className="
     min-h-screen
    w-full
    relative
    overflow-x-hidden
    pt-[75px]
    pb-10
    bg-gradient-to-br
    from-[#fff5f9]
    via-[#ffe0eb]
    to-[#ffc5d9]
    "
    >
      <Balloons amount={7} />

      <section
        className="
        relative
        z-10
        w-[min(900px,94vw)]
        mx-auto
        text-center
      "
      >
        <p
          className="
          uppercase
          tracking-[.25em]
          text-[10px]
          sm:text-xs
          font-bold
          text-[#b65376]
        "
        >
          Final Surprise
        </p>

        <h1
          className="
          font-serif
          text-4xl
          sm:text-6xl
          font-bold
          text-[#70263f]
          mt-1
        "
        >
          Four Little Wishes 🎈
        </h1>

        <p
          className="
          text-[#81586a]
          text-sm
          sm:text-base
          mt-3
          max-w-2xl
          mx-auto
        "
        >
          Tap each balloon for a little wish. Two are normal... and two are very
          special. 💗
        </p>

        {/* FOUR BALLOONS */}

        <div
          className="
          flex
          justify-center
          gap-3
          sm:gap-6
          mt-8
        "
        >
          {wishes.map((wish, index) => {
            const isPopped = popped.includes(index);

            return (
              <motion.button
                key={index}
                onClick={() => popBalloon(index)}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 1.2,
                }}
                animate={
                  isPopped
                    ? {
                        scale: [1, 1.3, 0],
                        opacity: [1, 1, 0],
                      }
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: isPopped ? 0.45 : 2,
                  repeat: isPopped ? 0 : Infinity,
                  delay: index * 0.15,
                }}
                className={`
                    w-14
                    h-[74px]
                    sm:w-20
                    sm:h-24
                    rounded-[50%]
                    ${wish.color}
                    shadow-[0_14px_25px_rgba(120,60,90,.14)]
                    text-2xl
                    sm:text-4xl
                    flex
                    items-center
                    justify-center
                  `}
              >
                {isPopped ? "✨" : wish.emoji}
              </motion.button>
            );
          })}
        </div>

        {/* WISHES */}

        <div
          className="
          min-h-[150px]
          mt-7
        "
        >
          <AnimatePresence>
            {popped.map((index) => {
              const wish = wishes[index];

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 15,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  className={`
                      max-w-xl
                      mx-auto
                      mb-3
                      rounded-2xl
                      px-5
                      py-4
                      bg-white/80
                      border
                      ${wish.special ? "border-[#f3a0bd]" : "border-white"}
                      shadow-sm
                    `}
                >
                  {wish.special && (
                    <div
                      className="
                        text-[#d13f75]
                        font-bold
                        text-[10px]
                        uppercase
                        tracking-[.2em]
                        mb-1
                      "
                    >
                      Very Special 💖
                    </div>
                  )}

                  <p
                    className={`
                      text-sm
                      sm:text-base
                      leading-7
                      ${
                        wish.special
                          ? "text-[#c33e70] font-semibold"
                          : "text-[#806071]"
                      }
                    `}
                  >
                    {wish.message}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* MAILBOX */}

        <div className="mt-5">
          <div className="mx-auto">
            <button
              onClick={() => navigate("/final")}
              disabled={popped.length !== 4}
              className={`rounded-full px-6 py-3 font-bold transition-shadow ${
                popped.length === 4
                  ? "bg-[#d9487d] text-white shadow-lg"
                  : "bg-white text-[#b65376] border border-[#efc7d7]"
              }`}
            >
              {popped.length === 4 ? "Final Surprise 🎉" : "Unlock all 4 wishes to reveal"}
            </button>
          </div>
        </div>

        <p
          className="
          text-xs
          text-[#a06b7f]
          mt-6
        "
        >
          {popped.length === 4
            ? "All four wishes unlocked. 💖"
            : "Tap all four balloons to unlock every wish."}
        </p>
      </section>
    </main>
  );
}

export default LetterPage;
