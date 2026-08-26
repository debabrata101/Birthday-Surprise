import { useEffect, useState } from "react";

function Typewriter({ text = "", speed = 24, onComplete }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const t = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(t);
        setDone(true);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(t);
  }, [text, speed, onComplete]);

  return (
    <div className="text-sm sm:text-base leading-7 whitespace-pre-wrap text-[#704d5c]">
      {displayed}
      <span className="typewriter-cursor" style={{ visibility: done ? "hidden" : "visible" }}>|</span>
    </div>
  );
}

export default Typewriter;
