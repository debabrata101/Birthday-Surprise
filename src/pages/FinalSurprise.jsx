import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import "./FinalSurprise.css";

function FinalSurprise() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [wrapOpen, setWrapOpen] = useState(false);
  const [showLetterBox, setShowLetterBox] = useState(false);
  const signRef = useRef(null);

  const handleOpen = () => {
    if (wrapOpen) return;
    setWrapOpen(true);
    // after flap anim finishes, reveal letter area and start typing
    setTimeout(() => {
      setShowLetterBox(true);
      // small delay then show typed content (open=true)
      setTimeout(() => setOpen(true), 180);
    }, 700);
  };

  const finalText = `Dear Sundari, 💗

You are the cutest, sweetest person. Just seeing you makes me forget all the tiredness of the day, and somehow, seeing you brings a kind of peace to my eyes and my heart. You are such a beautiful lady in my world. ❤️
I truly want you to go very far in life, achieve everything you dream of, and always stay happy. May this new year of your life be filled with love, happiness, laughter, and so many beautiful, sweet moments. 🌸
You have such a beautiful heart. I call you “Sundari” because you truly are beautiful. And your eyes… what can I even say about them? There is something magical about your eyes that leaves me completely mesmerized. Your whole face has this kind of beauty that makes it hard to look away. 🥹💗

Just stay the way you are. Keep smiling, keep shining, and keep being the beautiful soul that you are.

You deserve all the beautiful things life has to offer. ❤️

With all my love,
Your special friend ❤️`;

  return (
    <main className="min-h-screen w-full grid place-items-center bg-gradient-to-br from-[#fff5f9] via-[#ffe0eb] to-[#ffc5d9] p-6">
      <section className="w-[min(720px,94vw)] mx-auto text-center envelope-page">
        <div>
          <div className={`envelope-wrap ${wrapOpen ? "open" : ""}`} onClick={handleOpen}>
            <div className="letter-paper" />
            <div className="envelope-body" />
            <div className="heart-seal">💌</div>
            <div className="envelope-flap" />
          </div>

          <div id="tapHint">tap the envelope to open it</div>

          <div id="letterTextWrap" className={showLetterBox ? "show" : ""}>
            <div id="letterText">
              {open && (
                <Typewriter
                  text={finalText}
                  speed={18}
                  onComplete={() => {
                    if (signRef.current) signRef.current.classList.add("show");
                  }}
                />
              )}
            </div>
            <div id="signoff" ref={signRef}>Happy Birthday, Sundari 💗</div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => navigate("/")} className="rounded-full bg-white border px-4 py-2 text-[#9e4a6b]">
            Back
          </button>
        </div>
      </section>
    </main>
  );
}

export default FinalSurprise;
