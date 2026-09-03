import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles, PartyPopper } from "lucide-react";
import Cake from "../components/Cake";
import { HangingCards } from "../components/Wish/Wish";
import "../components/Wish/Wish.css";

function CakePage() {
  const navigate = useNavigate();

  const [stage, setStage] = useState(0);
  const [candleOn, setCandleOn] = useState(true);
  const [cut, setCut] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 700),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2300),
      setTimeout(() => setStage(4), 3100),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const blowCandle = () => {
    setCandleOn(false);
  };

  const cutCake = () => {
    setCut(true);

    setTimeout(() => {
      navigate("/birthday");
    }, 1100);
  };

  return (
    <main className="birthday-page cake-page">
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />

      <div className="cake-bg-sparkles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      <HangingCards />

      <section className="cake-hero hero-show">
        <motion.div
          className="mini-badge"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={15} />
          Birthday Surprise · 02
          <Sparkles size={15} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Your Birthday Cake 🎂
        </motion.h1>

        <div className="heart-line" aria-hidden="true">
          <span />
          <Heart className="heart-icon" fill="currentColor" size={32} />
          <span />
        </div>

        <motion.div
          className="special-ribbon"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          To My Special Girl 💗
        </motion.div>

        <motion.p
          className="cake-wish"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Something sweet is waiting for you... 💕
          <br />
          Make a wish, blow the candle, and cut your cake! ✨
        </motion.p>

        <div className="cake-section">
          <div className="section-label">
            <Sparkles size={15} />
            Birthday Cake
            <Sparkles size={15} />
          </div>

          <div className="cake-scene-wrap">
            <Cake stage={stage} candleOn={candleOn} cut={cut} />
          </div>

          {stage < 4 && (
            <div className="cake-loading">
              Preparing something sweet... {stage}/4 ✨
            </div>
          )}

          {stage >= 4 && candleOn && (
            <motion.div
              className="cake-action"
              initial={{ opacity: 0, y: 18, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55 }}
            >
              <p>Make a wish, Sundari ✨</p>
              <button
                type="button"
                onClick={blowCandle}
                className="cake-button"
              >
                🕯️ Blow Out Candle
              </button>
            </motion.div>
          )}

          {stage >= 4 && !candleOn && !cut && (
            <motion.div
              className="cake-action"
              initial={{ opacity: 0, y: 18, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55 }}
            >
              <p>The candle is off! 💕</p>
              <button
                type="button"
                onClick={cutCake}
                className="cake-button"
              >
                🔪 Cut The Cake 🍰
              </button>
            </motion.div>
          )}

          {cut && (
            <motion.div
              className="cut-message"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
            >
              <PartyPopper size={20} />
              <span>Yay! Cake is cut — let the celebration begin! 🎉</span>
              <Sparkles size={20} />
            </motion.div>
          )}
        </div>

        <div className="cake-celebration">
          <div className="cake-cloud cake-cloud-left" />
          <div className="cake-cloud cake-cloud-right" />

          <div className="cake-character cake-bunny">
            <img
              src="/stickers/bunny-party.gif"
              alt="Cute birthday bunny"
            />
          </div>

          <div className="cake-gift" aria-hidden="true">
            <div className="cake-gift-lid" />
            <div className="cake-gift-body">
              <span className="cake-ribbon-v" />
              <span className="cake-ribbon-h" />
            </div>
            <div className="cake-bow">🎀</div>
          </div>

          <div className="cake-character cake-penguin">
            <img
              src="/stickers/penguin-party.gif"
              alt="Cute birthday penguin"
            />
          </div>
        </div>

        <div className="final-card cake-final-card">
          <span>🎂</span>
          <span>
            {cut
              ? "You deserve all the happiness in the world! 💕"
              : "A sweet surprise is waiting just for you! 💕"}
          </span>
          <Sparkles size={20} />
        </div>
      </section>

      <footer>
        Forever cheering for you • Happy Birthday, beautiful 💖
      </footer>
    </main>
  );
}

export default CakePage;
