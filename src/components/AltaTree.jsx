import { motion } from "framer-motion";

const leaves = [
  [50, 18, 7],
  [43, 22, 7],
  [57, 22, 7],
  [35, 28, 8],
  [65, 28, 8],

  [27, 35, 8],
  [36, 35, 7],
  [20, 42, 7],
  [30, 45, 8],
  [40, 42, 7],

  [73, 35, 8],
  [64, 37, 7],
  [80, 43, 7],
  [70, 46, 8],
  [58, 39, 7],

  [18, 52, 8],
  [28, 53, 8],
  [38, 51, 7],
  [24, 60, 7],
  [34, 62, 8],

  [82, 52, 8],
  [72, 54, 8],
  [62, 53, 7],
  [76, 61, 7],
  [66, 63, 8],

  [27, 68, 7],
  [40, 68, 8],
  [52, 64, 8],
  [62, 69, 7],
  [75, 67, 8],
  [47, 74, 7]
];

const colors = [
  "#e85d24",
  "#f07824",
  "#f4a62a",
  "#ffc83d",
  "#d94b28",
  "#c83f24"
];

function AltaTree() {

  return (
    <div className="
      relative
      w-full
      max-w-[450px]
      mx-auto
    ">

      {/* SUN */}

      <motion.div
        animate={{
          scale: [
            1,
            1.08,
            1
          ],
          opacity: [
            0.3,
            0.55,
            0.3
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-44
          sm:w-64
          aspect-square
          rounded-full
          bg-[radial-gradient(circle,rgba(255,202,75,.5),transparent_70%)]
          blur-2xl
        "
      />

      <div className="
        relative
        w-full
        aspect-[4/5]
      ">

        <svg
          viewBox="0 0 100 100"
          className="
            absolute
            inset-0
            w-full
            h-full
            overflow-visible
          "
        >

          {/* Ground */}

          <ellipse
            cx="50"
            cy="92"
            rx="30"
            ry="3"
            fill="#c86a32"
            opacity=".25"
          />

          {/* Main trunk */}

          <path
            d="
              M43 92
              C46 81 46 71 45 61
              C44 52 41 43 37 35
              C35 31 33 28 31 25

              C37 31 43 38 47 46
              C49 50 50 54 50 58

              C53 52 58 47 64 42
              C69 37 72 33 75 28

              C73 36 68 44 62 51
              C57 57 53 63 51 72

              C50 80 51 86 54 92
              Z
            "
            fill="#54291f"
          />

          {/* Trunk highlight */}

          <path
            d="
              M46 88
              C48 76 47 64 45 55
              C43 45 39 37 35 30
            "
            fill="none"
            stroke="#9b4b2d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Branches */}

          <path
            d="
              M45 62
              C38 58 32 53 25 48

              M48 58
              C42 49 39 42 37 34

              M51 59
              C58 52 65 47 72 43

              M51 68
              C59 62 69 59 78 59

              M44 71
              C38 66 31 62 25 61
            "
            fill="none"
            stroke="#49251d"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Leaves */}

          {leaves.map(
            ([x, y, size], index) => (

              <motion.ellipse
                key={index}
                cx={x}
                cy={y}
                rx={size}
                ry={size * 0.55}
                fill={
                  colors[
                    index %
                    colors.length
                  ]
                }
                initial={{
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  opacity: 1,
                  scale: [
                    0,
                    1.1,
                    1
                  ]
                }}
                transition={{
                  duration: 1,
                  delay: index * .04
                }}
              />

            )
          )}

        </svg>


        {/* EXTRA SMALL LEAVES */}

        {Array.from({
          length: 18
        }).map((_, index) => (

          <motion.div
            key={index}
            className="
              absolute
              text-xs
              sm:text-base
            "
            style={{
              left:
                `${18 + ((index * 37) % 65)}%`,
              top:
                `${20 + ((index * 23) % 52)}%`
            }}
            animate={{
              y: [
                0,
                -4,
                0
              ],
              rotate: [
                -10,
                10,
                -10
              ]
            }}
            transition={{
              duration:
                2 + (index % 3),
              repeat: Infinity,
              delay:
                index * .12
            }}
          >
            {index % 2 === 0
              ? "🍂"
              : "🍁"}
          </motion.div>

        ))}


        {/* FLYING LEAVES */}

        {Array.from({
          length: 9
        }).map((_, index) => (

          <motion.div
            key={`fly-${index}`}
            className="
              absolute
              text-lg
              sm:text-xl
            "
            style={{
              left:
                `${5 + ((index * 29) % 90)}%`,
              top:
                `${15 + ((index * 31) % 65)}%`
            }}
            animate={{
              x: [
                0,
                index % 2
                  ? -45
                  : 45,
                index % 2
                  ? -90
                  : 90
              ],
              y: [
                0,
                30,
                85
              ],
              rotate: [
                0,
                100,
                220
              ],
              opacity: [
                0,
                1,
                1,
                0
              ]
            }}
            transition={{
              duration:
                5 + (index % 3),
              repeat: Infinity,
              delay:
                index * .4,
              ease: "easeInOut"
            }}
          >
            {index % 3 === 0
              ? "🍂"
              : index % 3 === 1
              ? "🍁"
              : "💛"}
          </motion.div>

        ))}

      </div>


      {/* TEXT */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 1.2
        }}
        className="
          text-center
          -mt-2
        "
      >

        <h2
          className="
            script-font
            text-4xl
            sm:text-5xl
            md:text-6xl
            text-[#39241f]
          "
        >
          Happy Birthday
        </h2>

        <div className="
          w-28
          h-0.5
          bg-[#d9783b]
          mx-auto
          mt-1
        " />

        <p className="
          font-serif
          text-xs
          sm:text-sm
          text-[#9b523b]
          mt-1
        ">
          With <span className="text-pink-500 font-semibold">love</span>, smiles & sunshine ☀️
        </p>

      </motion.div>

    </div>
  );
}

export default AltaTree;