import { Heart, Sparkles, Gift, Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Wish.css";

const cards = [
  { image: "/stickers/bunny-party.gif", caption: "Celebrate! 💕" },
  { image: "/stickers/party-cute.gif", caption: "Party Time! 🎉" },
  { image: "/stickers/happy-birthday.png", caption: "Just For You 💖" },
  { image: "/stickers/birthday-girl.gif", caption: "Make A Wish ✨" },
  { image: "/stickers/birthday-cake.gif", caption: "Sweet Wishes 🎂" },
  { image: "/stickers/penguin-party.gif", caption: "Enjoy Your Day! 🐧" },
];

const confetti = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.17) % 4}s`,
  duration: `${4 + ((i * 13) % 5)}s`,
  rotate: `${(i * 29) % 360}deg`,
}));

export function HangingCards() {
  return (
    <section className="hanging-area" aria-label="Birthday stickers">
      <div className="fairy-lights">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="rope" />

      <div className="marquee-window">
        <div className="marquee-track">
          {[...cards, ...cards].map((card, i) => (
            <div className="hanging-wrap" key={`${card.caption}-${i}`}>
              <div className="clothespin" />
              <article className={`photo-card card-${i % 6}`}>
                <div className="photo-frame">
                  <img src={card.image} alt={card.caption} />
                </div>
                <p>{card.caption}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wish() {
  const navigate = useNavigate();

  return (
    <main className="birthday-page wish-page">
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />

      {confetti.map((c) => (
        <i
          className="confetti"
          key={c.id}
          style={{
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
            transform: `rotate(${c.rotate})`,
          }}
        />
      ))}

      <button
        className="music-button"
        type="button"
        onClick={() => navigate("/cake")}
        aria-label="Return to the cake page"
      >
        <Music2 size={19} />
        <span>Back to cake</span>
      </button>

      <HangingCards />

      <section className="hero hero-show">
        <div className="mini-badge">
          <Sparkles size={16} />
          A little surprise for you
          <Sparkles size={16} />
        </div>

        <h1>Happy Birthday</h1>

        <div className="heart-line">
          <span />
          <Heart className="heart-icon" fill="currentColor" size={34} />
          <span />
        </div>

        <div className="special-ribbon">To My Special Girl 💗</div>

        <p className="wish">
          Happy Birthday to the most amazing, beautiful and wonderful girl in
          my life. 💕
          <br />
          You make every day brighter and every moment more special.
          <br />
          May your day be as lovely as you are. Stay happy, stay blessed
          <br className="desktop-break" /> and keep shining always! ✨
        </p>

        <div className="hero-actions">
          <button
            type="button"
            onClick={() => navigate("/letter")}
            className="love-button"
          >
            <Heart size={19} fill="currentColor" />
            My Birthday Wish
          </button>

          <span className="tiny-note">
            <Gift size={17} />
            Made with love, just for you
          </span>
        </div>

        <div className="celebration-stage">
          <div className="cloud cloud-left" />
          <div className="cloud cloud-right" />

          <div className="character bunny">
            <img
              src="/stickers/bunny-party.gif"
              alt="Cute birthday bunny"
            />
          </div>

          <div className="gift-box" aria-hidden="true">
            <div className="gift-lid" />
            <div className="gift-body">
              <span className="ribbon-v" />
              <span className="ribbon-h" />
            </div>
            <div className="bow">🎀</div>
          </div>

          <div className="character penguin">
            <img
              src="/stickers/penguin-party.gif"
              alt="Cute birthday penguin"
            />
          </div>
        </div>

        <div className="final-card">
          <span>🎂</span>
          <span>You deserve all the happiness in the world! 💕</span>
          <Sparkles size={21} />
        </div>
      </section>

      <footer>
        Forever cheering for you • Happy Birthday, beautiful 💖
      </footer>
    </main>
  );
}

export default Wish;
