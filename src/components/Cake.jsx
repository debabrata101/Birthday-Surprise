import "./Cake.css";
import { motion } from "framer-motion";

function Cake({
  stage = 0,
  candleOn = true,
  cut = false,
}) {
  return (
    <div className="birthday-cake-scene">

      {/* =========================
          GLOW
      ========================== */}

      <div className="cake-glow" />


      {/* =========================
          CAKE PLATE
      ========================== */}

      <div className="cake-plate">

        <div className="plate-shine" />

      </div>


      {/* =========================
          CAKE BODY
      ========================== */}

      <div className="cake-body">


        {/* =========================
            BOTTOM LAYER
        ========================== */}

        {stage >= 1 && (
          <div className="cake-layer cake-layer-one">

            <div className="cake-sponge" />

            <div className="cake-cream cream-one" />

            <div className="cake-drips">

              <span />
              <span />
              <span />
              <span />
              <span />

            </div>

          </div>
        )}


        {/* =========================
            MIDDLE LAYER
        ========================== */}

        {stage >= 2 && (
          <div className="cake-layer cake-layer-two">

            <div className="cake-sponge" />

            <div className="cake-cream cream-two" />

            <div className="cake-drips">

              <span />
              <span />
              <span />
              <span />

            </div>

          </div>
        )}


        {/* =========================
            TOP LAYER
        ========================== */}

        {stage >= 3 && (
          <div className="cake-layer cake-layer-three">

            <div className="cake-sponge" />

            <div className="cake-top-cream">

              <span className="cream-berry berry-one" />
              <span className="cream-berry berry-two" />
              <span className="cream-berry berry-three" />

            </div>

            <div className="cake-drips">

              <span />
              <span />
              <span />
              <span />

            </div>

          </div>
        )}


        {/* =========================
            CANDLE
        ========================== */}

        {stage >= 4 && (

          <div
            className={`
              birthday-candle
              ${candleOn ? "candle-active" : "candle-off"}
            `}
          >

            {/* flame */}

            {candleOn && (

              <div className="real-flame">

                <div className="flame-outer" />

                <div className="flame-middle" />

                <div className="flame-inner" />

              </div>

            )}


            {/* wick */}

            <div className="candle-wick" />

            {/* candle */}

            <div className="candle-stick">

              <span />
              <span />
              <span />

            </div>

          </div>

        )}


        {/* =========================
            CAKE DECORATION
        ========================== */}

        {stage >= 3 && (

          <div className="cake-sprinkles">

            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />

          </div>

        )}


        {/* =========================
            CUT SLICE
        ========================== */}

        {cut && (

          <div className="cake-slice">

            <div className="slice-cream" />

            <div className="slice-sponge" />

            <div className="slice-frosting">

              <span />
              <span />
              <span />

            </div>

          </div>

        )}

        {cut && (
          <>
            <div className="confetti-container confetti-left" aria-hidden>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="confetti-container confetti-right" aria-hidden>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </>
        )}

      </div>


      {/* =========================
          GROUND SHADOW
      ========================== */}

      <div className="cake-ground-shadow" />

    </div>
  );
}

export default Cake;