import { motion } from "framer-motion";

function Balloons({ amount = 12 }) {
  const balloonTypes = [
    "🎈",
    "🎈",
    "💗",
    "🎈"
  ];

  return (
    <div className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      z-0
    ">

      {Array.from({
        length: amount
      }).map((_, index) => {

        const left =
          `${(index * 19) % 100}%`;

        return (
          <motion.div
            key={index}
            className="
              absolute
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
            style={{
              left,
              bottom: "-100px"
            }}
            initial={{
              y: 0,
              opacity: 0
            }}
            animate={{
              y: "-120vh",
              opacity: [0, 1, 1, 0],
              x: [
                0,
                index % 2 === 0 ? 25 : -25,
                0
              ],
              rotate: [
                0,
                8,
                -8,
                0
              ]
            }}
            transition={{
              duration: 9 + (index % 5),
              repeat: Infinity,
              delay: index * 0.35,
              ease: "easeInOut"
            }}
          >
            {balloonTypes[index % balloonTypes.length]}
          </motion.div>
        );
      })}

    </div>
  );
}

export default Balloons;