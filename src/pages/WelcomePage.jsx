import {
  useNavigate
} from "react-router-dom";

import {
  motion
} from "framer-motion";

import {
  useState
} from "react";

function WelcomePage() {

  const navigate = useNavigate();

  const [
    noPosition,
    setNoPosition
  ] = useState({
    x: 0,
    y: 0
  });

  const moveNo = () => {

    const x =
      Math.random() * 220 - 110;

    const y =
      Math.random() * 140 - 70;

    setNoPosition({
      x,
      y
    });

  };

  return (
    <main
      className="
        screen-fit
        pt-14
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-[#fff1f6]
        via-[#ffd9e7]
        to-[#ffb6cf]
        px-5
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="
          text-center
          w-[min(700px,92vw)]
        "
      >

        <motion.div
          animate={{
            y: [
              0,
              -12,
              0
            ],
            rotate: [
              -5,
              5,
              -5
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="
            text-7xl
            sm:text-9xl
          "
        >
          🎀
        </motion.div>

        <p
          className="
            uppercase
            tracking-[.3em]
            text-xs
            text-[#b23b67]
            font-bold
            mt-3
          "
        >
          A surprise made with love
        </p>

        <h1
          className="
            font-serif
            font-bold
            text-5xl
            sm:text-7xl
            text-[#742743]
            mt-3
          "
        >
          Hey Sundari...
        </h1>

        <p
          className="
            text-lg
            sm:text-xl
            text-[#80596a]
            mt-5
          "
        >
          I made a little magical journey
          just for your birthday. 💗
        </p>

        <h2
          className="
            font-serif
            font-bold
            text-2xl
            sm:text-3xl
            text-[#c43e70]
            mt-5
          "
        >
          Are you ready for the surprise?
        </h2>


        <div
          className="
            relative
            mt-8
            flex
            justify-center
            gap-5
            min-h-[70px]
          "
        >

          {/* YES */}

          <button
            onClick={() =>
              navigate("/teddy")
            }
            className="
              rounded-full
              bg-[#d9487d]
              text-white
              px-8
              py-3
              font-bold
              shadow-lg
              hover:scale-105
              active:scale-95
              transition
              z-10
            "
          >
            YES 💗
          </button>


          {/* NO */}

          <motion.button
            animate={{
              x: noPosition.x,
              y: noPosition.y
            }}
            onMouseEnter={moveNo}
            onTouchStart={moveNo}
            className="
              rounded-full
              bg-white
              text-[#b23b67]
              border
              border-[#e8a4bd]
              px-8
              py-3
              font-bold
              shadow-md
              absolute
              left-[52%]
            "
          >
            NO 🙈
          </motion.button>

        </div>

      </motion.div>

    </main>
  );
}

export default WelcomePage;
